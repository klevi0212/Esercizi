import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { SWRConfig } from "swr";
const fetcher = (url) => fetch(url).then((response) => response.json());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SWRConfig value={{ fetcher: fetcher }}>
      <App />
    </SWRConfig>
  </StrictMode>
);
