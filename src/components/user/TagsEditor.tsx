"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";

interface TagsEditorProps {
  initialTags?: string[];
}

export function TagsEditor({ initialTags = [] }: TagsEditorProps) {
  const [tags, setTags] = useState<string[]>(initialTags);
  const [newTag, setNewTag] = useState("");
  const router = useRouter();

  const { mutate: updateTags, isLoading } = api.user.updateTags.useMutation({
    onSuccess: () => {
      toast.success("Tags updated successfully");
      router.refresh();
    },
    onError: () => {
      toast.error("Failed to update tags");
    },
  });

  const handleAddTag = () => {
    if (!newTag.trim()) return;
    if (tags.includes(newTag.trim())) {
      toast.error("Tag already exists");
      return;
    }

    const updatedTags = [...tags, newTag.trim()];
    setTags(updatedTags);
    setNewTag("");
    updateTags({ tags: updatedTags });
  };

  const handleRemoveTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    updateTags({ tags: updatedTags });
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex items-center gap-1 rounded-full border border-blue-600/30 bg-blue-800/20 px-3 py-1 text-sm text-white"
          >
            <span>{tag}</span>
            <button
              onClick={() => handleRemoveTag(tag)}
              className="rounded-full p-1 hover:bg-blue-700/40"
              disabled={isLoading}
            >
              <X size={12} />
            </button>
          </div>
        ))}
        {tags.length === 0 && (
          <p className="text-sm text-gray-400">No tags yet</p>
        )}
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          placeholder="Enter a tag"
          className="flex-1 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddTag();
            }
          }}
        />
        <Button
          onClick={handleAddTag}
          disabled={isLoading || !newTag.trim()}
          className="rounded-md bg-blue-600/90 hover:bg-blue-700"
        >
          Add
        </Button>
      </div>
    </div>
  );
}