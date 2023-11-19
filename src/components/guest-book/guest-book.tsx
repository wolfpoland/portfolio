import { GuestbookControls } from "patryk/components/guest-book/guest-book-controls";
import { GuestbookEntry } from "patryk/components/guest-book/guest-book-entry";
import { GuestBookEntry } from "patryk/components/guest-book/model/guest-book-entry";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "patryk/components/ui/card";
import { redis } from "patryk/redis";
import { EntriesState } from "patryk/utils/state/entries-state";

async function sendEntry(entry: GuestBookEntry) {
  "use server";

  const entriesState = EntriesState.getInstance();

  entriesState.addEntry(entry);

  await redis.hset(`guest-book-entries2`, {
    entries: entriesState.getEntries(),
  });
}

export const Guestbook = async () => {
  const entries: Array<GuestBookEntry> =
    (
      await redis.hgetall<{ entries: Array<GuestBookEntry> }>(
        "guest-book-entries2",
      )
    )?.entries ?? [];

  const entriesState = EntriesState.getInstance();
  entriesState.setEntries(entries);

  return (
    <div className="container my-[10vh] mt-[200px] h-[600px] w-full overflow-hidden bg-primary-foreground p-10">
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
            <GuestbookControls sendEntry={sendEntry} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
