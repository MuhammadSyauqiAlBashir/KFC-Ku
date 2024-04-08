import { ErrorRegister } from "@/components/errorRegister";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Register() {
  const handleRegisterAction = async (formData: FormData) => {
    "use server";
    const rawFormData = {
      username: formData.get("username"),
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/user/register`, {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(rawFormData),
    });

    const result = await response.json();
    if (!response.ok) {
      return redirect(`/register?error=${result.message}`);
    }
    redirect("/login");
  };
  return (
    <>
      <div className="flex flex-row justify-center h-screen bg-white">
        <img
          src="https://static.order.kfcku.com/images/web/signin/lg/signin.jpg?v=LvjYXL"
          className="h-full w-4/12"
        />
        <div className="mt-20 text-black ml-16 w-4/12 flex flex-col">
          <h1 className="font-extrabold text-2xl">BUAT AKUN</h1>
          <ErrorRegister/>
          <form action={handleRegisterAction}>
            <input
              type="text"
              placeholder="Username ..."
              name="username"
              className="w-full bg-white mt-5 p-2 border-b-2 border-black"
            />
            <input
              type="text"
              placeholder="Name ..."
              name="name"
              className="w-full bg-white mt-5 p-2 border-b-2 border-black"
            />
            <input
              type="text"
              placeholder="Email ..."
              name="email"
              className="w-full bg-white mt-5 p-2 border-b-2 border-black"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full bg-white mt-5 p-2 border-b-2 border-black"
            />
            <div className="inline-flex items-center mt-6">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="login"
                data-ripple-dark="true"
              >
                <input
                  id="login"
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-black transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-black before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                />
                <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth={1}
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </label>
              <label
                className="mt-px cursor-pointer select-none font-light text-black"
                htmlFor="login"
              >
                Dengan masuk atau mendaftar, anda menyetujui Syarat & Ketentuan
                serta Kebijakan Privasi
              </label>
            </div>
            <button
              type="submit"
              className="bg-red-600 mt-6 h-12 text-white border-spacing-2 font-semibold rounded-3xl w-full mb-6"
            >
              Masuk
            </button>
          </form>
          <div className="flex flex-row justify-center items-center">
            <h3 className="text-base text-center font-medium">
              Sudah Punya Akun?
            </h3>
            <Link
              href="/login"
              className="border-b-2 border-black font-bold ml-2"
            >
              Masuk Disini
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
