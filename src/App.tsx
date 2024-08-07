import { fetchEventSource } from "@microsoft/fetch-event-source";
import Inputs from "./components/inputs";
import { useContextStoreProvider } from "./context/store";
import Contents from "./components/contents";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "./components/ui/skeleton";
import { NavigationMenuDemo } from "./components/navbar";
import Aipng from "./assets/inquireAi2.png";
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
  const navigate = useNavigate();

  if (!queryVal) {
    setisloading(false);
  }

  const clear = () => {
    setQueryVal("");
    setData([]);
    navigate("/");
  };

  return (
    <div className="grid min-h-screen border">
      <div>
        <nav className="flex items-center w-full gap-5 px-5 py-5 place-self-start">
          <img
            onClick={clear}
            className="w-16 cursor-pointer"
            src={Aipng}
            alt="ai"
          />
          <div className="flex-1 ">
            <NavigationMenuDemo />
          </div>
          <div className="hidden md:block">
            <p className="p-3 transition rounded-lg cursor-pointer hover:bg-primary hover:text-primary-foreground">
              FeedBack
            </p>
          </div>
        </nav>
        <section className="flex items-center justify-center p-5 h-fit md:px-10">
          <div className="flex flex-col items-center justify-center w-full px-5 md:w-2/3 md:flex-row">
            <Inputs getData={getData} />
          </div>
        </section>
      </div>

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
      <footer className="p-4 place-self-end footer footer-center bg-base-300 text-base-content">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            InquireAi Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default FetchData;
