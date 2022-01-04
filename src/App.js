import "./App.css";
// import './componenets/Authorization/Login'
import Login from "./componenets/Authorization/Login";
import Register from "./componenets/Authorization/Register";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
