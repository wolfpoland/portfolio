import { memo } from "react";
import { Card } from "patryk/components/ui/card";
import { BsFillEnvelopeFill, BsTelephoneFill } from "react-icons/bs";
import { Clipboard } from "patryk/components/clipboard/clipboard";

export const HeroClipboardCards = memo(() => {
  return (
    <>
      <Card className="bg-primary-foreground overflow-hidden gap-3 grid grid-cols-2 justify-between items-center mb-3 z-20 p-2 px-3">
        <div className="grow-0">
          <div className="flex items-center gap-3">
            <BsFillEnvelopeFill className="flex-shrink-0" />
            <span> krasuskipatryk94@gmail.com</span>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Clipboard
            testId="clipboard-button"
            textToCopy="krasuskipatryk94@gmail.com"
          />
        </div>
      </Card>

      <Card className="bg-primary-foreground flex justify-between items-center z-20 p-2 px-3">
        <div className="flex items-center gap-3">
          <BsTelephoneFill /> +48 530 044 418
        </div>
        <div className="flex items-center justify-end">
          <Clipboard textToCopy="+48530044418" />
        </div>
      </Card>
    </>
  );
});
HeroClipboardCards.displayName = "HeroClipboardCards";
