import React, {useState} from 'react';
import { Tabs,Tab,AppBar,Drawer , } from "@material-ui/core";
import {DropdownToggle,DropdownItem,DropdownMenu, Dropdown} from "reactstrap"
import MenuTab from "./MenuTab";
import clsx from 'clsx';
import {Link} from 'react-router-dom'
import StoreLogo2 from "../Images/StoreLogo2.png";
import pionerLg from "../Images/pionerLg.jfif"
import "../Styles/Navbar.css";
import Coolfan from "../Images/CoolFan.jpg"

function Navbar() {

    const [dropdownOpen, setDropdownOpen] = useState(false);
  
    const toggle = () => setDropdownOpen(prevState => !prevState);
  
    // const dropdownOpen = () => {
    //   this.state.setOpen(true);
    // };
  
    // const dropdownClose = () => {
    //   this.state.setOpen(false);
    // };
  

    
    return (
        <AppBar className="Navbar" position="sticky" >
            <div className="Nav_Tabs">
            <li><a href="#">About</a></li>
            <li><a href="#contact-us">Contact</a></li>
            <li><a href="#">Amps</a></li>
            <li><a href="#">Capacitors</a></li>
            <li><a href="#">Speakers</a></li>
            <li><a href="#">Adaptors & Accessories</a></li>
            {/* <div><MenuTab/></div> */}
            </div>  
           
           <div id="Nav_logo" ><a href="#home">
                    <img /*--->pngimg.com IMPORTANT site for company LOGOS<---*/
                        src={StoreLogo2} alt="#"/>
            </a>
            </div>

            </AppBar>
    )
}

export default Navbar;
