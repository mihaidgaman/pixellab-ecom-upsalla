import {
  CartControls,
  CartDisplay,
  CartTotals,
} from '@/components/cart/client';
import { ContinueShopping } from '@/components/cart/client/ContinueShopping';

export default function CartPage() {
  return (
    <div className="container px-4 lg:px-0 mx-auto mb-12">
      <header className="flex justify-between text-zinc-400">
        <ContinueShopping></ContinueShopping>
        <CartControls></CartControls>
      </header>

      <section className="mt-16 grid grid-cols-12 gap-8">
        <div className="lg:col-span-8 grid gap-y-12">
          <CartDisplay></CartDisplay>
        </div>

        <aside className="lg:col-span-4">
          <CartTotals></CartTotals>
        </aside>
      </section>
    </div>
  );
}
