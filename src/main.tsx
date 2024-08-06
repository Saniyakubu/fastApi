import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import StateProvider from "./context/store.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FrontPage from "./components/frontPage.tsx";
import { Analytics } from "@vercel/analytics/react";
const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
  },
  {
    path: "search",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StateProvider>
    <>
      <RouterProvider router={router} />
      <Analytics />
    </>
  </StateProvider>
);
