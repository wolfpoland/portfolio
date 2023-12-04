"use client";

import { useCallback, useEffect, useState } from "react";

import { Button } from "patryk/components/ui/button";
import { Input } from "patryk/components/ui/input";
import { Label } from "patryk/components/ui/label";
import { Textarea } from "patryk/components/ui/textarea";
import { DateUilService } from "patryk/utils/date";
import { sendEntry } from "patryk/components/guest-book/send-entry";

export const GuestbookControls = () => {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [authorValue, setAuthorValue] = useState("Annonymous");

  const onSendClick = useCallback(() => {
    if (textAreaValue.trim()?.length) {;
      sendEntry({
        id: crypto.randomUUID(),
        author: authorValue.trim() ? authorValue : "Annonymous",
        text: textAreaValue,
        date: DateUilService.getSimpleStringDate(new Date()),
        approved: false,
      });
      setTextAreaValue("");
    }
  }, [authorValue, textAreaValue]);

  useEffect(() => {
    const listenerCallback = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !e.ctrlKey && !e.shiftKey) {
        e.preventDefault();

        onSendClick();
      }
    };

    document.addEventListener("keydown", listenerCallback);

    return () => {
      document.removeEventListener("keydown", listenerCallback);
    };
  }, [onSendClick]);

  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  const onAuthorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAuthorValue(e.target.value);
  };

  return (
    <>
      <div className="w-min-[200px] mb-2 w-[25%]">
        <Label htmlFor="author">Author</Label>
        <Input
          type="text"
          id="author"
          data-testid="guestbook-author"
          placeholder="Author"
          onChange={onAuthorChange}
          value={authorValue}
        />
      </div>
      <div className="relative w-full">
        <Textarea
          data-testid="guestbook-textarea"
          value={textAreaValue}
          onChange={onTextAreaChange}
          className="resize-none whitespace-pre-line"
          placeholder="Write something nice!"
        />
        <Button
          data-testid="guestbook-send-button"
          disabled={!textAreaValue.trim()?.length}
          onClick={onSendClick}
          className="absolute bottom-0 right-3  top-[10%] h-[80%]"
        >
          Send
        </Button>
      </div>
    </>
  );
};
