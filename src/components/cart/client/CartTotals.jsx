import { cartContext } from '@/contexts';
import { useProducts } from '@/hooks';
import { useContext } from 'react';

export const CartTotals = () => {
  const { cartProducts } = useContext(cartContext);
  const { products, loading } = useProducts();

  if (loading) {
    return '...loading';
  }

  const total = cartProducts.reduce((total, { quantity, productId }) => {
    const product = products.find((product) => {
      return productId === product.id;
    });
    const { price } = product;
    total += quantity * price;

    return total;
  }, 0);

  return (
    <>
      <h1 className="bg-zinc-400 text-white uppercase font-medium p-3">
        Cart Totals
      </h1>

      <div>
        <div className="border-b py-3">Subtotal:</div>

        <div className="border-b py-3">
          <form className="flex gap-4">
            <label>Shipping:</label>

            <div className="flex flex-col gap-4 items-start justify-start">
              <div className="flex gap-1">
                <input
                  type="radio"
                  id="standard"
                  value="standard"
                  name="shipping"
                  className=" accent-amber-600 focus:accent-amber-600"
                ></input>
                <label htmlFor="standard">Standard (Free)</label>
              </div>

              <div className="flex gap-1">
                <input
                  type="radio"
                  id="express"
                  value="express"
                  name="shipping"
                  className="accent-amber-600 focus:accent-amber-600"
                ></input>
                <label htmlFor="express">Express ($49.00)</label>
              </div>
            </div>
          </form>
        </div>

        <div>Total: ${total}</div>
      </div>

      <footer className="mt-8">
        <div className="flex">
          <button
            type="submit"
            className="bg-black text-white transition-colors hover:bg-amber-600 uppercase text-center font-semibold w-full py-4"
          >
            Proceed to checkout
          </button>
        </div>
      </footer>
    </>
  );
};
