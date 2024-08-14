import { fetchEventSource } from "@microsoft/fetch-event-source";
import Inputs from "./components/inputs";
import { useContextStoreProvider } from "./context/store";
import Contents from "./components/contents";
import { useEffect } from "react";
import NavHeader from "./components/navHeader";
import { Loading } from "./components/Loading";

const FetchData = () => {
  const {
    queryVal,
    setData,
    error,
    isLoading,
    setError,
    setisloading,
    setChuck,
  } = useContextStoreProvider();

  const getData = async () => {
    setData([]);
    setChuck([]);
    const ctrl = new AbortController();
    setisloading(true);

    try {
      await fetchEventSource("https://houduanapi.soufalv.com/chat", {
        method: "POST",
        headers: {
          // Accept: "text/event-stream",
          "Content-Type": "application/json",
        },
        signal: ctrl.signal,
        body: JSON.stringify({
          query: queryVal,
          history: [{}],
          model: "gpt-3.5-turbo",

          // streamEvent: "begin-stream",
        }),

        onopen: async (res) => {
          const contentType = res.headers.get("content-type");

          if (!!contentType && contentType.indexOf("application/json") >= 0) {
            throw await res.json();
          }
        },

        onerror: (err) => {
          if (!!err) {
            // console.log("Fetch onerror", err);
          }
          throw err;
        },

        onmessage(event) {
          if (!event.data) {
            return;
          }

          const parsedData = JSON.parse(event.data);

          setData((data: any) => [...data, parsedData]);

          if (parsedData.event === "text-chunk") {
            setChuck((prevData) => [...prevData, parsedData.data]);
          }

          setisloading(false);
        },
      });
    } catch (err) {
      setisloading(false);
      setData([]);
      setChuck([]);
      setError("Failed to fetch data");
    }
  };

  useEffect(() => {
    if (queryVal) {
      getData();
    } else {
      null;
      setChuck([]);
    }
  }, []);
  // const navigate = useNavigate();

  if (!queryVal) {
    setisloading(false);
  }

  // const clear = () => {
  //   setQueryVal("");
  //   setData([]);
  //   navigate("/");
  // };

  return (
    <div className="grid">
      <div>
        <NavHeader />
        <section className="flex items-center justify-center p-5 h-fit md:px-10">
          <div className="flex flex-col items-center justify-center w-full px-5 md:w-2/3 md:flex-row">
            <Inputs getData={getData} />
          </div>
        </section>
      </div>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {error && <p className="text-center text-blue-400 ">{error}</p>}
          <Contents />
        </>
      )}
    </div>
  );
};

export default FetchData;
