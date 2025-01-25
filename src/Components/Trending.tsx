import { RiFilmFill } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { useSharedFunctions } from "../FunctionContext";
import { useEffect, useRef, useState } from "react";

import { FaPlayCircle } from "react-icons/fa";

export default function Trending() {
  const { movies, toggleBookmark } = useSharedFunctions();
  const trending = movies.filter((item) => item.isTrending);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [direction, setDirection] = useState(1);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 1;
    let interval: string | number | NodeJS.Timeout | undefined;

    if (!isHovered) {
      interval = setInterval(() => {
        scrollContainer.scrollLeft += scrollSpeed * direction;

        if (
          scrollContainer.scrollLeft + scrollContainer.offsetWidth >=
          scrollContainer.scrollWidth
        ) {
          setDirection(-1);
        } else if (scrollContainer.scrollLeft <= 0) {
          setDirection(1);
        }
      }, 40);
    }

    return () => clearInterval(interval);
  }, [direction, isHovered]);

  return (
    <div>
      <div>
        <h2 className="text-white font-normal text-[2rem] md:text-[3.2rem]">
          Trending
        </h2>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex items-center gap-[1.6rem] overflow-x-auto scrollbar-hide w-auto md:gap-[4rem] mt-[1.6rem] md:mt-[2.4rem]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {trending.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 group xl:hover:cursor-pointer"
          >
 <div>
    <picture>

      <source
        srcSet={item.thumbnail.trending?.large}
        media="(min-width: 768px)"
      />
      <img
        src={item.thumbnail.trending?.small}
        alt={`${item.title} Image`}
        className="rounded-[8px] w-[24rem] md:w-[47rem]"
      />
    </picture>
  </div>

  {/* Movie Info */}
  <div className="absolute z-10 bottom-[1.6rem] left-[1.6rem]">
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

  {/* Bookmark Icon */}
  <div
    className="group/bookmark w-[3.2rem] h-[3.2rem] bg-gray rounded-full bg-opacity-[0.5] flex items-center justify-center absolute z-20 top-[0.8rem] right-[0.8rem] xl:hover:cursor-pointer xl:hover:bg-opacity-1 xl:hover:bg-white xl:transition-all duration-300"
    onClick={(e) => {
      e.stopPropagation(); // Prevent triggering the parent group hover
      toggleBookmark(item.title);
    }}
  >
    {item.isBookmarked ? (
      <FaBookmark className="text-[1.4rem] text-white xl:group-hover/bookmark:text-dark-blue transition-all duration-300" />
    ) : (
      <FaRegBookmark className="text-[1.4rem] text-white xl:group-hover/bookmark:text-dark-blue transition-all duration-300" />
    )}
  </div>

  {/* Play Button */}
  <div className="items-center gap-[2rem] bg-white w-[12rem] bg-opacity-[0.25] rounded-[2.8rem] justify-center py-[1rem] absolute z-10 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] xl:group-hover:flex hidden">
    <FaPlayCircle className="text-[3rem]" />
    <p className="text-[1.8rem] font-normal">Play</p>
  </div>
          </div>
        ))}
      </div>
    </div>
  );
}
