import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { MdOutlineSend } from "react-icons/md";
import { Card, CardContent, CardHeader } from "./ui/card";
import Aipng from "../assets/inquireAi2.png";
import { BiCode, BiCoffee } from "react-icons/bi";
import { useContextStoreProvider } from "../context/store";
import { useNavigate } from "react-router-dom";
import { BsCode } from "react-icons/bs";
import { NavigationMenuDemo } from "./navbar";
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
    <section className="grid w-full h-screen overflow-hidden">
      <nav className="flex items-center w-full gap-5 px-5 py-4 place-self-start">
        <img className="w-16" src={Aipng} alt="ai" />
        <div className="flex-1 ">
          <NavigationMenuDemo />
        </div>
        <div className="hidden md:block">
          <p className="p-3 transition border rounded-lg cursor-pointer hover:bg-primary hover:text-primary-foreground">
            FeedBack
          </p>
        </div>
      </nav>
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

        {/* <div className="md:max-w-2xl w-[95%]">
          <h4 className="mx-5 my-3 text-xl font-semibold tracking-tight scroll-m-20">
            与 AI 聊天
          </h4>
          <div className="grid w-full grid-cols-1 gap-5 mx-auto md:max-w-2xl md:grid-cols-2 place-content-center">
            <Card
              onClick={() => {
                setChatQueryVal("JavaScript很好学吗");
                goToChat();
              }}
              className="flex items-center w-full gap-5 px-5 py-3 cursor-pointer md:max-w-sm"
            >
              <CardHeader className="p-0 ">
                <BsCode />
              </CardHeader>
              <CardContent className="p-0 ">JavaScript很好学吗</CardContent>
            </Card>
            <Card
              onClick={() => {
                setChatQueryVal("react难不难");
                goToChat();
              }}
              className="flex items-center w-full gap-5 px-5 py-3 cursor-pointer md:max-w-sm"
            >
              <CardHeader className="p-0 ">
                <BsCode />
              </CardHeader>
              <CardContent className="p-0 ">react难不难</CardContent>
            </Card>
          </div>
        </div> */}
      </article>
      <footer className="p-10 h-fit place-self-end footer bg-neutral text-neutral-content">
        <aside>
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
          </svg>
          <p>
            InquireAi
            <br />
            Providing reliable tech since 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </section>
  );
};

export default FrontPage;
