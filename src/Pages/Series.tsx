import Content from "../Components/Content";
import { useSharedFunctions } from "../FunctionContext";

export default function Series() {
  const { moviesByCategory, searchWord } = useSharedFunctions();
  return (
    <div className="text-white">
      <div>
        <h2 className="text-white font-normal text-[2rem] md:text-[3.2rem]">
          {searchWord
            ? `Found ${
                moviesByCategory.filter((item) =>
                  item.title
                    .toLowerCase()
                    .startsWith(searchWord.toLowerCase())
                ).length
              } results for "${searchWord}"`
            : "TV Series"}
        </h2>
      </div>
      <Content />
    </div>
  );
}
