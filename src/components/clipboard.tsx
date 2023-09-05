"use client";

import { Button } from "patryk/components/ui/button";
import { FC } from "react";
import { toast } from "patryk/components/ui/use-toast";

export type ClipboardProps = {
  textToCopy: string;
};

export const Clipboard: FC<ClipboardProps> = ({ textToCopy }) => {
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(textToCopy);
        toast({
          title: "Copied to clipboard ",
          description: `"${textToCopy}" added to clipboard`,
        });
      }}
      variant="outline"
    >
      Copy
    </Button>
  );
};
