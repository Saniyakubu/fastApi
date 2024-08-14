import { useEffect, useState } from "react";
import { useContextStoreProvider } from "../context/store";
import { Card, CardContent, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import MarkdownRenderer from "./renderer";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import { Input } from "./ui/input";
import { MdOutlineSend } from "react-icons/md";
import { NavigationMenuDemo } from "./navbar";
import Aipng from "../assets/inquireAi2.png";
import { FaRobot } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ChatLoading } from "./Loading";
const Chat = () => {
  const navigate = useNavigate();
  const [chatRes, setChatRes] = useState<any[]>([]);
  const [resultData, setResultData] = useState<any[]>([]);
  const { setisloading, isLoading, setError, chatQueryVal, setChatQueryVal } =
    useContextStoreProvider();
  const combinedMarkdown =
    chatRes && chatRes?.map((item) => item?.text).join("");

  const queryValue = resultData && resultData[0]?.query;

  const ChatAi = async () => {
    setChatRes([]);
    setResultData([]);

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
          query: chatQueryVal,
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
          if (parsedData.event === "text-chunk") {
            setChatRes((prevData) => [...prevData, parsedData.data]);
          }

          setResultData((prevData) => [...prevData, parsedData.data]);

          setisloading(false);
        },
      });
    } catch (err) {
      setisloading(false);
      setChatRes([]);
      setResultData([]);
      setError("Failed to fetch data");
    }
  };

  useEffect(() => {
    ChatAi();
  }, []);

  const clear = () => {
    setChatRes([]);
    setResultData([]);
    navigate("/");
  };
  return (
    <div className="grid py-10 md:container">
      <div>
        <nav className="flex items-center w-full gap-5 px-5 place-self-start">
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
            <p className="p-3 transition border rounded-lg cursor-pointer hover:bg-primary hover:text-primary-foreground">
              FeedBack
            </p>
          </div>
        </nav>
        {/* <ReactMarkdown>*React-Markdown* is ** Awesome **</ReactMarkdown> */}
        <div className="flex justify-center w-full mt-16">
          <div className="flex items-center w-[95%] max-w-2xl px-3 py-2 space-x-2 border focus-within:border-[2px] rounded-2xl">
            <Input
              value={chatQueryVal as string}
              className="bg-transparent border-none outline-none "
              type="email"
              placeholder="Ask anything..."
              onChange={(e) => setChatQueryVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  ChatAi();
                }
              }}
            />
            <Button type="submit" onClick={ChatAi}>
              <MdOutlineSend />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full px-5 py-10 mt-10 space-y-10">
        {isLoading ? (
          <ChatLoading />
        ) : (
          <>
            {queryValue && (
              <Card className="w-full border-none shadow-none chat place-content-center chat-end">
                <CardTitle className="px-5 py-1 text-lg font-medium tracking-tight text-primary-foreground bg-primary rounded-3xl w-fit scroll-m-20">
                  {queryValue && queryValue}
                </CardTitle>
              </Card>
            )}
            {chatRes.length > 0 && (
              <Card className="relative w-full border-none shadow-none chat chat-start">
                <div className="absolute top-0 chat-image avatar">
                  <div className="w-12 p-1 rounded-full">
                    <div>
                      <FaRobot className="w-[90%] h-[90%] mx-auto " />
                    </div>
                  </div>
                </div>
                <CardContent className="w-2/3 mx-10 chat-bubble">
                  <MarkdownRenderer content={combinedMarkdown} />
                </CardContent>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Chat;
