import { AddToCart } from '@/components/cart/client';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const renderRating = (rating) => {
  const fullStars = Math.floor(rating.rate);
  const halfStar = rating.rate % 1 > 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;

  return (
    <div className="flex justify-center text-orange-400">
      {Array(fullStars).fill(<FaStar />)}
      {halfStar ? <FaStarHalfAlt /> : ''}
      {Array(emptyStars).fill(<FaRegStar />)}
    </div>
  );
};

export const ProductTile = (props) => {
  const { product } = props;
  const { title, image: imageUrl, price, id, rating } = product;

  const productUrl = `/products/${id}`;

  return (
    <article className="w-full flex flex-col items-center justify-between gap-4 text-center">
      <header>
        <Link href={productUrl} title={title}>
          <Image
            width={200}
            height={200}
            src={imageUrl}
            alt={`Image for product ${title}`}
            className="inline object-contain w-52 h-52"
            priority
          ></Image>
        </Link>
      </header>

      <section className="mt-8 text-center text-sm flex flex-col items-center justify-between gap-4">
        <h1 className="uppercase text-zinc-400 mb-2">
          <Link href={productUrl} title={title}>
            {title}
          </Link>
        </h1>

        <div className="text-zinc-900 font-light">${price}</div>

        <section>
          <div className="text-zinc-900 font-light">{renderRating(rating)}</div>
        </section>

        <footer>
          <div>
            <AddToCart product={product}></AddToCart>
          </div>
        </footer>
      </section>
    </article>
  );
};
