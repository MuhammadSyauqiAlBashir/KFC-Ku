"use client";
import { Product, Wishlist } from "@/db/types";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function RemoveWishlistButton({
  data,
  wish,
}: {
  data: Product;
  wish: Wishlist;
}) {
  const router = useRouter();
  const handleDeleteWishlist = async () => {
    try {
      // const base_url = process.env.URI as string;
      const response = await fetch(`/api/wishlist`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: wish._id,
        }),
        cache: "no-store",
      });
      if (!response.ok) {
        throw new Error("Failed to Delete Wishlist");
      }

      const result = await response.json();

      Swal.fire({
        icon: "success",
        text: `Successfully Delete Product in Your Wishlist`,
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
      onClick={handleDeleteWishlist}
      className="btn btn-danger"
      type="button"
    >
      REMOVE FROM WISH LIST
    </button>
  );
}
