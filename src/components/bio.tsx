import Image from "next/image";
import { DateUilService } from "patryk/utils/date";

export const Bio = () => {
  return (
    <div className="w-full h-[100vh] relative grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:visible w-full h-full md:flex flex-col justify-center items-center">
        <Image
          className="z-10"
          src="/patryk.webp"
          alt="That's me"
          width={886}
          height={904}
        />
      </div>
      <div className="w-full h-full my-[100px] md:my-0 flex flex-col justify-start items-center bg-muted text-accent-foreground">
        <div className="mt-20 container">
          <h2 className="text-7xl mb-10">My name is Patryk Krasuski</h2>
          <p className="text-4xl mb-10">
            I am currently working at BigPicture (Appfire) as a front-end
            developer.
            <br />I am open to job offers.
          </p>

          <p className="text-2xl mb-5">
            Currently I am 29 years old and have{" "}
            {DateUilService.getElapsedDate(new Date("2018-04-01"), new Date())}{" "}
            of experience as a frontend developer, mostly working with Angular
            2+.This is only my commercial experience. Before that I was working
            on my own projects, splitting that with studying at a university.
          </p>

          <p className="text-2xl">
            I&apos;m passionate about my work and always looking for new new
            challenges. I&apos;m currently working with React and Next.js.
          </p>
        </div>
      </div>
    </div>
  );
};
