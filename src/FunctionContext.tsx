import React, { createContext, useContext, useEffect, useState } from "react";
import data from "./Data/data.json";

interface Movie {
  title: string;
  thumbnail: {
    trending?: { small: string; large: string };
    regular: { small: string; medium: string; large: string };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
}

interface FunctionContextType {
  movies: Movie[];
  toggleBookmark: (title: string) => void;
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  handleSearch: (word: string) => void;
  moviesByCategory: Movie[]
}

const FunctionContext = createContext<
  FunctionContextType | undefined
>(undefined);

export const FunctionProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [movies, setMovies] = useState<Movie[]>(data);
  const [currentPage, setCurrentPage] = useState(() => {
    // Load the persisted state from localStorage
    return localStorage.getItem("currentPage") || "home";
  });

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
  }, [currentPage])
  const [searchWord, setSearchWord] = useState("");

  const toggleBookmark = (title: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.title === title
          ? { ...movie, isBookmarked: !movie.isBookmarked }
          : movie
      )
    );
  };

  const moviesByCategory = movies.filter((item) => {
    if (currentPage === "home") return true;
    if (currentPage === "movies") return item.category === "Movie";
    if (currentPage === "series") return item.category === "TV Series";
    if (currentPage === "bookmarks") return item.isBookmarked;
    return false;
  });

  const handleSearch = (word: string) => {
    setSearchWord(word);
  };

  return (
    <FunctionContext.Provider
      value={{
        movies,
        toggleBookmark,
        currentPage,
        setCurrentPage,
        searchWord,
        setSearchWord,
        handleSearch,
        moviesByCategory,
      }}
    >
      {children}
    </FunctionContext.Provider>
  );
};

export const useSharedFunctions = () => {
  const context = useContext(FunctionContext);
  if (!context) {
    throw new Error(
      "useSharedFunctions must be used within a FunctionProvider"
    );
  }
  return context;
};
