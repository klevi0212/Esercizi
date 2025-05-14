import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AlertClock } from "./AlertClock";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AlertClock />
  </StrictMode>
);
