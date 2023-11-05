import Image from "next/image";

export const Navbar = () => {
  return (
    <nav data-testid="navbar" className="fixed md:sticky pt-2 z-50 pl-[10vw] mb-[30vh] top-0 w-full text-primary text-4xl flex">
      <div className="self-center">
        <div className="flex gap-2">
          <span data-testid="navbar-heading-name">Patryk Krasuski</span>
          <div className="w-10 h-10 rounded-full flex justify-center items-center from-red-600 to-purple-500 bg-gradient-to-r">
            <Image src="/beza.png" alt="me" width="32" height="32" />
          </div>
        </div>
        <span data-testid="navbar-heading-profession" className="block">Frontend Developer</span>
      </div>
    </nav>
  );
};
