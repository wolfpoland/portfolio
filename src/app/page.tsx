import { AnimatedTextWord } from "patryk/components/animated-word";
import { Card, CardHeader, CardTitle } from "patryk/components/ui/card";
import { FaAngular, FaHtml5, FaReact } from "react-icons/fa";
import {
  SiBitbucket,
  SiEslint,
  SiGithub,
  SiLinkedin,
  SiNextdotjs,
  SiPrisma,
  SiReactivex,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { ParticlesWrapper } from "patryk/components/particles-wrapper";
import { Metadata } from "next";
import { Clipboard } from "patryk/components/clipboard/clipboard";
import { Button } from "patryk/components/ui/button";
import { TelephoneButton } from "patryk/components/telephone/telephone-button";
import { EmailButton } from "patryk/components/email/email-button";
import { AnimatedLogo } from "patryk/components/animated-log";
import { DateUilService } from "patryk/utils/date";
import { Bio } from "patryk/components/bio";

export const metadata: Metadata = {
  title: "Patryk Krasuski - Frontend Developer",
  description:
    "My name is Patryk Krasuski and I am a frontend developer. I am currently working at BigPicture (Appfire) as a frontend developer. I am open to job offers.",
};

export default function Home() {
  return (
    <>
      <div className="mt-[120px] md:mt-0 relative md:absolute w-screen h-min-[680px] overflow-x-hidden">
        <div className="w-full h-full overflow-hidden container z-10 grid grid-cols-1 md:grid-cols-2">
          <div className="w-full h-0 md:h-screen none md:block z-10 flex flex-col justify-between items-center row-span-1 "></div>
          <div className="w-full h-full flex-col grid justify-center bg-muted mb-5 md:mb-0">
            <div className="p-3">
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>
                    <AnimatedTextWord text="Contact with me" />
                  </CardTitle>
                  <Card className="bg-primary-foreground overflow-hidden gap-3 grid grid-cols-2 justify-between items-center mb-3 z-20 p-2 px-3">
                    <div className="shrink grow-0">
                      krasuskipatryk94@gmail.com
                    </div>
                    <div className="flex items-center justify-end">
                      <Clipboard textToCopy="krasuskipatryk94@gmail.com" />
                    </div>
                  </Card>

                  <Card className="bg-primary-foreground flex justify-between items-center z-20 p-2 px-3">
                    +48 530 044 418
                    <div className="flex items-center justify-end">
                      <Clipboard textToCopy="+48530044418" />
                    </div>
                  </Card>

                  <Card className="w-[230px] overflow-hidden items-center flex">
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

              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>
                    <AnimatedTextWord text="My experience" />
                  </CardTitle>
                  <Card className="bg-primary-foreground z-20 p-2 px-3">
                    BigPicture (Appfire) | April 2019 – Present ·
                    {DateUilService.getElapsedDate(
                      new Date("2019-04-01"),
                      new Date(),
                    )}
                  </Card>

                  <Card className="bg-primary-foreground mb-3 z-20 p-2 px-3">
                    ValueAdd | April 2018 - April 2019 · 1 year 1 month
                  </Card>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>
                    <AnimatedTextWord text="Technologies" />
                  </CardTitle>
                  <Card className="bg-primary-foreground gap-3 z-20 p-2 flex items-center justify-center">
                    <FaAngular /> <FaReact /> <SiNextdotjs /> <SiReactivex />{" "}
                    <SiTypescript /> <SiRedux />
                    <SiTailwindcss /> <FaHtml5 /> <SiPrisma /> <SiEslint />
                  </Card>
                </CardHeader>
              </Card>

              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>
                    <AnimatedTextWord text="I am open to job offers" />
                  </CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
        <ParticlesWrapper />
      </div>
      <div className="block h-0 md:visible md:h-[70vh] w-full"></div>
      <div className="fixed md:sticky pt-2 z-50 pl-[10vw] mb-[30vh] top-0 w-full text-primary text-4xl flex">
        <div className="self-center">
          <div className="flex gap-2">
            <span>Patryk Krasuski</span>
            <div className="w-10 h-10 rounded-full flex justify-center items-center from-red-600 to-purple-500 bg-gradient-to-r">
              <AnimatedLogo />
            </div>
          </div>
          <span className="block">Frontend Developer</span>
        </div>
      </div>
      <div className="fixed md:sticky top-0 w-full h-[100px] bg-primary-foreground z-20 opacity-70"></div>
      <Bio />
    </>
    // </div>
  );
}
