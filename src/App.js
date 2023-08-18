import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";




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
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
            <TextForm heading="Try TextUtils - Word and Character Counter | Lowercase and Uppercase Converter" mode={mode} showAlert={showAlert} />
      </div>
    </>
  );
}

export default App;
