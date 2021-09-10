import React from 'react'
import{Paper, Grid }from "@material-ui/core";
import Building from '../Images/Building.png';
import { makeStyles } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import "../Styles/ContactUs.css";
import CoolFan from "../Images/CoolFan.jpg"
import { margin } from 'polished';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));



function ContactUs() {
    const classes = useStyles();


    return (<div id="contact-us" className="contact-us">
            <Paper className="contactImgHeader">
                <div className="buildingdiv">
                  <img  id="" alt="#" src={Building}/>
                  </div>
                
                <div className="buildingAdrss">
                <h4 style={{marginRight:'6px',marginTop:'-13px'}}>Address :<br/></h4> 
                      <h4>Kennedy<br/>
	                      Roseau  <br/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
                        Dominica<br/>
                         </h4>
                         </div>
            </Paper>
            <Paper className="contact_Info">
                <ul className="Contact_socials">
                    <li style={{display:'flex', width:"160px", justifyContent:'space-between'}}><p>Follow us </p>
                    <FacebookIcon className="fb"/></li>
                    
                    <li className="li_info"><p>Contact Us at <p>+1767 4796/449-22356</p></p>
                    <hr/>
                    <p>Email Us at <p> elctronixplus@gmail.com</p></p>
                    </li>
                </ul>
            </Paper>
            <Paper className="contact_Logo">
                <p>ELEXTRONICS PLUS</p>
                <img alt="#" src={CoolFan}/>
            </Paper>
        </div>
    )
}

export default ContactUs
