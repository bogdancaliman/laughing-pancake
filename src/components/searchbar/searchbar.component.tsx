function Searchbar() {
  return (
    <div>
        <div className="flex items-baseline bg-blue-400 rounded-md p-2">
          <img src="/searchbar-icons/search.svg" className="w-4 h-4 " />
          <input
            className="pl-2 bg-transparent placeholder-black focus:outline-none"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
    </div>
  );
}

export default Searchbar;
