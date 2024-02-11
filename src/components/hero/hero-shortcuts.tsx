"use client";
import Link from "next/link";
import { EmailButton } from "patryk/components/email/email-button";
import { TelephoneButton } from "patryk/components/telephone/telephone-button";
import { buttonVariants } from "patryk/components/ui/button";
import { Card } from "patryk/components/ui/card";
import { cn } from "patryk/utils/utility/utils";
import { memo } from "react";
import { SiBitbucket, SiGithub, SiLinkedin } from "react-icons/si";

export const HeroShortcuts = memo(() => {
  return (
    <Card
      data-testid="hero-contact-shortcut"
      className="z-10 flex w-[276px] items-center overflow-hidden"
    >
      <EmailButton email="krasuskipatryk94@gmail.com" />
      <TelephoneButton phoneNumber="+48530044418" />
      <Link
        aria-label="linkedin profile"
        className={buttonVariants({ variant: "ghost" })}
        href="https://www.linkedin.com/in/patryk-krasuski-400350148/"
        target="_blank"
      >
        <SiLinkedin />
      </Link>
      <Link
        aria-label="bitbucket"
        className={buttonVariants({ variant: "ghost" })}
        href="https://bitbucket.org/wolfiak/workspace/repositories/"
        target="_blank"
      >
        <SiBitbucket />
      </Link>
      <Link
        aria-label="github"
        className={buttonVariants({ variant: "ghost" })}
        href="https://github.com/wolfpoland"
        target="_blank"
      >
        <SiGithub />
      </Link>
      <Link
        aria-label="cv download"
        className={cn(buttonVariants({ variant: "ghost" }), "w-[46px] text-sm")}
        href="patryk-krasuski-cv.pdf"
        target="_blank"
      >
        CV
      </Link>
    </Card>
  );
});

HeroShortcuts.displayName = "HeroShortcuts";
