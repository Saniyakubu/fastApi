import { useContextStoreProvider } from "../context/store";

type inputProps = {
  getData: () => Promise<void>;
};

const Inputs = ({ getData }: inputProps) => {
  const { queryVal, setQueryVal } = useContextStoreProvider();
  return (
    <div className="w-11/12 flex rounded-3xl justify-center items-center lg:w-1/2 mx-auto mt-10 border">
      <input
        placeholder="ask any question..."
        className="p-3 px-4 text-black bg-neutral-300 rounded-3xl w-full"
        type="text"
        name="query"
        value={queryVal as string}
        onChange={(e) => setQueryVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            getData();
            setQueryVal("");
            // setData([]);
          }
        }}
      />
    </div>
  );
};

export default Inputs;
