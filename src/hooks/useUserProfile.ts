"use client";

import { useSession } from "next-auth/react";
import { useCallback } from "react";
import { api } from "@/trpc/react";
import type { User } from "@/server/db/schema";

export function useUserProfile() {
  const { data: session, status } = useSession();
  const { data: userProfile, isLoading } = api.user.getMyProfile.useQuery(
    undefined,
    { enabled: !!session?.user }
  );

  const {
    mutate: updateTags,
    isPending: isUpdatingTags,
  } = api.user.updateTags.useMutation();

  const {
    mutate: updateAttributes,
    isPending: isUpdatingAttributes,
  } = api.user.updateAttributes.useMutation();

  const {
    mutate: updateBio,
    isPending: isUpdatingBio,
  } = api.user.updateBio.useMutation();

  const {
    mutate: updateProfileImage,
    isPending: isUpdatingProfileImage,
  } = api.user.updateProfileImage.useMutation();

  const setTag = useCallback(
    (tag: string) => {
      if (!userProfile) return;
      const currentTags = userProfile.tags as string[] || [];
      if (!currentTags.includes(tag)) {
        updateTags({
          tags: [...currentTags, tag],
        });
      }
    },
    [userProfile, updateTags]
  );

  const removeTag = useCallback(
    (tag: string) => {
      if (!userProfile) return;
      const currentTags = userProfile.tags as string[] || [];
      updateTags({
        tags: currentTags.filter((t) => t !== tag),
      });
    },
    [userProfile, updateTags]
  );

  const setAttribute = useCallback(
    (key: string, value: string | number | boolean) => {
      if (!userProfile) return;
      const currentAttributes = userProfile.attributes as Record<string, unknown> || {};
      updateAttributes({
        attributes: {
          ...currentAttributes,
          [key]: value,
        },
      });
    },
    [userProfile, updateAttributes]
  );

  const removeAttribute = useCallback(
    (key: string) => {
      if (!userProfile) return;
      const currentAttributes = userProfile.attributes as Record<string, unknown> || {};
      const { [key]: _, ...rest } = currentAttributes;
      updateAttributes({
        attributes: rest,
      });
    },
    [userProfile, updateAttributes]
  );

  const setBio = useCallback(
    (bio: string) => {
      updateBio({ bio });
    },
    [updateBio]
  );

  const setProfileImage = useCallback(
    (url: string) => {
      updateProfileImage({ url });
    },
    [updateProfileImage]
  );

  return {
    user: userProfile as User | undefined,
    isLoading: isLoading || status === "loading",
    isAuthenticated: !!session?.user,
    
    // Tag operations
    tags: (userProfile?.tags as string[] | undefined) || [],
    setTag,
    removeTag,
    isUpdatingTags,
    
    // Attribute operations
    attributes: (userProfile?.attributes as Record<string, unknown> | undefined) || {},
    setAttribute,
    removeAttribute,
    isUpdatingAttributes,
    
    // Bio operations
    bio: userProfile?.bio || "",
    setBio,
    isUpdatingBio,
    
    // Profile image
    profileImage: userProfile?.profileImage || userProfile?.image || null,
    setProfileImage,
    isUpdatingProfileImage,
  };
}