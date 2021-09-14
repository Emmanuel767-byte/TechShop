import React from 'react'
import Productcard from "../Components/Productcard";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CARbASS from "../Images/CARbASS.jpg";

import hometheatre from "../Images/hometheatre.jfif";
import '../Styles/Home.css';
import CenteredGrid from "../Components/textGrid";
import Example from "../Components/Example.js";
import Rockfoster from  "../Images/Rockfoster.jfif";
import Capacitor1 from "../Images/Capacitor1.jfif";
import Capacitor2 from "../Images/Capacitor2.jfif";
import StudioSet1edit from "../Images/StudioSet1edit.jpg";
import { Card } from '@material-ui/core';
import Buildinng from "../Images/Building.png";
import StoreLogo2 from "../Images/StoreLogo2.png"

 
function Home() {
                
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
      const classes = useStyles();  
      
      let Welcome=(<div>
                    <p>
                    What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
 galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
 but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
1960s with the release of Letraset sheets containing Lorem Ipsum passages,
 and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>
                </div>
      )
    return (
        <div id="home" className="home">         
                        <div className="home_row section-1">
                        <CenteredGrid/>
                        </div>   
                        <div className="home_row_cntnr">
                        
                        <div className={`home_row ${classes.root}`}>
                              
                            </div>
                             
                        </div>
                </div>
        
    )
}

export default Home
