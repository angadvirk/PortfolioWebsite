import Home from "./pages/Home";
// import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <Home />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />}/>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}