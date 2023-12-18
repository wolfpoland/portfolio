import { GuestBookEntry } from "../../components/guest-book/model/guest-book-entry";
import { EntriesState, EntriesStateAction } from "./entries-state";

export async function entriesSynchronization() {
  const instance = EntriesState.getInstance();

  instance.selectEntry(
    (entries: GuestBookEntry[], action: EntriesStateAction) => {
      if (action !== "set") {
      }
    },
  );
}
