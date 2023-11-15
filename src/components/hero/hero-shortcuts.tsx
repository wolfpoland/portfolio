import { EmailButton } from "patryk/components/email/email-button";
import { TelephoneButton } from "patryk/components/telephone/telephone-button";
import { Button } from "patryk/components/ui/button";
import { Card } from "patryk/components/ui/card";
import { memo } from "react";
import { SiBitbucket, SiGithub, SiLinkedin } from "react-icons/si";

export const HeroShortcuts = memo(() => {
  return (
    <Card
      data-testid="hero-contact-shortcut"
      className="w-[276px] overflow-hidden items-center flex"
    >
      <EmailButton email="krasuskipatryk94@gmail.com" />
      <TelephoneButton phoneNumber="+48530044418" />
      <a
        href="https://www.linkedin.com/in/patryk-krasuski-400350148/"
        target="_blank"
      >
        <Button variant="ghost">
          <SiLinkedin />
        </Button>
      </a>
      <a
        href="https://bitbucket.org/wolfiak/workspace/repositories/"
        target="_blank"
      >
        <Button variant="ghost">
          <SiBitbucket />
        </Button>
      </a>
      <a href="https://github.com/wolfpoland" target="_blank">
        <Button variant="ghost">
          <SiGithub />
        </Button>
      </a>
      <a href="patryk-krasuski-cv.pdf" target="_blank">
        <Button className="text-sm w-[46px]" variant="ghost">
          CV
        </Button>
      </a>
    </Card>
  );
});

HeroShortcuts.displayName = "HeroShortcuts";
