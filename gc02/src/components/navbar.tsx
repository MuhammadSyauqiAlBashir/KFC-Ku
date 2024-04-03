import { RxHamburgerMenu } from "react-icons/rx";
import { MdAccountCircle } from "react-icons/md";

export default function Navbar() {
  return (
    <div className="navbar bg-white border-b border-neutral">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-2">
        <div className="btn btn-ghost btn-circle avatar">
          <MdAccountCircle />
        </div>

        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXB89DTf_Wuzrwsdwv9I6P4r-A5AtaWjdIKw&s"
          className="btn btn-ghost btn-circle avatar"
          alt="menu"
        />
        <div className="dropdown dropdown-end">
          <div
            style={{
              backgroundColor: "#fff",
            }}
          >
            <RxHamburgerMenu
              style={{
                color: "#000",
                fontSize:35
              }}
            />
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
