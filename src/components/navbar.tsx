import * as React from "react";
import { cn } from "../lib/utils";
// import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { Link } from "react-router-dom";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Login",
    href: "/login",
    description: "登录账户",
  },
  {
    title: "Sign up",
    href: "/signup",
    description: "创建账户",
  },
  {
    title: "Logout",
    href: "/",
    description: "登出账户",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="w-full max-w-[100%] mx-auto">
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex flex-col justify-end w-full h-full p-6 no-underline rounded-md outline-none select-none bg-gradient-to-b from-muted/50 to-muted focus:shadow-md"
                    href="/"
                  >
                    {/* <Icons.logo className="w-6 h-6" /> */}
                    <div className="mt-4 mb-2 text-lg font-medium">
                      InquireAi
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      获取即时答案，与我们的 AI
                      助手进行动态对话。发现快速、准确的信息和个性化的回应。
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/chat" title="与 AI 聊天">
                获取即时答案和推荐
              </ListItem>
              <ListItem href="/search" title="搜索内容...">
                快速找到您需要的信息。输入关键词，立即获取相关结果，帮助您更高效地找到答案和资源。
              </ListItem>
              {/* <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem> */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Account</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-sm leading-snug line-clamp-2 text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
