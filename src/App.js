import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Article from "./pages/Article";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/article" element={<Article />} />
          {/* TODO: create '/articles/name' route */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}