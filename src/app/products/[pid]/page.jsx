import { baseUrl } from '@/index';
import Image from 'next/image';
import { redirect } from 'next/navigation';

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
  const { image: imageUrl, title, rating, price, description } = product;

  return (
    <div className="container px-4">
      <header></header>

      <section>
        <Image
          width={200}
          height={200}
          src={imageUrl}
          alt={`Image for product ${title}`}
          className="inline object-contain w-52 h-52"
          priority
        ></Image>
      </section>
      <section>{JSON.stringify(product)}</section>
    </div>
  );
}
