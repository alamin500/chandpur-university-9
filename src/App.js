import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Error from "./components/Error/Error";
import Teachers from "./components/Teachers/Teachers";
import MenuBar from "./components/MenuBar/MenuBar";
import Courses from "./components/Courses/Courses";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({
    name: "hero alom",
  });
  return (
    <div className="App">
      <userContext.Provider value={[user, setUser]}>
        <Router>
          <MenuBar />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/courses">
              <Courses></Courses>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/teachers">
              <Teachers></Teachers>
            </Route>
            <Route path="*">
              <Error></Error>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
