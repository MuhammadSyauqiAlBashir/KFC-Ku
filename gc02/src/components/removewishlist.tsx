"use client";
import { Product, Wishlist } from "@/db/types";

export default function RemoveWishlistButton({ data, wish }: { data: Product, wish: Wishlist }) {
  return (
    <button className="btn btn-danger" type="button">
      REMOVE FROM WISH LIST
    </button>
  );
}
