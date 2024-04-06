"use client";

import handleLogOut from "@/actions/logout";

export default function LogoutButton() {
  return (
    <button className="btn btn-sm btn-outline" onClick={() => handleLogOut()}>
      Logout
    </button>
  );
}
