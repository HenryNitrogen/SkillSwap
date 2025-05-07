"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { api } from "@/trpc/react";

interface AttributesEditorProps {
  initialAttributes?: Record<string, unknown>;
}

export function AttributesEditor({ initialAttributes = {} }: AttributesEditorProps) {
  const [attributes, setAttributes] = useState<Record<string, unknown>>(initialAttributes);
  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");
  const router = useRouter();

  const { mutate: updateAttributes, isLoading } = api.user.updateAttributes.useMutation({
    onSuccess: () => {
      toast.success("Attributes updated successfully");
      router.refresh();
    },
    onError: () => {
      toast.error("Failed to update attributes");
    },
  });

  const handleAddAttribute = () => {
    if (!newKey.trim()) return;
    
    let parsedValue: string | number | boolean = newValue;
    
    // Try to parse the value as a number or boolean if possible
    if (newValue === "true") parsedValue = true;
    else if (newValue === "false") parsedValue = false;
    else if (!isNaN(Number(newValue))) parsedValue = Number(newValue);
    
    const updatedAttributes = { 
      ...attributes, 
      [newKey.trim()]: parsedValue 
    };
    
    setAttributes(updatedAttributes);
    setNewKey("");
    setNewValue("");
    updateAttributes({ attributes: updatedAttributes });
  };

  const handleRemoveAttribute = (key: string) => {
    const { [key]: _, ...rest } = attributes;
    setAttributes(rest);
    updateAttributes({ attributes: rest });
  };

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {Object.entries(attributes).map(([key, value]) => (
          <div
            key={key}
            className="flex items-center justify-between rounded-md border border-blue-600/20 bg-blue-900/10 p-2"
          >
            <div>
              <span className="font-medium text-blue-300">{key}:</span>
              <span className="ml-2 text-white">{String(value)}</span>
            </div>
            <button
              onClick={() => handleRemoveAttribute(key)}
              className="rounded-full p-1 hover:bg-blue-700/40"
              disabled={isLoading}
            >
              <X size={16} />
            </button>
          </div>
        ))}
        {Object.keys(attributes).length === 0 && (
          <p className="text-sm text-gray-400">No attributes yet</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          type="text"
          value={newKey}
          onChange={(e) => setNewKey(e.target.value)}
          placeholder="Attribute name"
          className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
        />
        <input
          type="text"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          placeholder="Value"
          className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              handleAddAttribute();
            }
          }}
        />
      </div>
      <Button
        onClick={handleAddAttribute}
        disabled={isLoading || !newKey.trim()}
        className="w-full rounded-md bg-blue-600/90 hover:bg-blue-700"
      >
        Add Attribute
      </Button>
    </div>
  );
}