"use client";
import { FC, memo, ReactNode, useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "patryk/components/ui/command";
import { Mail, Phone, PhoneOutgoing, Send } from "lucide-react";
import { ClipboardService } from "patryk/components/clipboard/clipboard-service";
import { TelephoneService } from "patryk/components/telephone/telephone-service";
import { EmailService } from "patryk/components/email/email-service";
import { SiBitbucket, SiGithub, SiLinkedin } from "react-icons/si";

export type CommandActionsProps = {
  children: ReactNode;
};

export const CommandActions: FC<CommandActionsProps> = memo(({ children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handlePhoneSelect = () => {
    ClipboardService.copyToClipboard("+48530044418");
    ClipboardService.showClipboardCopiedToast("+48 530 044 418");
    setOpen(false);
  };

  const handleEmailSelect = () => {
    ClipboardService.copyToClipboard("krasuskipatryk94@gmail.com");
    ClipboardService.showClipboardCopiedToast("krasuskipatryk94@gmail.com");
    setOpen(false);
  };

  const handlePhoneCallSelect = () => {
    TelephoneService.openTelephone("+48530044418");
    setOpen(false);
  };

  const handleEmailSendSelect = () => {
    EmailService.openEmail("krasuskipatryk94@gmail.com");
    setOpen(false);
  };

  const handleGithubSelect = () => {
    window.open("https://github.com/wolfpoland", "_blank");
  };

  const handleBitbucketSelect = () => {
    window.open(
      "https://bitbucket.org/wolfiak/workspace/repositories/",
      "_blank",
    );
  };

  const handleLinkedInSelect = () => {
    window.open(
      "https://www.linkedin.com/in/patryk-krasuski-400350148/",
      "_blank",
    );
  };

  return (
    <>
      <p className="z-50 p-1 px-2 rounded-lg border opacity-75  bg-primary-foreground fixed bottom-3 right-3 text-sm text-muted-foreground">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </p>
      {children}

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Contact">
            <CommandItem onSelect={handlePhoneSelect}>
              <Phone className="mr-2 h-4 w-4" />
              <span>Copy Telephone</span>
            </CommandItem>
            <CommandItem onSelect={handleEmailSelect}>
              <Mail className="mr-2 h-4 w-4" />
              <span>Copy Email</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Make">
            <CommandItem onSelect={handlePhoneCallSelect}>
              <PhoneOutgoing className="mr-2 h-4 w-4" />
              <span>Phone call</span>
            </CommandItem>
            <CommandItem onSelect={handleEmailSendSelect}>
              <Send className="mr-2 h-4 w-4" />
              <span>Send Email</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Visit">
            <CommandItem onSelect={handleGithubSelect}>
              <SiGithub className="mr-2 h-4 w-4" />
              <span>Github</span>
            </CommandItem>
            <CommandItem onSelect={handleBitbucketSelect}>
              <SiBitbucket className="mr-2 h-4 w-4" />
              <span>BitBucket</span>
            </CommandItem>
            <CommandItem onSelect={handleLinkedInSelect}>
              <SiLinkedin className="mr-2 h-4 w-4" />
              <span>LinkedIn</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
});

CommandActions.displayName = "CommandActions";
