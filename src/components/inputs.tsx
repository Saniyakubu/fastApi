import { MdOutlineSend } from "react-icons/md";
import { useContextStoreProvider } from "../context/store";
import { Button } from "./ui/button";

type inputProps = {
  getData: () => Promise<void>;
};

const Inputs = ({ getData }: inputProps) => {
  const { queryVal, setQueryVal } = useContextStoreProvider();
  return (
    <div className="flex items-center justify-center w-full border focus-within:outline rounded-3xl">
      <input
        placeholder="Ask any question..."
        className="w-full p-3 px-4 text-black bg-transparent outline-none rounded-3xl"
        type="text"
        name="query"
        value={queryVal as string}
        onChange={(e) => setQueryVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            console.log("queryVal", queryVal);
            getData();
            // setData([]);
          }
        }}
      />
      <Button
        onClick={getData}
        type="submit"
        className="h-12 rounded-r-2xl rounded-br-2xl"
      >
        <MdOutlineSend />
      </Button>
    </div>
  );
};

export default Inputs;
