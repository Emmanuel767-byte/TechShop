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
        <AppBar className="Navbar" position="static" >
            <div className="Nav_Tabs">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <div><MenuTab/></div>
            </div>  
           
           <div id="Nav_logo" > 
           <img /*--->pngimg.com IMPORTANT site for company LOGOS<---*/
            src={Coolfan} alt="#"/>
            </div>

            </AppBar>
    )
}

export default Navbar;
