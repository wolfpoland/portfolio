import { GuestBookEntry } from "./../../components/guest-book/model/guest-book-entry";

export type EntriesStateAction = "set" | "add" | "update";

export class EntriesState {
  private static instance: EntriesState;
  private entries: GuestBookEntry[];
  private observers: Array<
    (entries: GuestBookEntry[], action: EntriesStateAction) => void
  > = [];

  private constructor(entries: GuestBookEntry[]) {
    this.entries = [...entries];
  }

  public static isNotInitialized(): boolean {
    return !EntriesState.instance;
  }

  public static getInstance(): EntriesState {
    if (!EntriesState.instance) {
      EntriesState.instance = new EntriesState([]);
    }

    return this.instance;
  }

  selectEntry(
    func: (entries: GuestBookEntry[], action: EntriesStateAction) => void,
  ): void {
    this.observers.push(func);
  }

  isExpired(): boolean {
    return !!this.entries?.length;
  }

  getEntries(): GuestBookEntry[] {
    return this.entries;
  }

  setEntries(entries: GuestBookEntry[]): void {
    this.entries = entries;
    this.notifyObservers(this.entries, "set");
  }

  addEntry(entry: GuestBookEntry): void {
    this.entries = [...this.entries, entry];
    this.notifyObservers(this.entries, "add");
  }

  updateEntry(entry: GuestBookEntry): void {
    const index = this.entries.findIndex((e) => e.id === entry.id);
    this.entries[index] = entry;
    this.notifyObservers(this.entries, "update");
  }

  private notifyObservers(
    entires: GuestBookEntry[],
    action: EntriesStateAction,
  ): void {
    this.observers.forEach((observer) => observer(entires, action));
  }
}
