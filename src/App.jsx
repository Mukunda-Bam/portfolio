import { Routes, Route, Link } from "react-router";
import Experience from "./Experience";
import Home from "./Home";
import "./App.css";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<Home />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/experience" element={<Experience />} />
      </Routes>
    </>
  );
}

export default App;

