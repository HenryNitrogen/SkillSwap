"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { generateReactHelpers } from "@uploadthing/react/hooks";
import { toast } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";
import type { OurFileRouter } from "@/lib/uploadthing";

const { useUploadThing } = generateReactHelpers<OurFileRouter>();

export function UploadButton() {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  const { startUpload } = useUploadThing("profileImage");
  const { mutate: updateProfileImage } = api.user.updateProfileImage.useMutation({
    onSuccess: () => {
      toast.success("Profile image updated");
      router.refresh();
    },
    onError: () => {
      toast.error("Failed to update profile image");
    },
  });

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile) setFile(selectedFile);
    },
    [],
  );

  const handleUpload = useCallback(async () => {
    if (!file) return;

    try {
      setIsUploading(true);
      const uploadResult = await startUpload([file]);
      
      if (uploadResult && uploadResult[0]) {
        updateProfileImage({ url: uploadResult[0].url });
      }
    } catch (err) {
      toast.error("Upload failed");
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  }, [file, startUpload, updateProfileImage]);

  return (
    <div className="flex flex-col gap-4">
      <input 
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="rounded-md border border-white/10 bg-white/5 p-2"
      />
      <Button 
        onClick={handleUpload} 
        disabled={!file || isUploading}
        className="bg-blue-600/90 hover:bg-blue-700"
      >
        {isUploading ? "Uploading..." : "Upload Profile Image"}
      </Button>
    </div>
  );
}