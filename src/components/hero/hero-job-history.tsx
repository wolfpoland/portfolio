import { Card, CardHeader, CardTitle } from "patryk/components/ui/card";
import { TypingAnimation } from "patryk/components/ui/typing-animation";
import { DateUilService } from "patryk/utils/date";
import { memo } from "react";

export const HeroJobHistory = memo(() => {
  return (
    <CardHeader>
      <CardTitle>
        <TypingAnimation
          text="My experience"
          e2e={process.env.E2E === "true"}
        />
      </CardTitle>
      <Card className="z-10 bg-primary-foreground p-2 px-3">
        BigPicture (Appfire) | April 2019 – Present <br />
        <span className="px-2 text-sm italic">
          {DateUilService.getElapsedDate(new Date("2019-04-01"), new Date())}
        </span>
      </Card>

      <Card className="z-10 mb-3 bg-primary-foreground p-2 px-3">
        ValueAdd | April 2018 - April 2019 <br />
        <span className="px-2 text-sm italic">1 year 1 month</span>
      </Card>
    </CardHeader>
  );
});
HeroJobHistory.displayName = "HeroJobHistory";
