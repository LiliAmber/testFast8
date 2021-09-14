// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import PersonnelList from "./pages/PersonnelList";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/personnel">
          <PersonnelList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
