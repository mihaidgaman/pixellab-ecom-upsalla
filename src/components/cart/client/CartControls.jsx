import { cartContext } from "@/contexts";
import Link from "next/link";
import { useContext } from "react";
import { CgShoppingBag } from "react-icons/cg";

export const CartControls = () => {
  const obj = useContext(cartContext);

  return (
    <ul className="flex border border-1-0 border-r-0 border-zinc-400">
      <li>
        <Link
          href="/cart"
          className="w-20 aspect-square flex justify-center items-center"
        >
          <span className="relative">
            <span className="w-20 h-20 flex justify-center items-center transition-colors hover:text-amber-600 relative">
              <CgShoppingBag></CgShoppingBag>
            </span>
          </span>
        </Link>
      </li>
    </ul>
  );
};
