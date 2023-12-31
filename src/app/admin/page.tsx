import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { adminColumns } from "patryk/app/admin/(components)/admin-columns";
import { authOptions } from "patryk/app/api/auth/[...nextauth]/route";
import { DataTable } from "patryk/components/data-tabel";
import { GuestBookEntry } from "patryk/components/guest-book/model/guest-book-entry";
import { KVStorage } from "patryk/utils/redis/redis";
import { RedisKeys } from "patryk/utils/redis/redis-keys";
import { EntriesState } from "patryk/utils/state/entries-state";

export default async function Admin() {
  const session = await getServerSession(authOptions);
  const entriesState = EntriesState.getInstance();
  let entries: Array<GuestBookEntry> = [];
  // test
  if (entriesState.isExpired()) {
    entries =
      (
        await KVStorage.hgetall<{ entries: Array<GuestBookEntry> }>(
          RedisKeys.ENTRIES,
        )
      )?.entries ?? [];
    entriesState.setEntries(entries);
  } else {
    entries = entriesState.getEntries();
  }

  if (!session) {
    redirect("/auth");
  }

  return (
    <div className="container">
      <DataTable columns={adminColumns} data={entries} />
    </div>
  );
}
