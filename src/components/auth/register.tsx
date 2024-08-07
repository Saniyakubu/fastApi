import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import AiLogo from "../../assets/inquireAi2.png";
import { BsGoogle } from "react-icons/bs";
import { NavigationMenuDemo } from "../navbar";

const RegisterPage = () => {
  return (
    <div className="grid h-screen">
      <nav className="flex items-center w-full gap-5 px-5 py-4 place-self-start">
        <img className="w-16" src={AiLogo} alt="ai" />
        <div className="flex-1 ">
          <NavigationMenuDemo />
        </div>
        <div className="hidden md:block">
          <p className="p-3 transition border rounded-lg cursor-pointer hover:bg-primary hover:text-primary-foreground">
            FeedBack
          </p>
        </div>
      </nav>
      <div className="flex items-center justify-center overflow-hidden">
        <Card className="w-[400px] grid h-[600px]">
          <div className="w-20 mx-5 mt-5">
            <img className="w-full" src={AiLogo} alt="" />
          </div>

          <CardHeader className="">
            <h1 className="text-4xl font-extrabold tracking-tight scroll-m-20">
              Get started
            </h1>

            <p className="text-sm text-gray-500">Create a new account</p>
          </CardHeader>
          <CardContent className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="yourname@gmail.com" />

            <Label htmlFor="password" className="">
              Password
            </Label>

            <Input id="password" type="password" placeholder="••••••••" />

            <div className="grid gap-4 mt-5">
              <Button className="p-6 ">Sign up</Button>
              <span className="border-t-2"></span>
              <Button className="flex gap-3 p-5 bg-transparent border-2 text-secondary-foreground hover:text-white border-primary">
                <BsGoogle className="text-lg" />
                <span>Sign up with google</span>
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <span>
              Already have an account ?{" "}
              <Link className="underline " to={"/login"}>
                Sign in
              </Link>
            </span>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
