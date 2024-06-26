"use client"

import { useEffect, useState } from "react";
import AddWishlistButton from "./addwishlist"
import RemoveWishlistButton from "./removewishlist"
import { Product, Wishlist } from "@/db/types";

export default function CardDetail({ product }: { product: Product }) {
  const [flag, setFlag] = useState(false);
  const [wish, setWish] = useState<Wishlist | null>(null);
  async function fetchData() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/wishlist/${product._id}`,
      {
        cache: "no-store",
      }
    );
    const responseData = await response.json();
    if (responseData.data) {
      setFlag(true);
      setWish(responseData.data);
    } else {
      setFlag(false);
      setWish(null);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="sticky flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <img src="/merah.png" style={{ width: 50, height: 30 }} />
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-black antialiased">
          {product.name}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {product.description}
        </p>
      </div>
      {!flag && <AddWishlistButton data={product} />}
      {flag && wish && <RemoveWishlistButton refetchData={fetchData} data={product} wish={wish} />}
    </div>
  );
}
