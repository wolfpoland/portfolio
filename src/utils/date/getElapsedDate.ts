import {
  addMonths,
  addYears,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

export function getElapsedDate(startDate: Date, endDate: Date) {
  const years = differenceInYears(endDate, startDate);
  const addedYears = addYears(startDate, years);
  const monthsAfterYears = differenceInMonths(endDate, addedYears);
  const addedMonths = addMonths(addedYears, monthsAfterYears);
  const daysAfterMonths = differenceInDays(endDate, addedMonths);

  return `${years} years ${monthsAfterYears} months ${daysAfterMonths} days`;
}
