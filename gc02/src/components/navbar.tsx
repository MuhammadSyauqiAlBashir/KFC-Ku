import { RxHamburgerMenu } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-white border-b border-neutral">
        <div className="flex-1 mx-36">
          <Link href="/">
            <img src="/image.png" />
          </Link>
          <Link href="/products">
            <p className="text-black text-xl font-semibold">MENU</p>
          </Link>
        </div>
        <div className="flex-none gap-2 mx-44">
          <button>
            <p className="text-red-800 text-sm font-bold">Kode Promosi</p>
          </button>
          <button>
            <p className="text-black text-sm font-bold">| Bahasa</p>
          </button>
          <div className="btn btn-ghost btn-circle avatar">
            <MdAccountCircle
              style={{
                color: "#000",
                fontSize: 35,
              }}
            />
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXB89DTf_Wuzrwsdwv9I6P4r-A5AtaWjdIKw&s"
            className="btn btn-ghost btn-circle avatar"
            alt="menu"
          />
          <div className="dropdown dropdown-end">
            <button
              style={{
                backgroundColor: "#fff",
              }}
            >
              <RxHamburgerMenu
                style={{
                  color: "#000",
                  fontSize: 35,
                }}
              />
            </button>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/wishlist" className="justify-between">
                  Wishlist
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
