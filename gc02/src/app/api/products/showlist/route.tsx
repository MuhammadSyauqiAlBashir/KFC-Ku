import ProductModel from "@/db/models/products";

export async function GET(request: Request) {
  const products = await ProductModel.showListProduct();
  return  Response.json({
    data: products,
  },{
    status: 200,
  });
}