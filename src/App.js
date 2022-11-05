import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react'
import Alert from './components/Alert';
import { Routes, Route} from "react-router-dom";



function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const [btn, setbtn] = useState("dark");
  

  const showAlert=(message , type)=>{
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 2000);
  }
  const toogleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      setbtn("light");
      document.body.style.background='#38383a';
      showAlert("Enable dark mode","Success");
    }else{
      setmode('light');
      setbtn("dark");
      document.body.style.background='white';
      showAlert("Enable light mode","Success");
    }

  }
  return (
    <>
      <Navbar title="Textutils" about="About" mode={mode} toogleMode={toogleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      {/* <TextForm mode={mode} btn={btn} showalert={showAlert}/> */}
      <Routes>
        <Route path="/" element={<TextForm mode={mode} btn={btn} showalert={showAlert}/>} />
        <Route path="About" element={<About mode={mode} />} />
      </Routes>
      </div>
    </>
  );
}

export default App;



