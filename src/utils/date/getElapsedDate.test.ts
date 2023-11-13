import { expect, it } from "vitest";
import { getElapsedDate } from "./getElapsedDate";

it("should return the elapsed year date", () => {
  const startDate = new Date("2020-01-01");
  const endDate = new Date("2021-01-01");

  expect(getElapsedDate(startDate, endDate)).toBe("1 years 0 months 0 days");
});

it("should return the elapsed month date", () => {
  const startDate = new Date("2020-01-01");
  const endDate = new Date("2020-02-01");

  expect(getElapsedDate(startDate, endDate)).toBe("0 years 1 months 0 days");
});

it("should return the elapsed day date", () => {
  const startDate = new Date("2020-01-01");
  const endDate = new Date("2020-01-02");

  expect(getElapsedDate(startDate, endDate)).toBe("0 years 0 months 1 days");
});

it("should return the elapsed year and month and day  date", () => {
  const startDate = new Date("2020-01-01");
  const endDate = new Date("2021-02-02");

  expect(getElapsedDate(startDate, endDate)).toBe("1 years 1 months 1 days");
});

it("should return the elapsed date when date are the same", () => {
  const startDate = new Date("2020-01-01");
  const endDate = new Date("2020-01-01");

  expect(getElapsedDate(startDate, endDate)).toBe("0 years 0 months 0 days");
});

it("should raise error when end date is greater then start date", () => {
    const startDate = new Date("2020-01-01");
    const endDate = new Date("2019-01-01");
    
    expect(() => getElapsedDate(startDate, endDate)).toThrowError(
        "End date cannot be less than start date"
    );
});
