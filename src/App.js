import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./home";
import Login from "./components/login";
function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" />

      <Routes>
        <Route path="/main" exec element={<HomePage />} />
        <Route path="/login" exec element={<Login />} />
        <Route path="/" exec element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
