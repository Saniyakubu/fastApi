import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import StateProvider from "./context/store.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StateProvider>
    <App />
  </StateProvider>
);
