import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="fixed md:sticky pt-2 z-50 pl-[10vw] mb-[30vh] top-0 w-full text-primary text-4xl flex">
      <div className="self-center">
        <div className="flex gap-2">
          <span>Patryk Krasuski</span>
          <div className="w-10 h-10 rounded-full flex justify-center items-center from-red-600 to-purple-500 bg-gradient-to-r">
            <Image src="/beza.png" alt="me" width="32" height="32" />
          </div>
        </div>
        <span className="block">Frontend Developer</span>
      </div>
    </nav>
  );
};
