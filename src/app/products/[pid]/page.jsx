import { baseUrl } from '@/index';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { CiStar } from 'react-icons/ci';

const getProduct = async (productId) => {
  return fetch(`${baseUrl}/products/${productId}`)
    .then((response) => {
      return response.json();
    })
    .catch(() => {
      redirect('/not-found');
    });
};

export default async function ProductPage({ params }) {
  const productId = params.pid;
  const product = await getProduct(productId);
  const {
    image: imageUrl,
    title,
    productId: id,
    rating,
    price,
    description,
  } = product;

  return (
    <div className="container px-4">
      <header></header>

      <section className="mt-16 mb-32 container px-4 lg:px-0 mx-auto grid gap-8 lg:grid-cols-12">
        <div className="lg:col-start-1 lg:col-span-5">
          <Image
            width={408}
            height={408}
            src={imageUrl}
            alt={`Image for product ${title}`}
            className="inline object-contain"
            priority
          ></Image>
        </div>

        <div className="lg:col-start-7 lg:col-span-6 pt-12 flex flex-col items-center justify-center lg:items-start lg:justify-start">
          <header className="flex flex-col items-center justify-center lg:items-start lg:justify-start">
            <h1 className="text-2xl uppercase font-medium">
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
            </h1>
          </header>
          <section className="flex items-center justify-center">
            <button type="button" className="transition-colors text-black">
              <CiStar></CiStar>
            </button>
            <button type="button" className="transition-colors text-black">
              <CiStar></CiStar>
            </button>
            <button type="button" className="transition-colors text-black">
              <CiStar></CiStar>
            </button>
            <button type="button" className="transition-colors text-zinc-400">
              <CiStar></CiStar>
            </button>
            <button type="button" className="transition-colors text-zinc-400">
              <CiStar></CiStar>
            </button>

            <span className="ml-4">3 Stars</span>
            <span className="ml-4">(120 Reviwes)</span>
          </section>
          <div className="mt-12">
            Your perfect pack for everyday use and walks in the forest. Stash
            your laptop (up to 15 inches) in the padded sleeve, your everyday
          </div>
          <span className="text-3xl leading-9 font-bold mt-12">$109.95</span>
          <footer className="mt-12"></footer>
        </div>
      </section>
      <section></section>
    </div>
  );
}
