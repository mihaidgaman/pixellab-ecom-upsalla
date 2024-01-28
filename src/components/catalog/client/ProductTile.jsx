import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/hooks/AddToCartButton";

export const ProductTile = (props) => {
  const { product } = props;
  const { title, image: imageUrl, price, id } = product;

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
            objectFit="contain"
            className="inline"
          ></Image>
        </Link>
      </header>

      <section className="mt-8 text-center text-sm flex flex-col items-center justify-between gap-4">
        <h1 className="uppercase text-zinc-400 mb-2">
          <Link href={productUrl} title={title}>
            {title}
          </Link>
        </h1>

        <div className="text-zinc-900 font-light">$109.95</div>

        <footer>
          <div>
            <AddToCartButton></AddToCartButton>
          </div>
        </footer>
      </section>
    </article>
  );
};
