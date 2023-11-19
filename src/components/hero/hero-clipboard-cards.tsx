import { memo } from "react";
import { BsFillEnvelopeFill, BsTelephoneFill } from "react-icons/bs";

import { Clipboard } from "patryk/components/clipboard/clipboard";
import { Card } from "patryk/components/ui/card";

export const HeroClipboardCards = memo(() => {
  return (
    <>
      <Card className="z-20 mb-3 grid grid-cols-2 items-center justify-between gap-3 overflow-hidden bg-primary-foreground p-2 px-3">
        <div className="grow-0">
          <div className="flex items-center gap-3">
            <BsFillEnvelopeFill className="flex-shrink-0" />
            <span className="no-underline"> krasuskipatryk94@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Clipboard
            testId="clipboard-button"
            textToCopy="krasuskipatryk94@gmail.com"
          />
        </div>
      </Card>

      <Card className="z-20 flex items-center justify-between bg-primary-foreground p-2 px-3">
        <div className="flex items-center gap-3">
          <BsTelephoneFill />
          <span className="no-underline">+48 530 044 418</span>
        </div>
        <div className="flex items-center justify-end">
          <Clipboard textToCopy="+48530044418" />
        </div>
      </Card>
    </>
  );
});

HeroClipboardCards.displayName = "HeroClipboardCards";
