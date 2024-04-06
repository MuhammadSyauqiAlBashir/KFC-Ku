"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function handleLogOut() {
  cookies().delete("Authorization");
  redirect("/login");
}
