import ProductModel from "@/db/models/products";

type RequestParam = {
  params: {
    slug: string
  },
};

export async function GET(request: Request, {params} : RequestParam) {
  const products = await ProductModel.getProductBySlug(params.slug);
  return  Response.json({
    data: products,
  },{
    status: 200,
  });
}