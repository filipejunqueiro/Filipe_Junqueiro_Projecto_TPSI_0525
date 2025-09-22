import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { MantineProvider } from "@mantine/core";
import App from "./components/App/App.tsx";
import "./index.css";
import "@mantine/core/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </StrictMode>
);
