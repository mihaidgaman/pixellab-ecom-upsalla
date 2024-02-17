import { useProduct } from '@/hooks';
import Image from 'next/image';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';
import { GrTrash } from 'react-icons/gr';
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

export const CartLineItem = ({ product }) => {
  const { quantity, productId } = product;
  const { product: fullProduct, loading } = useProduct(productId);

  if (loading) {
    // add spinner
    return (
      <tr>
        <td>...loading</td>
      </tr>
    );
  }

  if (!fullProduct) {
    return (
      <tr>
        <td></td>
      </tr>
    );
  }

  const { title, price, image, id, rating } = fullProduct;

  return (
    <tr className="border-b">
      <td>
        <button type="button" title={`Remove ${title} from cart`}>
          <CgClose size={22}></CgClose>
        </button>
      </td>
      <td className="py-4 px-2 flex">
        <Link href={`/products/${productId}`}>
          <Image
            src={image}
            width={100}
            height={100}
            objectFit="contain"
            className="inline"
            alt={`product ${id}`}
          ></Image>
        </Link>
      </td>

      <td>
        <h1>{title}</h1>
        <div className="flex items-center justify-start">
          {renderRating(rating)}
        </div>
      </td>

      <td>${price}</td>
      <td className="text-center px-2">
        <div className="border border-black flex items-center justify-center gap-1">
          {quantity === 1 ? (
            <span className="cursor-pointer">
              <GrTrash></GrTrash>{' '}
            </span>
          ) : (
            <button type="button" title="Decrease" className="p-2">
              -
            </button>
          )}
          {quantity}
          <button type="button" title="Increase" className="p-2">
            +
          </button>
        </div>
      </td>

      <td>${price * quantity}</td>
    </tr>
  );
};
