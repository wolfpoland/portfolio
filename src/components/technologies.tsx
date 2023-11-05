"use client";
import { Card } from "patryk/components/ui/card";
import { FaAngular, FaHtml5, FaReact } from "react-icons/fa";
import {
  SiEslint,
  SiNextdotjs,
  SiPrisma,
  SiReactivex,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { AnimatedIcon } from "patryk/components/ui/animated-icon";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "patryk/components/ui/hover-card";
import { LevelPresenter } from "patryk/components/level-presenter/level-presenter";

export const Technologies = () => {
  return (
    <Card className="bg-primary-foreground gap-3 z-20 p-2 flex items-center justify-center">
      <HoverCard>
        <HoverCardTrigger>
          <AnimatedIcon>
            <FaAngular />
          </AnimatedIcon>
        </HoverCardTrigger>
        <HoverCardContent>
          <LevelPresenter className="mb-5" levelCount={5} filledLevels={4} />
          I started using Angular for work in 2018, and I&apos;ve been playing
          around with it for fun since 2016. I&apos;ve worked on both big and
          small projects. I wouldn&apos;t say I&apos;m a master at it, though,
          because I haven&apos;t gotten into Angular&apos;s source code.
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger>
          <AnimatedIcon>
            <FaReact />
          </AnimatedIcon>
        </HoverCardTrigger>
        <HoverCardContent>
          <LevelPresenter className="mb-5" levelCount={5} filledLevels={3} />
          I&apos;ve been learning React.js on my own since 2018, using my free
          time to get better at it. I haven&apos;t used React.js in a job yet,
          but I&apos;ve been working on a lot of projects with it lately.
          I&apos;m really putting in the effort to learn it well.
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger>
          <AnimatedIcon>
            <SiNextdotjs />
          </AnimatedIcon>
        </HoverCardTrigger>
        <HoverCardContent>
          <LevelPresenter className="mb-5" levelCount={5} filledLevels={2} />
          I&apos;ve been using Next.js in my personal projects, and I&apos;m
          still learning the ropes. I actually started experimenting with it
          before Server Components came out, but that release really pushed me
          to use it more. The T3 Stack also played a part in my decision to
          stick with it.
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger>
          <AnimatedIcon>
            <SiReactivex />
          </AnimatedIcon>
        </HoverCardTrigger>
        <HoverCardContent>
          <LevelPresenter className="mb-5" levelCount={5} filledLevels={3} />I
          like RxJs a lot, used it mostly with Angular but not only with it.
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger>
          <AnimatedIcon>
            <SiTypescript />
          </AnimatedIcon>
        </HoverCardTrigger>
        <HoverCardContent>
          <LevelPresenter className="mb-5" levelCount={5} filledLevels={4} />I
          use TypeScript in every project because it&apos;s really helpful for
          me. At my job, we do a lot of object-oriented programming (OOP), so I
          use TypeScript all the time. I&apos;m not yet at the point where I can
          make my own libraries – looking at the types in things like React
          Table can be pretty scary. But I&apos;m trying hard to get better and
          reach that level soon.
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger>
          <AnimatedIcon>
            <SiRedux />
          </AnimatedIcon>
        </HoverCardTrigger>
        <HoverCardContent>
          <LevelPresenter className="mb-5" levelCount={5} filledLevels={4} />
          I&apos;ve been using Redux for quite a while, both at previous jobs
          and in my own projects. Now at work, we have our own way of managing
          state that’s based on the CQRS pattern. But for my personal projects,
          I&apos;ve switched to using Redux Toolkit.
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger>
          <AnimatedIcon>
            <SiTailwindcss />
          </AnimatedIcon>
        </HoverCardTrigger>
        <HoverCardContent>
          <LevelPresenter className="mb-5" levelCount={5} filledLevels={3} />
          I&apos;ve been using Tailwind CSS for a while now, and I know how it
          works pretty well. I use it a lot in my everyday work and also in my
          own projects. I really like it; it’s a very important tool for me.
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger>
          <AnimatedIcon>
            <FaHtml5 />
          </AnimatedIcon>
        </HoverCardTrigger>
        <HoverCardContent>
          <LevelPresenter className="mb-5" levelCount={5} filledLevels={4} />
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger>
          <AnimatedIcon>
            <SiPrisma />
          </AnimatedIcon>
        </HoverCardTrigger>
        <HoverCardContent>
          <LevelPresenter className="mb-5" levelCount={5} filledLevels={1} />
        </HoverCardContent>
      </HoverCard>
      <HoverCard>
        <HoverCardTrigger>
          <AnimatedIcon>
            <SiEslint />
          </AnimatedIcon>
        </HoverCardTrigger>
        <HoverCardContent>
          <LevelPresenter className="mb-5" levelCount={5} filledLevels={3} />
        </HoverCardContent>
      </HoverCard>
    </Card>
  );
};
