// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode has been enabled", "Success");
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Textutils" /> */}
      {/* <Navbar/> */}
      <Router>
        <Navbar title="TextTool" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            {/* exact path used to match the exact path in react dom, else partial matching will be occur and the 1st page will be rendered instead of 2nd
            /users --> Component 1
            /users/home --> Component 2 */}
            <Route exact path="/about">
              <About mode={mode}/>
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Try Textool - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} />

            </Route>
          </Switch>
        </div>
       </Router>
    </>
  );
}

export default App;