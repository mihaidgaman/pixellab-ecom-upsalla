import { cartContext } from '@/contexts';
import Link from 'next/link';
import { useContext } from 'react';
import { CgShoppingBag } from 'react-icons/cg';

export const CartControls = () => {
  const { cartProducts } = useContext(cartContext);

  const totalItems = cartProducts.reduce(
    (acc, product) => acc + product.quantity,
    0,
  );

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
            <span className="bg-black text-white px-1 absolute top-3 right-3 transition hover:bg-zinc-400">
              {totalItems}
            </span>
          </span>
        </Link>
      </li>
    </ul>
  );
};
