import { Wishlist } from "@/db/types"
import { database } from "../config/config";
import { z } from "zod";

const WishlistValidation = z.object({
  userId: z.string({
    required_error: "User ID cant be empty",
  }),
  productId: z.string({
    required_error: "Product ID cant be empty",
  }),
});

export default class WishlistModel {
  static wishlistCollection() {
    return database.collection<Wishlist>("wishlists");
  }
  static async addToWishlist(wishlistData: Wishlist) {
    await this.wishlistCollection().insertOne(wishlistData);
  }
}