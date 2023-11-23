import { GuestBookEntry } from "patryk/components/guest-book/model/guest-book-entry";

export const ClientCalls = {
  updateEntries: (entry: GuestBookEntry) => {
    fetch("/api/update-entries", {
      method: "POST",
      body: JSON.stringify(entry),
    });
  },
  addEntries: (entry: GuestBookEntry) => {
    fetch("/api/add-entries", {
      method: "POST",
      body: JSON.stringify(entry),
    });
  }
};
