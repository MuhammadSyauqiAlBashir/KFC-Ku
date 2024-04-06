import WishlistModel, { WishlistValidation } from "@/db/models/wishlists";
import { ObjectId } from "mongodb";

export async function GET(request: Request) {
    const body = await request.json();
    console.log(body);
    
    const wishlist = await WishlistModel.findWishlist(body.id);
    return Response.json(
      {
        data: wishlist,
      },
      {
        status: 200,
      }
    );
}
