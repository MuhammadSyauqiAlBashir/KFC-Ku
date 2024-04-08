export default function SearchBar({setKeyword}: {setKeyword: any}) {
  return (
    <label className="w-96 flex rounded-md items-center gap-2 mt-5 border-2 border-black">
      <input
        type="text"
        placeholder="Search..."
        name="search"
        onChange={(event) => {setKeyword(event.target.value)}}
        className="w-full bg-white p-2"
      />
    </label>  
  );
}
