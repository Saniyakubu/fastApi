import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import StateProvider from "./context/store.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FrontPage from "./components/frontPage.tsx";
import { Analytics } from "@vercel/analytics/react";
import LoginPage from "./components/auth/login.tsx";
import RegisterPage from "./components/auth/register.tsx";
import Chat from "./components/chat.tsx";
import Layout from "./layout/layout.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
  },
  {
    path: "search",
    element: <App />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "signup",
    element: <RegisterPage />,
  },
  {
    path: "chat",
    element: <Chat />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StateProvider>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
    <Analytics />
  </StateProvider>
);
