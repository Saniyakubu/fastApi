import { fetchEventSource } from "@microsoft/fetch-event-source";
import Inputs from "./components/inputs";
import { useContextStoreProvider } from "./context/store";
import Contents from "./components/contents";

import { MdOutlineSmartToy } from "react-icons/md";
const FetchData = () => {
  const { queryVal, setData, error, setError, setisloading } =
    useContextStoreProvider();

  const getData = async () => {
    const ctrl = new AbortController();
    setisloading(true);

    try {
      await fetchEventSource("https://houduanapi.soufalv.com/chat", {
        method: "POST",
        headers: {
          Accept: "text/event-stream",
          "Content-Type": "application/json",
        },
        signal: ctrl.signal,
        body: JSON.stringify({
          query: queryVal,
          history: [{}],
          model: "gpt-3.5-turbo",
          streamEvent: "begin-stream",
        }),

        onopen: async (res) => {
          const contentType = res.headers.get("content-type");

          if (!!contentType && contentType.indexOf("application/json") >= 0) {
            throw await res.json();
          }
        },
        onerror: (err) => {
          if (!!err) {
            console.log("Fetch onerror", err);
          }
          throw err;
        },

        onmessage(event) {
          // console.log(event.data);
          if (!event.data) {
            return;
          }
          const parsedData = JSON.parse(event.data);
          console.log(parsedData);
          setData((data: any) => [...data, parsedData]);
          setisloading(false);
        },
      });
    } catch (err) {
      setError("Failed to fetch data");
    }
  };

  return (
    <div>
      <p className="flex justify-center  text-5xl lg:text-7xl  text-blue-400 m-10">
        <MdOutlineSmartToy />
      </p>
      <Inputs getData={getData} />
      {error && <p>{error}</p>}
      {<Contents />}
    </div>
  );
};

export default FetchData;
