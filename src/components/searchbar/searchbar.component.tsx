import { Search } from "lucide-react";

function Searchbar() {
  return (
    <div className="flex items-center p-2 rounded-md bg-slate-400">
      <Search size={18} />
      <input
        className="pl-2 placeholder-black bg-transparent focus:outline-none"
        type="text"
        placeholder="Search Twitter"
      />
    </div>
  );
}

export default Searchbar;
