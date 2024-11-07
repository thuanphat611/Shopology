import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { StyleProvider } from "@ant-design/cssinjs";
import { ConfigProvider } from "antd";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./index.css";
import { defaultTheme } from "./themes";
import AppRouter from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={defaultTheme}>
      <StyleProvider layer>
        <AppRouter />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </StyleProvider>
    </ConfigProvider>
  </StrictMode>
);
