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
      className="container my-[10vh] mt-[200px] h-[600px] w-full overflow-hidden bg-primary-foreground p-10"
    >
      <Card className="h-full w-full">
        <CardHeader className="h-[15%]">
          <CardTitle>Guestbook</CardTitle>
        </CardHeader>
        <CardContent className="relative z-10 h-[90%] w-full bg-muted">
          <div
            className="h-[70%] w-full overflow-y-auto overflow-x-hidden"
            data-testid="guestbook-entries"
          >
            {entries
              .filter((entry) => entry.approved)
              .map((entry: GuestBookEntry, index) => (
                <GuestbookEntry entry={entry} key={index} />
              ))}
          </div>
          <div className="relative h-[30%] w-full">
            <GuestbookControls />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
