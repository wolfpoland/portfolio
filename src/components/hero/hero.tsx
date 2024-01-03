import { HeroClipboardCards } from "patryk/components/hero/hero-clipboard-cards";
import { HeroJobHistory } from "patryk/components/hero/hero-job-history";
import { HeroShortcuts } from "patryk/components/hero/hero-shortcuts";
import { Technologies } from "patryk/components/hero/technologies";
import { Card, CardHeader, CardTitle } from "patryk/components/ui/card";
import { TypingAnimation } from "patryk/components/ui/typing-animation";

export const Hero = () => {
  return (
    <div className="z-10 grid h-full w-full grid-cols-1 overflow-hidden sm:container md:grid-cols-2">
      <div className="none z-10 row-span-1 flex h-0 w-full flex-col items-center justify-between md:block md:h-screen "></div>
      <div className="mb-5 grid h-full w-full flex-col justify-center rounded-lg border bg-muted text-muted-foreground md:mb-0">
        <div className="flex flex-col justify-center p-3 ">
          <Card data-testid="hero-contact-with-me" className="overflow-hidden">
            <CardHeader>
              <CardTitle>
                <TypingAnimation
                  dataTestId="hero-contact-text"
                  text="Contact with me"
                />
              </CardTitle>

              <HeroClipboardCards />
              <HeroShortcuts />
            </CardHeader>
          </Card>

          <Card data-testid="hero-technologies" className="overflow-hidden">
            <CardHeader>
              <Technologies />
            </CardHeader>
          </Card>

          <Card data-testid="hero-job-history" className="overflow-hidden">
            <HeroJobHistory />
          </Card>

          <Card data-testid="hero-job-offers" className="overflow-hidden">
            <CardHeader>
              <CardTitle>
                <TypingAnimation text="I am open to job offers" />
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};
