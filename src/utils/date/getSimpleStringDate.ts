import { format } from "date-fns";

export function getSimpleStringDate(date: Date) {
  return format(date, "dd-MM-yyyy");
}
