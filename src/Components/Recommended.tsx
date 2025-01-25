import { useSharedFunctions } from "../FunctionContext";
import Content from "./Content";

export default function Recommended() {
  const { moviesByCategory, searchWord } = useSharedFunctions();
  return (
    <div className="mt-[2.4rem] md:mt-[4rem]">
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
            : "Recommended for you"}
        </h2>
      </div>
      <Content />
    </div>
  );
}
