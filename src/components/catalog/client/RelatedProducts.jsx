import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AddToCart } from '@/components/cart/client';

export const RelatedProducts = ({ category, currentProductId }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data
          .filter((product) => product.id !== currentProductId)
          .slice(0, 3);
        setRelatedProducts(filteredData);
      })
      .catch((error) => {
        console.error('An error has occured:', error);
      });
  }, [category, currentProductId]);

  return (
    <ul className="flex flex-col lg:flex-row gap-12 justify-between">
      {relatedProducts.length > 0 ? (
        relatedProducts.map((product) => (
          <li key={product.id} className="w-full">
            <article>
              <header>
                <div className="w-full text-center">
                  <Link href={`/products/${product.id}`} title={product.title}>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={200}
                      height={200}
                      objectFit="contain"
                      className="inline"
                    />
                  </Link>
                </div>
              </header>

              <section className="mt-8 text-center text-sm flex flex-col items-center justify-between gap-4">
                <h1 className="uppercase text-zinc-400 mb-2">
                  {product.title}
                </h1>

                <div className="text-zinc-900 font-light">${product.price}</div>
                <AddToCart product={product}></AddToCart>
              </section>
            </article>
          </li>
        ))
      ) : (
        <li className="flex justify-center items-center"></li>
      )}
    </ul>
  );
};
