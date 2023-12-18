import {
  addMonths,
  addYears,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

export function getElapsedDate(startDate: Date, endDate: Date) {
  return process.env.E2E === "true"
    ? formatDate(5, 7, 13)
    : _getElapsedDate(startDate, endDate);
}

function formatDate(years: number, months: number, days: number) {
  return `${years} years ${months} months ${days} days`;
}

function _getElapsedDate(startDate: Date, endDate: Date) {
  if (endDate < startDate) {
    throw new Error("End date cannot be less than start date");
  }

  const years = differenceInYears(endDate, startDate);
  const addedYears = addYears(startDate, years);
  const monthsAfterYears = differenceInMonths(endDate, addedYears);
  const addedMonths = addMonths(addedYears, monthsAfterYears);
  const daysAfterMonths = differenceInDays(endDate, addedMonths);

  return formatDate(years, monthsAfterYears, daysAfterMonths);
}
