import { useContextStoreProvider } from "../context/store";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Typewriter from "../context/typewriter";
import { Card, CardContent, CardHeader } from "./ui/card";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Contents = () => {
  const { data } = useContextStoreProvider();
  const results = data && data[1]?.data?.results;
  const lastItem = data !== undefined && data[data?.length - 1];

  console.log("results", data);
  return (
    <div className="py-10 md:container">
      <Card className="text-3xl font-bold border-none shadow-none md:mb-10">
        <CardContent>{data && data[0]?.data?.query}</CardContent>
      </Card>

      <div className="flex flex-col md:mt-10 mt-5 gap-y-5">
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
        {lastItem && lastItem?.event === "final-response" && (
          <>
            {/* <CodeBlock
              text={lastItem?.data?.message}
              language={"javascript"}
              showLineNumbers={true}
              theme={dracula}
            /> */}
            <ReactMarkdown
              className={"leading-loose"}
              children={lastItem?.data?.message}
              remarkPlugins={[remarkGfm]}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Contents;
