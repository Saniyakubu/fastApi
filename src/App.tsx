import { fetchEventSource } from "@microsoft/fetch-event-source";
import Inputs from "./components/inputs";
import { useContextStoreProvider } from "./context/store";
import Contents from "./components/contents";
import { useEffect } from "react";
import AiPng from "./assets/inquireAi.png";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "./components/ui/skeleton";
const FetchData = () => {
  const {
    queryVal,
    setQueryVal,
    setData,
    error,
    isLoading,
    setError,
    setisloading,
    setChuck,
    chunk,
  } = useContextStoreProvider();
  console.log("chunk", chunk);

  const getData = async () => {
    setData([]);
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

          // console.log("event.data: ", event);

          const parsedData = JSON.parse(event.data);
          // console.log("parsedData: ", parsedData);

          setData((data: any) => [...data, parsedData]);

          if (parsedData.event === "text-chunk") {
            setChuck((prevData) => [...prevData, parsedData.data]);
          }

          setisloading(false);
        },
      });
    } catch (err) {
      setisloading(false);
      setError("Failed to fetch data");
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const navigate = useNavigate();

  const clear = () => {
    setQueryVal("");
    setData([]);
    navigate("/");
  };

  if (!queryVal) {
    clear();
  }

  return (
    <div>
      <section className="flex items-center justify-between md:px-10">
        <div className="flex flex-col items-center w-full px-5 md:w-2/3 md:flex-row">
          <img
            className="cursor-pointer w-28"
            onClick={clear}
            src={AiPng}
            alt=""
          />
          <Inputs getData={getData} />
        </div>

        <div className="hidden md:block">
          <p className="p-3 transition border rounded-lg cursor-pointer hover:bg-primary hover:text-primary-foreground">
            FeedBack
          </p>
        </div>
      </section>
      {isLoading ? (
        <div className="container flex flex-col gap-10 py-10 space-y-3">
          <Skeleton className="h-8 w-[250px]" />

          <div className="flex flex-col gap-4 ">
            <Skeleton className="h-4 w-[250px]" />
            <div className="space-y-2">
              <Skeleton className="h-[50px] max-w-3xl rounded-xl" />
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <Skeleton className="h-4 w-[250px]" />
            <div className="space-y-2">
              <Skeleton className="h-[50px] max-w-3xl rounded-xl" />
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <Skeleton className="h-4 w-[250px]" />
            <div className="space-y-2">
              <Skeleton className="h-[50px] max-w-3xl rounded-xl" />
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <Skeleton className="h-4 w-[250px]" />
            <div className="space-y-2">
              <Skeleton className="h-[50px] max-w-3xl rounded-xl" />
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <Skeleton className="h-4 w-[250px]" />
            <div className="space-y-2">
              <Skeleton className="h-[50px] max-w-3xl rounded-xl" />
            </div>
          </div>
        </div>
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
