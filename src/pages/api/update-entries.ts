import { NextApiRequest, NextApiResponse } from "next";
import { GuestBookEntry } from "../../components/guest-book/model/guest-book-entry";
import { KVStorage } from "../../redis";

export default async function updateEntries(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const entry = JSON.parse(req.body);

  const entries: Array<GuestBookEntry> =
    (
      await KVStorage.hgetall<{ entries: Array<GuestBookEntry> }>(
        "guest-book-entries2",
      )
    )?.entries ?? [];

  const index = entries.findIndex((e) => e.id === entry.id);
  entries[index] = entry;

  await KVStorage.hset("guest-book-entries2", { entries });

  res.status(200).json({ message: "ok" });
}
