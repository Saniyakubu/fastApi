import { useState } from "react";
import { useContextStoreProvider } from "../context/store";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Typewriter from "../context/typewriter";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import MarkdownRenderer from "./renderer";

// import rehypeKatex from "rehype-katex";
// import rehypeRaw from "rehype-raw";
// import SyntaxHighlighter from "react-syntax-highlighter";

const Contents = () => {
  const { data, chunk } = useContextStoreProvider();
  const results = data && data[1]?.data?.results;
  // const lastItem = data !== undefined && data[data?.length - 1];
  const combinedMarkdown = chunk && chunk?.map((item) => item?.text).join("");

  const [isTrue, setIsTrue] = useState(false);
  return (
    <div className="py-10 md:container">
      {/* <ReactMarkdown>*React-Markdown* is ** Awesome **</ReactMarkdown> */}
      <Card className="text-3xl font-bold border-none shadow-none md:mb-10">
        <CardContent>{data && data[0]?.data?.query}</CardContent>
      </Card>
      {chunk && (
        <Card className="w-2/3 px-6 py-4 break-words">
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
