"use server";
import AddWishlistButton from "@/components/addwishlist";
import CardDetail from "@/components/cardDetail";
import RemoveWishlistButton from "@/components/removewishlist";
import { Product } from "@/db/types";
import type { Metadata, ResolvingMetadata } from 'next'
 
type Props = {
  params: { slug: string }
}
 
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug
 
  const product = await fetchData(slug)
  
 
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.name,
    openGraph: {
      images: [product.images[0], ...previousImages],
    },
  }
}

async function fetchData(slug: string) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/products/${slug}`, {
    cache : 'no-store'
  });
  const data = await response.json();
  return data.data
}

export default async function DetailProduct({
  params,
}: {
  params: { slug: string };
}) {
  const product: Product = await fetchData(params.slug);
  return (
    product && (
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
        <div className="flex flex-row p-4 items-center justify-center">
          <img src={product.images[0]} style={{ width: 800, height: 800 }} />
          <CardDetail product={product} />
        </div>
      </div>
    )
  );
}
