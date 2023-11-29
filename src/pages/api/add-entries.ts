import { NextApiRequest, NextApiResponse } from "next";
import { GuestBookEntry } from "../../components/guest-book/model/guest-book-entry";

import { KVStorage } from "../../utils/redis/redis";
import { RedisKeys } from "patryk/utils/redis/redis-keys";

export default async function addEntries(
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

  entries.push(entry);

  await KVStorage.hset(RedisKeys.ENTRIES, { entries });

  res.status(200).json({ message: "ok" });
}
