import { useState } from "react";
import { Link } from "react-router-dom";
import Image from "./Image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/*LOGO */}
      <Link  to="/" className="flex items-center gap-4 text-2xl font-bold cursor-pointer">
        <Image src="logo.png" alt="blog logo" w={32} h={32} />
        <span>siblephant blog</span>
      </Link>

      {/*Mobile Menu */}
      <div className="md:hidden">
        {/* MOBILE BUTTON */}
        <div className="cursor-pointer text-4xl" onClick={() => setOpen(!open)}>
          {open ? "x" : " = "}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center gap-8 font-medium text-lg justify-center absolute top-16 bg-[#e6e6ff] transition-all ease-in-out ${open ? "right-0" : "-right-[100%]"}`}
        >
          <Link to="">Home</Link>
          <Link to="">Trending</Link>
          <Link to="">Popular</Link>
          <Link to="">About</Link>
          <Link to="">
            <button className="px-4 py-2 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
          </Link>
        </div>
      </div>

      {/*Desktop Menu */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="">Home</Link>
        <Link to="">Trending</Link>
        <Link to="">Popular</Link>
        <Link to="">About</Link>
        

        <SignedOut>
        <Link to="/login">
          <button className="px-4 py-2 rounded-3xl bg-blue-800 text-white">
            Login
          </button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
