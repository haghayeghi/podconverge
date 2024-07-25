import React from "react";
import ProductCard from "./ProductCard";

interface Product {
  productID: number;
  productName: string;
  productType: string;
  productColor: string;
  productSize: string;
  productImage: string;
  Categories: string;
  productPrice: string;
  productTag: string;
  off: string;
}

const ProductList = async () => {
  const res = await fetch("https://pajooheshrah.com/data.json", { cache: "no-store" });
  const products: Product[] = await res.json();
  return (
    <>
      <div className="grid grid-cols-4 gap-4 w-[1000px] m-auto my-8">
        {products.map((product) => (
          <ProductCard key={product.productID} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
