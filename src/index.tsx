import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const root = document.getElementById("root");

if (!root) {
  throw Error("unable to find root");
}

createRoot(root).render(<App />);
