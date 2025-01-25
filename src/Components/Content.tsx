import { RiFilmFill } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { useSharedFunctions } from "../FunctionContext";
export default function Content() {
  const { toggleBookmark, moviesByCategory, searchWord } = useSharedFunctions();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[1.6rem] md:gap-y-[3rem] md:gap-x-[2.4rem] xl:gap-x-[4rem] xl:gap-y-[3.2rem] mt-[2.4rem] xl:mt-[3.2rem]">
      {moviesByCategory.filter(item => item.title.toLowerCase().startsWith(searchWord.toLowerCase())).map((item, index) => (
        <div
          key={index}
          className="relative group xl:hover:cursor-pointer"
        >
          <div>
            <picture>
              <source
                srcSet={item.thumbnail.regular.large}
                media="(min-width: 1024px)"
              />
              <source
                srcSet={item.thumbnail.regular.medium}
                media="(min-width: 768px)"
              />
              <img
                src={item.thumbnail.regular.small}
                alt={`${item.title} Image`}
                className="rounded-[8px] w-[24rem] md:w-[47rem]"
              />
            </picture>
          </div>

          <div className="mt-[0.8rem]">
            <div className="flex items-center gap-[0.4rem] text-[1.2rem] text-white opacity-[0.75]">
              <p>{item.year}</p>
              <p>
                <GoDotFill />
              </p>
              <p>
                <RiFilmFill />
              </p>
              <p>{item.category}</p>
              <p>
                <GoDotFill />
              </p>
              <p>{item.rating}</p>
            </div>
            <h2 className="text-white font-normal text-[1.5rem] mt-[0.4rem]">
              {item.title}
            </h2>
          </div>

          <div
            className="group/bookmark w-[3.2rem] h-[3.2rem] bg-gray rounded-full bg-opacity-[0.5] flex items-center justify-center absolute z-20 top-[0.8rem] right-[0.8rem] xl:hover:cursor-pointer xl:hover:bg-opacity-1 xl:hover:bg-white xl:transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              toggleBookmark(item.title);
            }}
          >
            {item.isBookmarked ? (
              <FaBookmark className="text-[1.4rem] text-white xl:group-hover/bookmark:text-dark-blue transition-all duration-300" />
            ) : (
              <FaRegBookmark className="text-[1.4rem] text-white xl:group-hover/bookmark:text-dark-blue transition-all duration-300" />
            )}
          </div>

          <div className="items-center gap-[2rem] bg-white w-[12rem] bg-opacity-[0.25] rounded-[2.8rem] justify-center py-[1rem] absolute z-10 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] xl:group-hover:flex hidden">
            <FaPlayCircle className="text-[3rem]" />
            <p className="text-[1.8rem] font-normal">Play</p>
          </div>
        </div>
      ))}
    </div>
  );
}
