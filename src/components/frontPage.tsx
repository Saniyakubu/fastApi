import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MdOutlineSend } from "react-icons/md";
import { Card, CardContent, CardHeader } from "./ui/card";
import { BiCode, BiCoffee } from "react-icons/bi";
import { useContextStoreProvider } from "../context/store";
import { useNavigate } from "react-router-dom";
import { BsCode } from "react-icons/bs";
import NavHeader from "./navHeader";
const FrontPage = () => {
  const { queryVal, setQueryVal } = useContextStoreProvider();

  const navigate = useNavigate();

  const sendData = () => {
    navigate("/search");
  };
  // const goToChat = () => {
  //   navigate("/chat");
  // };
  return (
    <section className="grid flex-1 w-full h-full overflow-hidden">
      <NavHeader />
      <article className="flex flex-col items-center justify-center w-full gap-5 mx-auto place-self-center ">
        <h1 className="text-4xl font-bold tracking-tight scroll-m-20 ">
          Unleashing Curiosity
        </h1>
        <div className="flex items-center w-[95%] max-w-2xl px-3 py-2 space-x-2 border focus-within:border-[2px] rounded-2xl">
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
        <div className="grid w-[95%] mx-auto md:max-w-2xl grid-cols-1 gap-5 md:grid-cols-2 place-content-center">
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
