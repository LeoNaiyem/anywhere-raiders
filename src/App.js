import { Routes, Route} from "react-router-dom";
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import NoMatch from "./components/NoMatch/NoMatch";
import Destination from "./components/Destination/Destination";
import Login from "./components/LogIn/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header></Header>
       <Routes>
        <Route path="*" element = {<NoMatch />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
