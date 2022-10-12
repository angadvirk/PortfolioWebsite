import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Article from "./pages/Article";

import { Routes, Route, Navigate, HashRouter } from "react-router-dom";

export default function App() {

  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/article" element={<Article />} />
          <Route path="*" element={<Navigate to="/" replace />}/>
          {/* TODO: create '/articles/name' route */}
        </Routes>
      </HashRouter>
    </div>
  );
}