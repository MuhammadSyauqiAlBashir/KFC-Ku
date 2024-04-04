export default function DetailProduct() {
    async function fetchData() {
      const response = await fetch("http://localhost:3000/api/products");
      const data = await response.json();
      return response
    }
  return (
    <div className="bg-white">
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
      <div className="flex flex-row p-4">
        <img src="https://static.order.kfcku.com/images/items/lg/12998.jpg?v=LvjYXL" />
        <div className="sticky flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <img src="/merah.png" style={{ width: 50, height: 30 }} />
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              UI/UX Review Check
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              The place is close to Barceloneta Beach and bus stop just 2 min by
              walk and near to "Naviglio" where you can enjoy the main night
              life in Barcelona.
            </p>
          </div>
            <button
              className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Read More
            </button>
          <div className="p-6 pt-0">
          </div>
        </div>
      </div>
    </div>
  );
}
