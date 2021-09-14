import React from 'react';

import './Styles/App.css';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import ContactUs from './Pages/ContactUs.jsx';
import Example from './Components/Example';

//import CenteredGrid from "./Components/textGrid"

// window.onload(document.querySelector(".App"))


function App() {
  return (
    <div className="App">
      <meta name="viewport" content="width=device-width, inital-scale=1.0"/>
      <Navbar/>
      
      <Home />
      <ContactUs/>
    </div>  
  );
}

export default App;
