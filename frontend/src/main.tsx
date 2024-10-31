import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";

import "./index.css";
import { defaultTheme } from "./themes";
import AppRouter from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={defaultTheme}>
      <StyleProvider layer>
        <AppRouter />
      </StyleProvider>
    </ConfigProvider>
  </StrictMode>
);
