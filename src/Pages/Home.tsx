import Recommended from "../Components/Recommended";
import Trending from "../Components/Trending";
import { useSharedFunctions } from "../FunctionContext";

export default function Home() {
  const { searchWord } = useSharedFunctions();
  return (
    <div className="text-white">
      {!searchWord && <Trending />}

      <Recommended />
    </div>
  );
}
