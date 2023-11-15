import { HeroClipboardCards } from "patryk/components/hero/hero-clipboard-cards";
import { HeroJobHistory } from "patryk/components/hero/hero-job-history";
import { HeroShortcuts } from "patryk/components/hero/hero-shortcuts";
import { Technologies } from "patryk/components/hero/technologies";
import { Card, CardHeader, CardTitle } from "patryk/components/ui/card";
import { TypingAnimation } from "patryk/components/ui/typing-animation";

export const Hero = () => {
  return (
    <div className="w-full h-full overflow-hidden sm:container z-10 grid grid-cols-1 md:grid-cols-2">
      <div className="w-full h-0 md:h-screen none md:block z-10 flex flex-col justify-between items-center row-span-1 "></div>
      <div className="w-full h-full rounded-lg border flex-col grid justify-center bg-muted mb-5 md:mb-0">
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
