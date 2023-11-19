import { GuestbookControls } from "patryk/components/guest-book/guest-book-controls";
import { GuestBookEntry } from "patryk/components/guest-book/model/guest-book-entry";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "patryk/components/ui/card";
import { redis } from "patryk/redis";

async function sendEntry(entry: GuestBookEntry) {
  "use server";

  const rawEntries: { entries: Array<GuestBookEntry> } | Array<null> =
    (await redis.hgetall<{ entries: Array<GuestBookEntry> }>(
      "guest-book-entries2",
    )) ?? [];

  console.log("entry", entry);

  const entries = rawEntries.entries;

  if (!Array.isArray(entries)) {
    return;
  }

  entries.push({
    ...entry,
    approved: false,
  });
  console.log("send enter");

  await redis.hset(`guest-book-entries2`, { entries });
}

export const Guestbook = async () => {
  const rawEntries: { entries: Array<GuestBookEntry> } | Array<null> =
    (await redis.hgetall<{ entries: Array<GuestBookEntry> }>(
      "guest-book-entries2",
    )) ?? [];

  console.log("entries", rawEntries);

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
            {/* {isArray(rawEntries.entries) &&
              rawEntries.entries
                .filter((entry) => entry.approved)
                .map((entry: GuestBookEntry, index) => (
                  <GuestbookEntry entry={entry} key={index} />
                ))} */}
          </div>
          <div className="relative h-[30%] w-full">
            <GuestbookControls sendEntry={sendEntry} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
