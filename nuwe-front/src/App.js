import { Routes, Route } from "react-router-dom";
import "./App.css";
import ExampleCreateCompany from "./pages/ExampleCreateCompany/ExampleCreateCompany";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-company" element={<ExampleCreateCompany />} />
      </Routes>
    </div>
  );
}

export default App;
