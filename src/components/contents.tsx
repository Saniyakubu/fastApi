import { useMemo, useState } from "react";
import { useContextStoreProvider } from "../context/store";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Typewriter from "../context/typewriter";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import MarkdownRenderer from "./renderer";
import { useNavigate } from "react-router-dom";

const Contents = () => {
  const navigate = useNavigate();
  const { data, chunk, setChatQueryVal } = useContextStoreProvider();
  const results = data && data[1]?.data?.results;

  const combinedMarkdown =
    chunk && useMemo(() => chunk?.map((item) => item?.text).join(""), [chunk]);
  console.log("combinedMarkdown", combinedMarkdown);
  const [isTrue, setIsTrue] = useState(false);
  return (
    <div className="py-10 md:container">
      <Card className="text-3xl font-bold text-blue-400 border-none shadow-none cursor-pointer hover:underline md:mb-10">
        <CardContent
          onClick={() => {
            setChatQueryVal(data[0]?.data?.query);
            navigate("/chat");
          }}
        >
          {data && data[0]?.data?.query}
        </CardContent>
      </Card>
      {chunk.length > 0 && (
        <Card className="w-[95%] mx-auto md:mx-0 py-4 break-words md:w-2/3 md:px-6">
          <CardContent
            className={`w-ful  leading-loose space-y-5  text-wrap transition  break-words`}
          >
            {isTrue ? (
              <MarkdownRenderer content={combinedMarkdown} />
            ) : (
              <MarkdownRenderer
                content={combinedMarkdown.slice(0, 250) + "......."}
              />
            )}
          </CardContent>
          <div className="flex justify-center w-full p-2 mt-5">
            <Button className="text-center " onClick={() => setIsTrue(!isTrue)}>
              {isTrue ? "Read less" : "Read more"}
            </Button>
          </div>
        </Card>
      )}
      <div className="flex flex-col mt-5 md:mt-10 gap-y-5">
        {results?.map((res: any, index: number) => {
          return (
            <Card
              key={index}
              className="grid max-w-3xl gap-4 p-5 border-none shadow-none"
            >
              <CardHeader className="p-0 text-lg font-bold text-blue-400 hover:underline">
                {/* <a href={res?.url}>{res?.title}</a> */}
                <a href={res?.url}>
                  <Typewriter text={res?.title} speed={index + 1} />
                </a>
              </CardHeader>
              <p className="line-clamp-3 text-balance">
                <Typewriter text={res?.content} speed={index + 2} />
              </p>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Contents;
