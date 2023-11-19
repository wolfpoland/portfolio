"use client";
import { ColumnDef } from "@tanstack/react-table";
import { ClientCalls } from "patryk/api/client";
import { GuestBookEntry } from "patryk/components/guest-book/model/guest-book-entry";

const approveEntry = (
  event: React.ChangeEvent<HTMLInputElement>,
  entry: GuestBookEntry,
) => {
  ClientCalls.updateEntries({
    ...entry,
    approved: event.target.checked,
  });
};

export const adminColumns: ColumnDef<GuestBookEntry>[] = [
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "author",
    header: "Author",
  },
  {
    accessorKey: "text",
    header: "Text",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "approved",
    header: "Approved",
    cell: ({ row }) => {
      return (
        <input
          onChange={(event) => approveEntry(event, row.original)}
          type="checkbox"
          defaultChecked={row.original.approved}
        />
      );
    },
  },
];
