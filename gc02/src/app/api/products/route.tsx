import ProductModel from "@/db/models/products";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const keyword = searchParams.get("search") || "";
  const limit = 8;
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page") || "0")
    : 0;
  const products = await ProductModel.getAllProducts(page, limit, keyword);
  return Response.json(
    {
      data: products,
    },
    {
      status: 200,
    }
  );
}
