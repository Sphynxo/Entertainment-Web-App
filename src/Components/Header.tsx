import { MdMovie } from "react-icons/md";
import { IoGrid } from "react-icons/io5";
import { RiFilmFill } from "react-icons/ri";
import { PiTelevisionFill } from "react-icons/pi";
import { FaBookmark } from "react-icons/fa";
import { Link } from "react-router";
import { useSharedFunctions } from "../FunctionContext";

export default function Header() {
  const { currentPage, setCurrentPage } = useSharedFunctions();
  return (
    <div className="flex justify-between items-center  bg-blue p-[2.4rem] md:rounded-[1rem] xl:p-[3.2rem] xl:flex-col xl:h-full xl:w-[9.6rem] xl:items-center sticky top-0 z-40">
      <MdMovie className="text-[2.4rem] text-red md:text-[3.2rem]" />
      <nav>
        <ul className="flex gap-[2.4rem] text-[2.4rem] text-gray md:text-[3.2rem] xl:flex-col ">
          <Link
            className={`xl:hover:text-red transition-all duration-300 cursor-pointer ${
              currentPage === "home" && "text-white"
            }`}
            to={"/home"}
            onClick={() => setCurrentPage("home")}
          >
            <IoGrid />
          </Link>
          <Link
            className={`xl:hover:text-red transition-all duration-300 cursor-pointer ${
              currentPage === "movies" && "text-white"
            }`}
            to={"/movies"}
            onClick={() => setCurrentPage("movies")}
          >
            <RiFilmFill />
          </Link>
          <Link
            className={`xl:hover:text-red transition-all duration-300 cursor-pointer ${
              currentPage === "series" && "text-white"
            }`}
            to={"/series"}
            onClick={() => setCurrentPage("series")}
          >
            <PiTelevisionFill />
          </Link>
          <Link
            className={`xl:hover:text-red transition-all duration-300 cursor-pointer ${
              currentPage === "bookmarks" && "text-white"
            }`}
            to={"/bookmarks"}
            onClick={() => setCurrentPage("bookmarks")}
          >
            <FaBookmark />
          </Link>
        </ul>
      </nav>
      <img
        src="/images/image-avatar.png"
        alt=""
        className="w-[2.4rem] border-[1px] border-white rounded-full md:w-[3.2rem] xl:w-[4rem]"
      />
    </div>
  );
}
