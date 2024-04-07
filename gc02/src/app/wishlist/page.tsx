"use client";
import Card from "@/components/card";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";


export default function Wishlist() {
  const [product, setProduct] = useState([]);
  const [user, setUser] = useState("");
  async function fetchData() {
    const response = await fetch("http://localhost:3000/api/wishlist", {
      cache: "no-store",
    });
    const data = await response.json();
    setUser(data.data.name);
      setProduct(data.data.WishDetail);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-white w-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row mt-20">
          <img src="/hehe.png" style={{ width: 80, height: 50 }} />
          <h1 className="font-extrabold text-black text-4xl ">
            Halo {user}, Selamat Datang. Berikut Wishlist yang Sudah Terdaftar
          </h1>
        </div>
        {product.length === 0 && (
          <div className="flex items-center justify-center p-48">
            <h1 className="text-2xl font-bold text-red-600">Maaf kamu belum memiliki wishlist, silahkan tambakan menu favorit kamu di halaman product</h1>
          </div>
        )}
        {product.length > 0 && (
          <div className="grid grid-cols-4 p-16">
            {product?.map((data, index) => (
              <Card key={index} data={data} refetchData={fetchData} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
