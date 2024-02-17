import Link from 'next/link';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';

export const ContinueShopping = () => {
  return (
    <>
      <div>
        <Link href="/products">
          <button
            title="Back to Shop"
            className="flex items-center justify-center border border-black text-black text-center lg:text-xl p-7 transition-colors hover:bg-amber-600 cursor-pointer hover:text-white hover:border-amber-600"
          >
            <HiOutlineArrowNarrowLeft size="30"></HiOutlineArrowNarrowLeft>
            <span className="pl-1 lg:pl-8 uppercase">Back to Shop</span>
          </button>
        </Link>
      </div>
    </>
  );
};
