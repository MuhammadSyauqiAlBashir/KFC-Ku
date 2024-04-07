"use client";
import { Product, Wishlist } from "@/db/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import AddWishlistButton from "./addwishlist";
import RemoveWishlistButton from "./removewishlist";

export default function Card({ data, refetchData }: { data: Product, refetchData: any }) {
  const [flag, setFlag] = useState(false);
  const [wish, setWish] = useState<Wishlist | null>(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:3000/api/wishlist/${data._id}`,
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
    fetchData();
  }, []);

  return (
    <>
      <div className="relative flex w-80 mb-5 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <Link href={`/products/${data.slug}`}>
            <img src={data.thumbnail} className="h-full w-full object-cover" />
          </Link>
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {data.name}
            </p>
            <p className="block font-sans text-base font-extrabold leading-relaxed text-blue-gray-900 antialiased">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(data.price)}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {data.excerpt}
          </p>
        </div>
        <div className="p-6 pt-0 flex justify-center items-center">
          {!flag && <AddWishlistButton data={data} />}
          {flag && wish && <RemoveWishlistButton refetchData={refetchData} data={data} wish={wish} />}
        </div>
      </div>
    </>
  );
}
