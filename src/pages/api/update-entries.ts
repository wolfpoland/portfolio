import { NextApiRequest, NextApiResponse } from "next";
import { RedisKeys } from "patryk/utils/redis/redis-keys";
import { GuestBookEntry } from "../../components/guest-book/model/guest-book-entry";
import { KVStorage } from "../../utils/redis/redis";

export default async function updateEntries(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const entry = JSON.parse(req.body);

  const entries: Array<GuestBookEntry> =
    (
      await KVStorage.hgetall<{ entries: Array<GuestBookEntry> }>(
        RedisKeys.ENTRIES,
      )
    )?.entries ?? [];

  const index = entries.findIndex((e) => e.id === entry.id);
  entries[index] = entry;

  await KVStorage.hset(RedisKeys.ENTRIES, { entries });

  res.status(200).json({ message: "ok" });
}
