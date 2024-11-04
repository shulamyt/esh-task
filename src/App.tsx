import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CategoryPage from "./components/CategoryPage";
import { Result } from "./services/api";
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import { Displayable } from "./models/interfaces/Displayable";
import HomePage from "./components/HomePage";

const theme = createTheme({});

function App() {
  const [results, setResults] = useState<Result[]>([]);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<HomePage results={results} setResults={setResults} />}
        />
        <Route
          path="/category/:category"
          element={<CategoryPage results={results} />}
        />
      </Routes>
    </div>
  );
}

export default function Root() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
