import Link from "next/link";
import { useState } from "react";
import { CgMenu } from "react-icons/cg";

export const OffCanvasMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {" "}
      <button
        title="Menu"
        type="button"
        onClick={() => {
          setOpen(!open);
        }}
        className="relative z-10 transition-colors hover:text-amber-600"
      >
        <CgMenu size={32}></CgMenu>
      </button>
      <nav
        className={`${
          open ? "translate-y-full" : ""
        } bg-neutral-900 transition-transform transform-gpu text-white w-dvw h-dvh fixed left-0 -top-full z-0 lg:w-1/3`}
      >
        <ul className="flex flex-col items-center justify-center gap-y-5 h-screen text-2xl uppercase">
          <li className="transition-colors hover:text-amber-600">
            <Link href="/" title="Home">
              Home
            </Link>
          </li>

          <li className="transition-colors hover:text-amber-600">
            <Link href="/" title="Contact us">
              Contact Us
            </Link>
          </li>

          <li className="transition-colors hover:text-amber-600">
            <Link href="/" title="About us">
              About Us
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
