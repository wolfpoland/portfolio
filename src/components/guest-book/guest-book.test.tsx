import { cleanup, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GuestbookControls } from "patryk/components/guest-book/guest-book-controls";
import { GuestBookEntry } from "patryk/components/guest-book/model/guest-book-entry";
import * as sendEntry from "patryk/components/guest-book/send-entry";
import { afterEach, expect, it, vi } from "vitest";

afterEach(cleanup);

it("should render the guest book component", () => {
  render(<GuestbookControls />);
});

it("should have disabled send button when text area is empty", async () => {
  render(<GuestbookControls />);

  const sendButton = await screen.findByTestId("guestbook-send-button");
  const textarea = await screen.findByTestId("guestbook-textarea");

  expect(textarea.textContent).toBe("");

  expect(sendButton).toHaveProperty("disabled", true);
});

it("should have enabled send button when text area is not empty", async () => {
  const user = userEvent.setup();
  render(<GuestbookControls />);

  const sendButton = await screen.findByTestId("guestbook-send-button");
  const textarea = await screen.findByTestId("guestbook-textarea");

  expect(textarea.textContent).toBe("");
  await user.type(textarea, "test");

  expect(sendButton).toHaveProperty("disabled", false);
});

it("should pass the author and text to the sendEntry function", async () => {
  const user = userEvent.setup();
  vi.stubEnv("NODE_ENV", "test");
  vi.setSystemTime(new Date("2021-09-12"));

  vi.spyOn(crypto, "randomUUID").mockImplementation(() => "test");
  const mock = vi.spyOn(sendEntry, "sendEntry");

  mock.mockImplementation(async (entry) => {});

  render(<GuestbookControls />);

  const sendButton = await screen.findByTestId("guestbook-send-button");
  const textarea = await screen.findByTestId("guestbook-textarea");
  const authorInput = await screen.findByTestId("guestbook-author");

  await user.type(textarea, "test");
  await user.clear(authorInput);
  await user.type(authorInput, "test");

  await user.click(sendButton);

  expect(mock).toHaveBeenCalledWith({
    approved: false,
    author: "test",
    date: "12-09-2021",
    id: "test",
    text: "test",
  } as GuestBookEntry);

  vi.resetAllMocks();
  vi.unstubAllEnvs();
});
