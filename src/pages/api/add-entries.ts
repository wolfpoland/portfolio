import { NextApiRequest, NextApiResponse } from "next";
import { GuestBookEntry } from "../../components/guest-book/model/guest-book-entry";

import { KVStorage } from "../../redis";

export default async function addEntries(
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

  entries.push(entry);

  await KVStorage.hset("guest-book-entries2", { entries });

  res.status(200).json({ message: "ok" });
}
