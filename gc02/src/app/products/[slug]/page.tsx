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
    title: product.data.name,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

async function fetchData(slug: string) {
  const response = await fetch(`http://localhost:3000/api/products/${slug}`, {
    cache : 'no-store'
  });
  const data = await response.json();
  return data;
}


export default async function DetailProduct({params,}: {params: { slug: string };}) {

  const product: { data: Product } = await fetchData(params.slug);
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
          <img src={product?.data.images[0]} style={{ width: 800, height: 800 }} />
          <div className="sticky flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <img src="/merah.png" style={{ width: 50, height: 30 }} />
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-bold leading-snug tracking-normal text-black antialiased">
                {product?.data.name}
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {product?.data.description}
              </p>
            </div>
            <button
              className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Add to Wish List
            </button>
            <div className="p-6 pt-0"></div>
          </div>
        </div>
      </div>
    )
  );
}
