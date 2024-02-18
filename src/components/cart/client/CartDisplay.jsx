import { cartContext } from '@/contexts';
import { useContext } from 'react';

import { BiLoaderCircle } from 'react-icons/bi';
import { CartLineItem } from '.';

export const CartDisplay = () => {
  const { cartProducts, loading } = useContext(cartContext);

  if (loading) {
    return (
      <>
        {' '}
        <div className="flex justify-center items-center">
          <BiLoaderCircle size="48" className="animate-spin"></BiLoaderCircle>
        </div>
      </>
    );
  }

  return (
    <table>
      <thead className="border-b p-3 h-12">
        <tr className="uppercase text-gray-400">
          <th></th>
          <th></th>
          <th className="font-normal px-2 text-black">Product</th>
          <th className="font-normal px-2 text-black">Price</th>
          <th className="font-normal px-2 text-black">Quantity</th>
          <th className="font-normal px-2 text-black">Total</th>
        </tr>
      </thead>

      <tbody>
        {cartProducts.map((cartProduct) => {
          return (
            <CartLineItem
              key={cartProduct.productId}
              product={cartProduct}
            ></CartLineItem>
          );
        })}
      </tbody>
    </table>
  );
};
