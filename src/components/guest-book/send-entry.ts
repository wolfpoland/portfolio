"use client";
import { ClientCalls } from "patryk/api/client";
import { GuestBookEntry } from "patryk/components/guest-book/model/guest-book-entry";
import { toast } from "patryk/components/ui/use-toast";

export async function sendEntry(entry: GuestBookEntry) {
  try {
    !entry.shadowBan && (await ClientCalls.addEntries(entry));
  } catch (e) {
    toast({
      title: "Something went wrong",
      description: "Sorry, something went wrong. Please try again later.",
    });
  }

  toast({
    title: "Guestbook entry is waiting for approval",
    description: `"${entry.author}", your entry is waiting for approval.`,
  });
}
