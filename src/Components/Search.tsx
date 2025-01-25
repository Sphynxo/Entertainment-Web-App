import { FiSearch } from "react-icons/fi";
import { useSharedFunctions } from "../FunctionContext";
import { IoCloseCircle } from "react-icons/io5";

export default function Search() {
  const { currentPage, handleSearch, searchWord, setSearchWord } =
    useSharedFunctions();

  return (
    <div className="flex items-center gap-[1.6rem] ">
      <FiSearch className="text-white text-[2.4rem]" />
      <div className="relative w-[100%]">
        <input
          type="text"
          value={searchWord}
          name=""
          id=""
          className="w-full text-[1.6rem] bg-transparent  outline-none text-white focus:border-b-[1px] focus:border-gray placeholder:text-white placeholder:opacity-[0.5] focus:placeholder:opacity-[1] py-[1.6rem]"
          placeholder={`${
            currentPage === "home"
              ? "Search for movies or TV series"
              : currentPage === "movies"
              ? "Search for movies"
              : currentPage === "series"
              ? "Search for TV series"
              : "Search for bookmarked shows"
          }`}
          onChange={(e) => handleSearch(e.target.value)}
        />
        {searchWord && (
          <IoCloseCircle
            className="text-[2rem] text-gray absolute top-[50%] translate-y-[-50%] right-[2.4rem] xl:hover:cursor-pointer xl:hover:text-white transition-all duration-300"
            onClick={() => setSearchWord("")}
          />
        )}
      </div>
    </div>
  );
}
