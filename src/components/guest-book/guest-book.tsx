import { GuestbookControls } from "patryk/components/guest-book/guest-book-controls";
import { GuestbookEntry } from "patryk/components/guest-book/guest-book-entry";
import { GuestBookEntry } from "patryk/components/guest-book/model/guest-book-entry";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "patryk/components/ui/card";
import { KVStorage } from "patryk/utils/redis/redis";
import { RedisKeys } from "patryk/utils/redis/redis-keys";
import { EntriesState } from "patryk/utils/state/entries-state";

export const Guestbook = async () => {
  const entries: Array<GuestBookEntry> =
    (
      await KVStorage.hgetall<{ entries: Array<GuestBookEntry> }>(
        RedisKeys.ENTRIES,
      )
    )?.entries ?? [];

  const entriesState = EntriesState.getInstance();
  entriesState.setEntries(entries);

  return (
    <div
      data-testid="guestbook-container"
      className="text-background-foreground my-[100px] flex h-[730px] w-full justify-center overflow-hidden bg-background sm:p-10"
    >
      <Card className="h-[576px] w-[1000px] overflow-hidden rounded-none sm:rounded-lg">
        <CardHeader className="h-[70px]">
          <CardTitle>Guestbook</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 h-[504px] w-full bg-muted">
          <div
            className="h-[326px] w-full overflow-y-auto overflow-x-hidden"
            data-testid="guestbook-entries"
          >
            {entries
              .filter((entry) => entry.approved)
              .map((entry: GuestBookEntry, index) => (
                <GuestbookEntry entry={entry} key={index} />
              ))}
          </div>
          <div className="relative h-[144px] w-full">
            <GuestbookControls />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
