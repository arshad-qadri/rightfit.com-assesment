import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { DrawerProvider } from "./context/drawer.jsx";
import { DataProvider } from "./context/data.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <DrawerProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </DrawerProvider>
    </BrowserRouter>
  </StrictMode>
);
