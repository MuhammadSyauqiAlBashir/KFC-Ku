import UserModel from "@/db/models/users";
import WishlistModel, { WishlistValidation } from "@/db/models/wishlists";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    body.userId = request.headers.get("x-user-id") as string;
    const parsedData = WishlistValidation.safeParse(body);
    if (parsedData.success === false) {
      throw parsedData.error;
    }
    const check = await WishlistModel.findWishlist(body.productId, body.userId);
    if (check) {
      return Response.json(
        { message: "Product already added to wishlist" },
        { status: 400 }
      );
    }
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

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const check = await WishlistModel.deleteWishlist(body._id);
    if(check.deletedCount === 0) {
      return Response.json(
        { message: "Not Found" },
        { status: 404 }
      );
    }
    return Response.json(
      {
        data: check,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(
      { error: error, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const userId = request.headers.get("x-user-id") as string;
    const profile = await UserModel.getUserProfile(userId);
    return Response.json(
      {
        data: profile,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return Response.json(
      { error: error, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
