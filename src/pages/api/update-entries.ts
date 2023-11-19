"use server";
import { NextApiRequest, NextApiResponse } from "next";
import { GuestBookEntry } from "../../components/guest-book/model/guest-book-entry";
import { redis } from "../../redis";

export default async function updateEntries(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const entry = JSON.parse(req.body);

  const entries: Array<GuestBookEntry> =
    (
      await redis.hgetall<{ entries: Array<GuestBookEntry> }>(
        "guest-book-entries2",
      )
    )?.entries ?? [];

  const index = entries.findIndex((e) => e.id === entry.id);
  entries[index] = entry;

  await redis.hset("guest-book-entries2", {entries});

  res.status(200).json({ message: "ok" });
}
