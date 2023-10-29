"use client";

import { Button } from "patryk/components/ui/button";
import { FC, memo } from "react";
import { ClipboardService } from "patryk/components/clipboard/clipboard-service";

export type ClipboardProps = {
  textToCopy: string;
};

export const Clipboard: FC<ClipboardProps> = memo(({ textToCopy }) => {
  return (
    <Button
      onClick={() => {
        ClipboardService.copyToClipboard(textToCopy);
        ClipboardService.showClipboardCopiedToast(textToCopy);
      }}
      variant="outline"
    >
      Copy
    </Button>
  );
});

Clipboard.displayName = "Clipboard";
