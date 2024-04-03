export default function Footer() {
  return (
    <>
      <div className="flex items-end w-full min-h-screen bg-white">
        <footer className="w-full text-gray-700 bg-[#1D1D1D] body-font">
          <div className="container flex flex-col flex-wrap px-5 py-10 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
              <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <img
                  className="w-auto h-5 text-gray-900 fill-current"
                  src="https://erigostore.co.id/cdn/shop/files/Erigo_White_Logo_50de1a9b-2216-4056-a575-0820d287508b.png?v=1691658501&width=300"
                  alt="Erigo Logo"
                />
              </a>
              <p className="mt-2 text-sm text-gray-500">
                Apparels, Accessories and Fashions!
              </p>
              <div className="mt-4">
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                  <a className="text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                  <a className="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx={4} cy={4} r={2} stroke="none" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-md font-medium tracking-widest text-white uppercase title-font">
                  Shop
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className=" text-white text-sm cursor-pointer hover:text-gray-500">
                      T-Shirt
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className=" text-white text-sm cursor-pointer hover:text-gray-500">
                      Shirt
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className=" text-white text-sm cursor-pointer hover:text-gray-500">
                      Pants
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className=" text-white text-sm cursor-pointer hover:text-gray-500">
                      Outwear
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className=" text-white text-sm cursor-pointer hover:text-gray-500">
                      Accessories
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className=" text-white text-sm cursor-pointer hover:text-gray-500">
                      Collaboration
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-md font-medium tracking-widest text-white uppercase title-font">
                  Information
                </h2>
                <nav className="mb-5 list-none">
                  <li className="mt-3">
                    <a className="text-white text-sm cursor-pointer hover:text-gray-500">
                      Erigo Tour
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-white text-sm cursor-pointer hover:text-gray-500">
                      Exchanges & Returns
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-white text-sm cursor-pointer hover:text-gray-500">
                      Payment Information
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-white text-sm cursor-pointer hover:text-gray-500">
                      How To Track Your Order
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-white text-sm cursor-pointer hover:text-gray-500">
                      How To Use Discount Code
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-white text-sm cursor-pointer hover:text-gray-500">
                      FAQs
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-md font-medium tracking-widest text-white uppercase title-font">
                  Customer Service
                </h2>
                <nav className="mb-5 list-none">
                  <li className="mt-3">
                    <a className="text-white text-sm cursor-pointer hover:text-gray-500">
                      Contact Us
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-md font-medium tracking-widest text-white uppercase title-font">
                  CONTACT US
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="text-gray-400 text-sm cursor-pointer hover:text-gray-700 ">
                      ✉ : erigo.official@mail.com
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-400 text-sm cursor-pointer hover:text-gray-700 ">
                      ☏ : +62 21 1403 2020
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-gray-300">
            <div className="container px-5 py-4 mx-auto">
              <p className="text-sm text-gray-700 capitalize xl:text-center">
                © 2023,ERIGO{" "}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
