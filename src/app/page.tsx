import { ParticlesWrapper } from "patryk/components/particles-wrapper";
import { Metadata } from "next";
import { Bio } from "patryk/components/bio";
import { Hero } from "patryk/components/hero";
import { Navbar } from "patryk/components/navbar";

export const metadata: Metadata = {
  title: "Patryk Krasuski - Frontend Developer",
  description:
    "My name is Patryk Krasuski and I am a frontend developer. I am currently working at BigPicture (Appfire) as a frontend developer. I am open to job offers.",
};

export default function Home() {
  return (
    <>
      <div className="mt-[120px] md:mt-0 relative md:absolute w-screen h-min-[680px] overflow-x-hidden">
        <section about="hero" data-testid="hero">
          <Hero />
        </section>
        <ParticlesWrapper />
      </div>
      <div className="block h-0 md:visible md:h-[70vh] w-full"></div>
      <Navbar />
      <div className="fixed md:sticky top-0 w-full h-[100px] bg-primary-foreground z-20 opacity-70"></div>
      <section data-testid="bio" about="bio">
        <Bio />
      </section>
    </>
  );
}
