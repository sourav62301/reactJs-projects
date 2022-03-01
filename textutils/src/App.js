import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import React, { useState } from 'react'
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled..", "success");
      // document.title = "TextUtil - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtil is Amazing Mode"
      // }, 1500);
      // setInterval(() => {
      //   document.title = "Install TextUtil Now"
      // }, 2500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled..", "success");
      // document.title = "TextUtil - Light Mode";
    }
  }


  // const removeBodyClasses= ()=>{
  //   document.body.classList.remove('bg-light');
  //   document.body.classList.remove('bg-dark');
  //   document.body.classList.remove('bg-primary');
  //   document.body.classList.remove('bg-danger');
  //   document.body.classList.remove('bg-success');
  //   document.body.classList.remove('bg-warning');
  // }

  // const toggleMode = (cls)=>{
  //   // console.log(cls);

  //   removeBodyClasses();
  //   document.body.classList.add('bg-'+cls)

  //   if(mode === 'light'){
  //     setMode('dark');
  //     document.body.style.backgroundColor = 'black';
  //     document.body.style.color = 'white';
  //     showAlert("Dark Mode has been enabled..", "success");
  //   }
  //   else{
  //     setMode('light');
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = 'black';
  //     showAlert("Light Mode has been enabled..", "success");
  //     // document.title = "TextUtil - Light Mode";
  //   }
  // }






  return (
    <>
    {/* <Navbar /> */}
    {/* <Navbar title="TextUtils" /> */}

    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
            <Route exact path="/about" element={<About mode={mode} />}/>
            <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" showAlert={showAlert} mode={mode}/>}/>
        </Routes>
      </div>
    </Router>


    </>
  );
}

export default App;
