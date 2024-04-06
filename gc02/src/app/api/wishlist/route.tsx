import WishlistModel, { WishlistValidation } from "@/db/models/wishlists";
import { ObjectId } from "mongodb";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedData = WishlistValidation.safeParse(body);
    if (parsedData.success === false) {
      throw parsedData.error;
    }
    body.userId = request.headers.get("x-user-id") as string
    const wishlist = await WishlistModel.addToWishlist(body);
    return Response.json(
      {
        data: wishlist,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return Response.json(
        { message: error.issues[0].message },
        { status: 400 }
      );
    } else {
      return Response.json(
        { error: error, message: "Internal Server Error" },
        { status: 500 }
      );
    }
  }
}
