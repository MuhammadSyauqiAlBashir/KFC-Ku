import WishlistModel from "@/db/models/wishlists";

type RequestParam = {
  params: {
    id: string;
  };
};
export async function GET(request: Request, { params }: RequestParam) {
  const id = request.headers.get("x-user-id") as string;  
  const wishlist = await WishlistModel.findWishlist(params.id, id);
  
  return Response.json(
    {
      data: wishlist,
    },
    {
      status: 200,
    }
  );
}
