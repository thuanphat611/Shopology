import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StyleProvider } from "@ant-design/cssinjs";

import "./index.css";
import AppRouter from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyleProvider layer>
      <AppRouter />
    </StyleProvider>
  </StrictMode>
);
