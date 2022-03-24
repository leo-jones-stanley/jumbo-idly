import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Login from "./Components/Login";
import Main from "./Components/Main";
import ForgotPass from "./Components/ForgotPass";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/forgot" element={<ForgotPass />} />
          <Route exact path="/home" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
