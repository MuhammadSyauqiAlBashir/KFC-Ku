import { Wishlist } from "@/db/types";
import { database } from "../config/config";
import { z } from "zod";
import { ObjectId } from "mongodb";

export const WishlistValidation = z.object({
  userId: z.string({
    required_error: "User ID cant be empty",
  }),
  productId: z.string({
    required_error: "Product ID cant be empty",
  }),
});

export default class WishlistModel {
  static wishlistCollection() {
    return database.collection<Wishlist>("Wishlists");
  }
  static async addToWishlist(wishlistData: Wishlist) {
    wishlistData.userId = new ObjectId(wishlistData.userId);
    wishlistData.productId = new ObjectId(wishlistData.productId);
    wishlistData.createdAt = new Date();
    wishlistData.updatedAt = new Date();
    const result = await this.wishlistCollection().insertOne(wishlistData);
    return { ...wishlistData, _id: result.insertedId };
  }
  static async findWishlist(_id: string, user: string) {
    const wishlist = await this.wishlistCollection()
      .find({userId: new ObjectId(user), productId: new ObjectId(_id) })
      .toArray();
    return wishlist[0]
  }
}
