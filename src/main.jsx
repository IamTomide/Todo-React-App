import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import ListContainer from "./components/ListContainer";
import ThemeProvider from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ListContainer />
    </ThemeProvider>
  </StrictMode>
);
