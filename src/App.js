import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";



function App() {
  const [mode, setDarkMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setDarkMode("dark");
      showAlert(" Dark mode has been enbaled", "success");
      document.body.style.backgroundColor = "grey";
    } else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enbaled", "success");
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter The Text To Analyze Below" mode={mode} showAlert={showAlert} />
          </Route>
        </Switch>
      </div>
      </Router>
    </>
  );
}

export default App;
