import { useProducts } from "@/hooks";
import { ProductTile } from "./ProductTile";
import { css } from "@emotion/css";
import SpinnerLoading from "./SpinnerLoading";
import { useContext, useEffect, useState } from "react";
import { uiContext } from "@/contexts";

export const ProductGrid = () => {
  const { itemsPerRow, pagination } = useContext(uiContext);
  const { perPage, page } = pagination;
  const { products, loading, error } = useProducts();
  const [paginatedProducts, setPaginatedProducts] = useState([]);

  useEffect(() => {
    const newPaginatedProducts = products
      .slice()
      .splice(perPage * (page - 1), perPage);

    setPaginatedProducts(newPaginatedProducts);
  }, [products, perPage, page]);

  const gridCssClass = css`
    display: grid;
    row-gap: 32px;
    margin-bottom: 64px;

    @media (min-width: 1024px) {
      grid-template-columns: repeat(${itemsPerRow}, 1fr);
    }
  `;

  if (loading) {
    return (
      <div className="container mx-auto px-4">
        <SpinnerLoading></SpinnerLoading>
      </div>
    );
  }

  if (error.trim().length > 0) {
    return <div className="container mx-auto px-4">{error}</div>;
  }

  return (
    <>
      <ul className={gridCssClass}>
        {paginatedProducts.map((product) => {
          const { id } = product;

          return (
            <li key={id} className="flex">
              <ProductTile product={product}></ProductTile>
            </li>
          );
        })}
      </ul>
    </>
  );
};
