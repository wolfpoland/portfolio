import { GuestBookEntry } from "patryk/components/guest-book/model/guest-book-entry";
import { Card, CardContent, CardFooter } from "patryk/components/ui/card";
import { FC } from "react";

type GuestbookEntryProps = {
  entry: GuestBookEntry;
};

export const GuestbookEntry: FC<GuestbookEntryProps> = ({ entry }) => {
  return (
    <Card className="my-3 min-h-min w-full bg-primary-foreground pt-3">
      <CardContent>
        <p>{entry.text}</p>
      </CardContent>
      <CardFooter>
        <span className="text-sm">
          ~{entry.author}, {entry.date}
        </span>
      </CardFooter>
    </Card>
  );
};
