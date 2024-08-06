import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MdOutlineSend } from "react-icons/md";
import { Card, CardContent, CardHeader } from "./ui/card";
import Aipng from "../assets/inquireAi.png";
import { BiCode, BiCoffee, BiMenu } from "react-icons/bi";
import { useContextStoreProvider } from "../context/store";
import { useNavigate } from "react-router-dom";
import { BsCode } from "react-icons/bs";
const FrontPage = () => {
  const { queryVal, setQueryVal } = useContextStoreProvider();

  const navigate = useNavigate();

  const sendData = () => {
    navigate("/search");
  };
  return (
    <section className="">
      <article className="relative flex flex-col items-center justify-center h-screen gap-10 mx-auto overflow-hidden ">
        <nav className="absolute top-0 left-0 right-0 flex items-center self-start justify-between h-20 px-4 py-2">
          <img className="w-40" src={Aipng} alt="ai" />
          <BiMenu className="text-3xl cursor-pointer" />
        </nav>
        <h1 className="text-4xl font-bold tracking-tight scroll-m-20 ">
          Unleashing Curiosity
        </h1>
        <div className="flex items-center w-full max-w-2xl px-3 py-2 space-x-2 border focus-within:border-[2px] rounded-2xl">
          <Input
            value={queryVal as string}
            className="bg-transparent border-none outline-none "
            type="email"
            placeholder="Ask anything..."
            onChange={(e) => setQueryVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendData();
              }
            }}
          />
          <Button type="submit" onClick={sendData}>
            <MdOutlineSend />
          </Button>
        </div>
        <div className="grid w-full max-w-[715px] grid-cols-1 gap-5 px-5 md:grid-cols-2 place-content-center">
          <Card
            onClick={() => setQueryVal("如何学习react")}
            className="flex items-center w-full gap-5 px-5 py-3 cursor-pointer md:max-w-sm"
          >
            <CardHeader className="p-0 ">
              <BsCode />
            </CardHeader>
            <CardContent className="p-0 ">如何学习react</CardContent>
          </Card>
          <Card
            onClick={() => setQueryVal("如何学习Python")}
            className="flex items-center w-full gap-5 px-5 py-3 cursor-pointer md:max-w-sm"
          >
            <CardHeader className="p-0 ">
              <BsCode />
            </CardHeader>
            <CardContent className="p-0 ">如何学习Python</CardContent>
          </Card>
          <Card
            onClick={() => setQueryVal("什么是react")}
            className="flex items-center gap-5 px-5 py-3 cursor-pointer md:max-w-sm"
          >
            <CardHeader className="p-0 ">
              <BiCode />
            </CardHeader>
            <CardContent className="p-0 ">什么是react</CardContent>
          </Card>
          <Card
            onClick={() => setQueryVal("咖啡怎么做")}
            className="flex items-center gap-5 px-5 py-3 cursor-pointer md:max-w-sm"
          >
            <CardHeader className="p-0 ">
              <BiCoffee />
            </CardHeader>
            <CardContent className="p-0 ">咖啡怎么做</CardContent>
          </Card>
        </div>
      </article>
    </section>
  );
};

export default FrontPage;
