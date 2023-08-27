import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "../public/styles.css";

import App from "./App";
import Footer from "./footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Footer />
  </StrictMode>
);
