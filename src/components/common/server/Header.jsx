import Link from "next/link";
import { OffCanvasMenu } from "../client";
import { IoLogoOctocat } from "react-icons/io5";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";

// // consider jsx is a normal data type
// const jsxLogo = (
//   <span className="bg-white block w-4 aspect-square rounded-full"></span>
// );

export const Header = () => {
  return (
    <div className="bg-neutral-900 text-white flex lg:flex-col justify-between items-center h-full p-4 lg:py-8">
      {/* {forced example} */}
      <Link href="/" className="relative z-10">
        <IoLogoOctocat className="text-3xl transition-colors hover:text-amber-600"></IoLogoOctocat>
      </Link>

      <OffCanvasMenu></OffCanvasMenu>

      <ul className="hidden lg:flex z-10 flex-col justify-between items-center gap-6">
        <li className="transition-colors hover:text-amber-600 text-lg">
          <a
            href="http://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
          >
            <SlSocialFacebook></SlSocialFacebook>
          </a>
        </li>

        <li className="transition-colors hover:text-amber-600 text-lg">
          <a
            href="http://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter"
          >
            <CiTwitter></CiTwitter>
          </a>
        </li>

        <li className="transition-colors hover:text-amber-600 text-lg">
          <a
            href="http://google.ro"
            target="_blank"
            rel="noopener noreferrer"
            title="Google"
          >
            <FaGoogle></FaGoogle>
          </a>
        </li>
      </ul>
    </div>
  );
};
