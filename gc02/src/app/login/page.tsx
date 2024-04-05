import Link from "next/link";
import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { HandleLogin } from "@/actions/login";

export default function Login() {

  return (
    <div className="flex flex-row justify-center h-screen bg-white">
      <img
        src="https://static.order.kfcku.com/images/web/signin/lg/signin.jpg?v=LvjYXL"
        className="h-full w-4/12"
      />
      <div className="mt-20 text-black ml-16 w-4/12 flex flex-col">
        <h1 className="font-extrabold text-2xl">MASUK</h1>
        <p>(Pengguna dapat masuk dengan kredensial aplikasi KFCKU)</p>
        <form action={HandleLogin}>
          <label className="input bg-white flex items-center gap-2 mt-5 border-b-2 border-b-black">
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="w-full bg-white mt-5 p-2"
            />
          </label>
          <label className="input bg-white flex items-center gap-2 mt-5 border-b-2 border-b-black">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full bg-white"
            />
          </label>
          <div className="flex justify-end items-end mb-6">
            <button type="button" className=" mt-5">
              Lupa Kata Sandi?
            </button>
          </div>
          <button
            type="submit"
            className="bg-green-600 h-12 text-white border-spacing-2 rounded-3xl w-full mb-6"
          >
            Masuk
          </button>
          <h1 className="font-extrabold mb-6">ATAU MASUK DENGAN:</h1>
          <button
            type="button"
            className="bg-black mb-6 rounded-3xl w-full text-white h-12 flex justify-center items-center"
          >
            <AiFillApple
              style={{
                color: "#ffffff",
                fontSize: 25,
              }}
            />
            <p>Masuk dengan Apple</p>
          </button>
          <button
            type="button"
            className="bg-red-700 mb-6 rounded-3xl w-full text-white h-12 flex justify-center items-center"
          >
            <FcGoogle
              style={{
                color: "#ffffff",
                fontSize: 25,
              }}
            />
            <p>Masuk dengan Google</p>
          </button>
        </form>
        <div className="flex flex-row justify-center items-center">
          <h3 className="text-base text-center font-medium">
            Belum punya akun?
          </h3>
          <Link
            href="/register"
            className="border-b-2 border-black font-bold ml-2"
          >
            Daftar
          </Link>
        </div>
      </div>
    </div>
  );
}
