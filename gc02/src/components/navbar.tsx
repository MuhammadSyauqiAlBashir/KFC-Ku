import { RxHamburgerMenu } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-white border-b border-neutral">
        <div className="flex-1 mx-36">
          <img src="/image.png" />
          <button>
            <p className="text-black text-xl font-semibold">MENU</p>
          </button>
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
                <a className="justify-between">
                  Wishlist
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center navbar bg-black border-b border-neutral space-x-2">
        <p className="font-semibold text-white">Ayo Pesan</p>
        <img src="/send.png" style={{ width: 40, height: 40 }} />
        <p className="font-semibold text-white">Pesan Antar</p>
        <img src="/kfcnav.png" style={{ width: 40, height: 40 }} />
        <p className="font-semibold text-white">atau Bawa Pulang</p>
        <button className="btn bg-red-600 rounded-3xl text-white">
          Mulai Order
        </button>
      </div>
    </>
  );
}
