import Image from "next/image";

import { DateUilService } from "patryk/utils/date";

export const Bio = () => {
  return (
    <div
      data-testid="bio-container"
      className="relative grid h-full w-full grid-cols-1 pb-[50px] md:grid-cols-2 3xl:h-[80vh]"
    >
      <div className="hidden md:block md:h-full md:w-full xl:flex xl:items-start xl:justify-end">
        <Image
          data-testid="bio-image"
          className="sticky top-[100px] z-10 h-full w-full object-cover object-center 2xl:h-auto 2xl:w-auto "
          src="/patryk.webp"
          alt="That's me"
          fetchPriority="low"
          loading="lazy"
          width={886}
          height={904}
          placeholder="empty"
          priority={false}
        />
      </div>
      <div className="mt-[100px] flex h-full w-full flex-col items-center justify-start bg-muted pb-[50px] text-accent-foreground md:mt-0 3xl:h-min">
        <div data-testid="bio-description" className="container pt-20">
          <h2 className="mb-10 text-7xl">My name is Patryk Krasuski</h2>
          <p className="mb-10 text-4xl">
            I am currently working at BigPicture (Appfire) as a front-end
            developer.
            <br />I am open to job offers.
          </p>

          <p className="mb-5 text-2xl">
            Currently I am 29 years old and have{" "}
            {DateUilService.getElapsedDate(new Date("2018-04-01"), new Date())}{" "}
            of experience as a front-end developer, primarily focusing on
            Angular 2+. This duration reflects my commercial experience. Prior
            to this, I was engaged in personal projects while simultaneously
            pursuing my university studies.
          </p>

          <p className="text-2xl">
            I am deeply passionate about my work and am constantly on the
            lookout for new challenges. Currently, I am working with React and
            Next.js.
          </p>
        </div>
      </div>
    </div>
  );
};
