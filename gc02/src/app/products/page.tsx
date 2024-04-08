"use client";
import Card from "@/components/card";
import SearchBar from "@/components/searchbar";
import { useEffect, useState } from "react";

export default function Products() {
  const [product, setProduct] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [keyword, setKeyword] = useState("");
  async function fetchData(pageNumber: number) {
    if (keyword.length > 0) {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/products?search=${keyword}`, {
      cache: "no-store",
      headers:{
        'Content-Type' : 'application/json'
        },
    });
    const newData = await response.json();
    setProduct([])
    setProduct(newData.data)
    }else{

      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/products?page=${pageNumber}&search=${keyword}`, {
        cache: "no-store",
      });
      const newData = await response.json();
      
      setProduct(product.concat(newData.data));
      setHasMore(newData.data.length > 0);
      setLoading(false);
    }
  }
  function handleScroll() {
    if (!loading && hasMore && window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
      setLoading(true);
      setPage(page + 1);
    }
  }
  useEffect(() => {
    fetchData(page); 
  }, [page, keyword]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading, hasMore]);

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
      <div className="mt-14 flex items-center justify-center">
        <SearchBar setKeyword={setKeyword} />
      </div>
      <div className="grid grid-cols-4 p-16">
        {product?.map((data,index) => (
          <Card refetchData={fetchData} key={index} data={data}/>
        ))}
      </div>
    </div>
  );
}
