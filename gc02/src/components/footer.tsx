export default function Footer() {
  return (
    <>
      <div className="flex items-end w-full min-h-full bg-white">
        <footer className="w-full text-gray-700 bg-[#1D1D1D] body-font">
          <div className="container flex flex-col flex-wrap px-5 py-10 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex flex-wrap flex-grow text-center md:pl-20 md:mt-0 md:text-left">
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-md font-medium tracking-widest text-white uppercase title-font">
                  Menu Category
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className=" text-white text-sm cursor-pointer hover:text-gray-500">
                      Special
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className=" text-white text-sm cursor-pointer hover:text-gray-500">
                      Combo
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className=" text-white text-sm cursor-pointer hover:text-gray-500">
                      Pants
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className=" text-white text-sm cursor-pointer hover:text-gray-500">
                      Ala Carte
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className=" text-white text-sm cursor-pointer hover:text-gray-500">
                      Drinks
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className=" text-white text-sm cursor-pointer hover:text-gray-500">
                      Kids Meal
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className=" text-white text-sm cursor-pointer hover:text-gray-500">
                      Breakfast
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className=" text-white text-sm cursor-pointer hover:text-gray-500">
                      Coffee
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className=" text-white text-sm cursor-pointer hover:text-gray-500">
                      Dessert
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-md font-medium tracking-widest text-white uppercase title-font">
                  Hubungi Kami
                </h2>
                <nav className="mb-5 list-none">
                  <li className="mt-3">
                    <a className="text-white text-sm cursor-pointer hover:text-gray-500">
                      Hubungi Kami
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-md font-medium tracking-widest text-white uppercase title-font">
                  Voucher
                </h2>
                <nav className="mb-5 list-none">
                  <li className="mt-3">
                    <a className="text-white text-sm cursor-pointer hover:text-gray-500">
                      Voucher Saya
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 text-md font-medium tracking-widest text-white uppercase title-font">
                  Kebijakan
                </h2>
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="text-gray-400 text-sm cursor-pointer hover:text-gray-700 ">
                      Kebijakan Pribadi
                    </a>
                  </li>
                  <li className="mt-3">
                    <a className="text-gray-400 text-sm cursor-pointer hover:text-gray-700 ">
                      Syarat dan Ketentuan
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <div className="bg-[#1D1D1D]">
            <div className="container px-5 py-4 mx-auto">
              <p className="text-sm text-white capitalize xl:text-center">
                © 2024 KFCKU.com by PT FASTFOOD Indonesia Tbk. | All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
