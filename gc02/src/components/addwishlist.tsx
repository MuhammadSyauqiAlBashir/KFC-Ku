"use client";

import { Product } from "@/db/types";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function AddWishlistButton({ data }: { data: Product }) {
  const router = useRouter();
  const handleAddWishlist = async () => {
    try {
      // const base_url = process.env.URI as string;
      const response = await fetch(`/api/wishlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: data._id,
        }),
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Failed to add item to wishlist");
      }

      const result = await response.json();
      Swal.fire({
        icon: "success",
        text: `Successfully Added to Your Wishlist`,
      });
      router.push("/wishlist");
    } catch (error: any) {
      console.log(error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }
  };
  return (
    <button
      className="btn btn-success"
      type="button"
      onClick={handleAddWishlist}
    >
      ADD TO WISH LIST
    </button>
  );
}
