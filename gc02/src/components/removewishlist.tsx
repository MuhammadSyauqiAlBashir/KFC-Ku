"use client";
import { Product, Wishlist } from "@/db/types";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

export default function RemoveWishlistButton({
  data,
  wish,
  refetchData,
}: {
  data: Product;
  wish: Wishlist;
  refetchData: any;
}) {
  const router = useRouter();
  const handleDeleteWishlist = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/wishlist`, {
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
        router.push("/wishlist");
        throw new Error("Failed to Delete Wishlist");
      }
      refetchData()
      const result = await response.json();
      router.push("/wishlist");
      Swal.fire({
        icon: "success",
        text: `Successfully Delete Product in Your Wishlist`,
      });
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
