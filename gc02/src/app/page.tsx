"use server"
import { Product } from "@/db/types";
import { Card, CardContent } from "@/components/cardcn";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carouselscn";
import Carouselx from "@/components/carousel";
import Link from "next/link";

async function fetchData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/products/showlist`, {
    cache: "no-store",
  });
  const data = await response.json();
  return data;
}

export default async function Home() {
  const data: { data: Product[] } = await fetchData();
  const product = data.data;
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
      <Carouselx />
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row">
          <img src="/hehe.png" style={{ width: 80, height: 50 }} />
          <h1 className="font-extrabold text-black text-4xl ">
            KAMI BERPIKIR ANDA MENYUKAI INI
          </h1>
        </div>
        <div className="mt-10">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-6xl"
          >
            <CarouselContent>
              {product &&
                product.map((data: Product, index) => {
                  return (
                    <CarouselItem key={index} className="lg:basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                            <Link href={`/products/${data.slug}`}>
                              <img src={data.thumbnail} />
                              <span className="text-black font-semibold">
                                {data.name}
                              </span>
                            </Link>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  );
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div>
          <Link href="/products" className="btn mt-14 mb-32">
            See More
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-4 p-16"></div>
      <div className="flex flex-col bg-gray-500">
        <div className="flex flex-row items-center justify-center">
          <img src="/merah.png" style={{ width: 90, height: 90 }} />
          <h1 className="text-4xl text-black font-sans font-black">
            Tentang KFC Indonesia
          </h1>
        </div>
        <div className="flex flex-row ml-28 mb-16">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl text-black font-sans font-bold">Visi</h1>
            <p className="w-9/12 text-xl text-black font-sans">
              Selalu menjadi merek restoran cepat saji Nomor 1 dl Indonesia dan
              mempertahankan kepemimplnan pasar dengan menjadi restoran yang
              termodern dan terfavorit dalam segi produk, harga, pelayanan, dan
              fasilitas.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl text-black font-sans font-bold">Misi</h1>
            <p className="w-9/12 text-xl text-black font-sans">
              Semakin memperkuat citra merek KFC dengan strategi-strategi dan
              ide-ide yang inovatif, terus meningkatkan suasana bersantap yang
              tiada bandingannya dan konsisten memberikan produk, layanan, serta
              fasilitas restoran yang selalu berkualitas mengikuti kebutuhan dan
              selera konsumen yang terus berubah.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
