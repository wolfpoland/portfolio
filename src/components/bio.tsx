import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "patryk/components/ui/card";
import { CircleBackground } from "patryk/components/ui/circle-background";
import { cn } from "patryk/utils/utility/utils";

export const Bio = () => {
  return (
    <div
      data-testid="bio-container"
      className={cn(
        "relative z-10 h-full w-full bg-secondary py-10 text-secondary-foreground",
      )}
    >
      <div
        className={cn(
          "grid h-full grid-cols-12 items-center gap-8 sm:container lg:gap-16 xl:gap-24",
        )}
      >
        <div className="relative col-span-6 hidden h-full xl:block">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <CircleBackground
              color="#606c88"
              className={cn({
                "animate-spin-slow": !process.env.CI,
              })}
            />
          </div>

          <Image
            data-testid="bio-image"
            src="/patryk.webp"
            alt="That's me"
            fetchPriority="low"
            loading="lazy"
            width={650}
            height={650}
            placeholder="empty"
            priority={false}
            className="absolute
             left-1/2 top-1/2 z-10 mx-auto w-full max-w-[366px] -translate-x-1/2 -translate-y-1/2 rounded-full shadow-2xl"
          />
        </div>
        <div
          data-testid="bio-description"
          className="col-span-12 flex h-full flex-col items-center justify-center gap-8 xl:col-span-6"
        >
          <Card className="w-full xl:w-[500px] 2xl:w-[700px]">
            <CardHeader>
              <CardTitle className="text-2xl text-balance">Commercial Experience</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-pretty mb-3 text-xl">
                I have a lot of experience as a front-end developer at
                BigPicture, which is part of Appfire. There, I make interactive
                Gantt charts using Angular. <br />
              </p>
              <p className="text-pretty text-xl">
                After work, I keep learning and working on projects with Next.js
                and React.
              </p>
            </CardContent>
          </Card>

          <Card className="w-full xl:w-[500px] 2xl:w-[700px]">
            <CardHeader>
              <CardTitle className="text-2xl text-balance">
                Passion for programming
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-pretty mb-3 text-xl">
                I really enjoy building things. It makes me happy to make
                something and then see how it turns out. I like trying out new
                tech stuff.
                <br /> I keep an eye on different groups that talk about JS,
                React and a little bit of Go. I also often watch people like
                ThePrimeagen, Theo, and Dan Abramov.
              </p>

              <p className="text-pretty mb-3 text-xl">
                Programming is definitely not just about making money for me.
              </p>
            </CardContent>
          </Card>

          <Card className="w-full xl:w-[500px] 2xl:w-[700px]">
            <CardHeader>
              <CardTitle className="text-balance">
                Stubbornness in reaching the end goal
              </CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-pretty mb-3 text-xl">
                From my university days to my current job, I have developed a
                persistent drive to reach the end goal. Whether it was working
                on projects in ASM during university, using Java, or now
                employing JavaScript in my daily job, I am committed to
                achieving the final objective
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
