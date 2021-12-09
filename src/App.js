import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import NoMatch from "./components/NoMatch/NoMatch";
import Destination from "./components/Destination/Destination";
import Login from "./components/LogIn/Login";
import SignUp from "./components/SignUp/SignUp";
import { createContext, useState } from "react";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Header></Header>
      <Routes>
        <Route path="*" element={<NoMatch />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/destination"
          element={
            <PrivateRoute>
              <Destination />
            </PrivateRoute>
          }
        />
        {/* <Route element={<PrivateRoute />}>
          <Route path="/destination" element={<Destination />} />
        </Route> */}

        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
