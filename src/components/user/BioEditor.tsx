"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";

interface BioEditorProps {
  initialBio?: string | null;
}

export function BioEditor({ initialBio = "" }: BioEditorProps) {
  const [bio, setBio] = useState(initialBio ?? "");
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const { mutate: updateBio, isLoading } = api.user.updateBio.useMutation({
    onSuccess: () => {
      toast.success("Bio updated successfully");
      setIsEditing(false);
      router.refresh();
    },
    onError: () => {
      toast.error("Failed to update bio");
    },
  });

  const handleSave = () => {
    updateBio({ bio });
  };

  if (!isEditing) {
    return (
      <div className="space-y-4">
        <div className="rounded-md border border-blue-600/20 bg-blue-900/10 p-4">
          {bio ? (
            <p className="whitespace-pre-wrap text-white/90">{bio}</p>
          ) : (
            <p className="text-sm italic text-gray-400">No bio yet</p>
          )}
        </div>
        <Button
          onClick={() => setIsEditing(true)}
          variant="outline"
          className="w-full border-blue-600/30 bg-blue-900/20 text-white hover:bg-blue-800/30"
        >
          Edit Bio
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        placeholder="Write something about yourself..."
        className="h-40 w-full rounded-md border border-blue-600/20 bg-blue-900/10 p-4 text-white"
      />
      <div className="flex gap-2">
        <Button
          onClick={handleSave}
          disabled={isLoading}
          className="flex-1 bg-blue-600/90 hover:bg-blue-700"
        >
          {isLoading ? "Saving..." : "Save"}
        </Button>
        <Button
          onClick={() => {
            setBio(initialBio ?? "");
            setIsEditing(false);
          }}
          variant="outline"
          disabled={isLoading}
          className="border-blue-600/30 bg-blue-900/20 text-white hover:bg-blue-800/30"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}