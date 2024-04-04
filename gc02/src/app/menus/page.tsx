"use client";
import Card from "@/components/card";
import { useEffect, useState } from "react";

export default function Menus() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      setProduct(data.data);
    }
    fetchData();
  }, []);
  console.log(product);

  return (
    <div className="bg-white">
      <div className="flex items-center justify-center navbar bg-black border-b border-neutral space-x-2">
        <p className="font-semibold text-white">Ayo Pesan</p>
        <img src="/send.png" style={{ width: 40, height: 40 }} />
        <p className="font-semibold text-white">Pesan Antar</p>
        <img src="/kfcnav.png" style={{ width: 40, height: 40 }} />
        <p className="font-semibold text-white">atau Bawa Pulang</p>
        <button className="btn bg-red-600 rounded-3xl text-white">
          Mulai Order
        </button>
      </div>
      <div className="grid grid-cols-4 p-16">
        {product?.map((data) => (
          <Card data={data} />
        ))}
      </div>
    </div>
  );
}