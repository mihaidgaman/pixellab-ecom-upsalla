import { uiContext } from "@/contexts";
import { useContext } from "react";
import { VscLayoutStatusbar } from "react-icons/vsc";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { CiGrid2V } from "react-icons/ci";

export const GridControls = () => {
  const { itemsPerRow, setItemsPerRow } = useContext(uiContext);

  return (
    <ul className="flex border border-l-0 border-r-0 border-zinc-400">
      <li>
        <button
          type="button"
          title="One per row"
          className="w-20 h-20 border-l border-zinc-400 flex justify-center items-center bg-black text-white transition-colors hover:text-amber-600"
          onClick={() => {
            setItemsPerRow("1");
          }}
        >
          <VscLayoutStatusbar></VscLayoutStatusbar>
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Two per row"
          className="w-20 h-20 border-l border-zinc-400 flex justify-center items-center transition-colors hover:text-amber-600"
          onClick={() => {
            setItemsPerRow("2");
          }}
        >
          <CiGrid2V></CiGrid2V>
        </button>
      </li>

      <li>
        <button
          type="button"
          title="Four per row"
          className="w-20 h-20 border-l border-zinc-400 flex justify-center items-center transition-colors hover:text-amber-600"
          onClick={() => {
            setItemsPerRow("4");
          }}
        >
          <TfiLayoutGrid2></TfiLayoutGrid2>
        </button>
      </li>
    </ul>
  );
};
