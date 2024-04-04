export default function Card({ data }: { data: any }) {
  return (
    <>
      <div className="relative flex w-80 mb-5 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl">
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={data.thumbnail} className="h-full w-full object-cover" />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {data.name}
            </p>
            <p className="block font-sans text-base font-extrabold leading-relaxed text-blue-gray-900 antialiased">
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(data.price)}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {data.excerpt}
          </p>
        </div>
        <div className="p-6 pt-0 justify-end items-end">
          <button
            className="block w-full select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Add to Wish Lists
          </button>
        </div>
      </div>
    </>
  );
}
