import { Card, CardHeader, CardTitle } from "patryk/components/ui/card";
import { BsFillEnvelopeFill, BsTelephoneFill } from "react-icons/bs";
import { Clipboard } from "patryk/components/clipboard/clipboard";
import { EmailButton } from "patryk/components/email/email-button";
import { Button } from "patryk/components/ui/button";
import { SiBitbucket, SiGithub, SiLinkedin } from "react-icons/si";
import { TelephoneButton } from "patryk/components/telephone/telephone-button";
import { Technologies } from "patryk/components/technologies";
import { DateUilService } from "patryk/utils/date";
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

              <Card
                data-testid="hero-contact-shortcut"
                className="w-[230px] overflow-hidden items-center flex"
              >
                <EmailButton email="krasuskipatryk94@gmail.com" />
                <a href="https://www.linkedin.com/in/patryk-krasuski-400350148/">
                  <Button variant="ghost">
                    <SiLinkedin />
                  </Button>
                </a>
                <TelephoneButton phoneNumber="+48530044418" />
                <a href="https://bitbucket.org/wolfiak/workspace/repositories/">
                  <Button variant="ghost">
                    <SiBitbucket />
                  </Button>
                </a>
                <a href="https://github.com/wolfpoland">
                  <Button variant="ghost">
                    <SiGithub />
                  </Button>
                </a>
              </Card>
            </CardHeader>
          </Card>

          <Card data-testid="hero-technologies" className="overflow-hidden">
            <CardHeader>
              <Technologies />
            </CardHeader>
          </Card>

          <Card data-testid="hero-job-history" className="overflow-hidden">
            <CardHeader>
              <CardTitle>
                <TypingAnimation text="My experience" />
              </CardTitle>
              <Card className="bg-primary-foreground z-10 p-2 px-3">
                BigPicture (Appfire) | April 2019 – Present <br />
                <span className="px-2 text-sm italic">
                  {DateUilService.getElapsedDate(
                    new Date("2019-04-01"),
                    new Date(),
                  )}
                </span>
              </Card>

              <Card className="bg-primary-foreground mb-3 z-10 p-2 px-3">
                ValueAdd | April 2018 - April 2019 <br />
                <span className="px-2 text-sm italic">1 year 1 month</span>
              </Card>
            </CardHeader>
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
