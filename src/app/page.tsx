import { Metadata } from "next";

import { Bio } from "patryk/components/bio";
import { Guestbook } from "patryk/components/guest-book/guest-book";
import { Hero } from "patryk/components/hero/hero";
import { Navbar } from "patryk/components/navbar";
import { ParticlesWrapper } from "patryk/components/particles-wrapper";

export const metadata: Metadata = {
  title: "Patryk Krasuski - Frontend Developer",
  description:
    "My name is Patryk Krasuski and I am a frontend developer. I am currently working at BigPicture (Appfire) as a frontend developer. I am open to job offers.",
};

export default function Home() {
  return (
    <>
      <div className="h-min-[680px] relative mt-[120px] w-full overflow-x-hidden md:absolute md:mt-0">
        <section about="hero" data-testid="hero">
          <Hero />
        </section>
        {process.env.E2E === "true" ? null : <ParticlesWrapper />}
      </div>
      <div className="block h-0 w-full md:visible md:h-[70vh]"></div>
      <Navbar />
      <div className="fixed top-0 z-20 h-[100px] w-full bg-primary-foreground opacity-70 md:sticky"></div>
      <section data-testid="bio" about="bio">
        <Bio />
      </section>
      <section data-testid="guestbook" about="guestbook">
        <Guestbook />
      </section>
      <div className="h-[10vh] w-full"></div>
    </>
  );
}
