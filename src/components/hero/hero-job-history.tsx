import { memo } from "react";
import { Card, CardHeader, CardTitle } from "patryk/components/ui/card";
import { TypingAnimation } from "patryk/components/ui/typing-animation";
import { DateUilService } from "patryk/utils/date";

export const HeroJobHistory = memo(() => {
  return (
    <CardHeader>
      <CardTitle>
        <TypingAnimation text="My experience" />
      </CardTitle>
      <Card className="bg-primary-foreground z-10 p-2 px-3">
        BigPicture (Appfire) | April 2019 – Present <br />
        <span className="px-2 text-sm italic">
          {DateUilService.getElapsedDate(new Date("2019-04-01"), new Date())}
        </span>
      </Card>

      <Card className="bg-primary-foreground mb-3 z-10 p-2 px-3">
        ValueAdd | April 2018 - April 2019 <br />
        <span className="px-2 text-sm italic">1 year 1 month</span>
      </Card>
    </CardHeader>
  );
});
HeroJobHistory.displayName = "HeroJobHistory";
