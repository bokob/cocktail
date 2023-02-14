//import logo from "./logo.svg";
//import "./App.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import "./css/App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  console.log("으악");
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <>
              <div>관리자</div>
            </>
          }
        />
        <Route
          path="/test"
          element={
            <>
              <div>test</div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
