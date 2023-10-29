import { toast } from "patryk/components/ui/use-toast";

function copyToClipboard(text: string): void {
  navigator.clipboard.writeText(text);
}

function showClipboardCopiedToast(text: string): void {
  toast({
    title: "Copied to clipboard ",
    description: `"${text}" added to clipboard`,
  });
}

export const ClipboardService = {
  copyToClipboard,
  showClipboardCopiedToast,
};
