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
import Capacitor2 from "../Images/Capacitor2.jfif"
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
        <div className="home">
                
                        <div className="home_row section-1">
                            {/* <>
                            <div className="home_intro">    
                            <div className="imgDv">
                            <img src={Buildinng} alt="#" /> 
                            </div>
                            <div className="home_intro_card">
                            {Welcome}
                            </div>
                                    
                            </div>
                            </> */}
                            <div className="LogoDv">
                                <img src={StoreLogo2} alt="#"/>
                            </div>
                        <CenteredGrid/>
                        </div>   
                        <div className="home_row_cntnr">
                        
                        <div className={`home_row ${classes.root}`}>
                            <Grid xs={12} container className="Hot" spacing={2}>
                            <Grid container>
        <center  className={`Hotheader ${classes.paper}`}> <h1 style={{color: 'rgb(56, 175, 230)'}}>New Arivals!</h1></center>
        </Grid>
                                <Grid item xs={3} >
                                <Productcard className={classes.paper}
                            id="526df95"
                            title ="Boss Capacitor"
                            price={179.99}
                            img={Capacitor1}
                            rating={5}
                            />
                                </Grid>
                                <Grid item xs={3} >
                                <Productcard className={classes.paper}
                            id="15vbn5"
                            title ="Mx Capacitor"
                            price={189.99}
                            img={Capacitor2}
                            rating={2}
                            />
                                </Grid>
                                <Grid item xs={3} >
                                <Productcard className={classes.paper}
                            id="526df95"
                            title ="Rockfoster"
                            price={100}
                            img={Rockfoster}
                            rating={4}/>
                                </Grid>
                                <Grid item xs={3} >
                                <Productcard className={classes.paper}
                            id="526df95"
                            title ="Boss Capacitor"
                            price={179.99}
                            img={Capacitor1}
                            rating={5}
                            />
                                </Grid>
                            </Grid>  
                            </div>
                                {/* <div className="home_row">
                                        
                            <Productcard
                            id="526df95"
                            title ="Jordan Retro"
                            price={79.99}
                            img="https://th.bing.com/th/id/OIP.1CMszUXN8Yh0LoHRgkNwOgHaFj?w=271&h=203&c=7&o=5&pid=1.7"
                            rating={3}/> 
                            <Productcard
                            id="526df95"
                            title ="PlayStation 5 PS5"
                            price={499.99}
                            img="https://static0.srcdn.com/wordpress/wp-content/uploads/2020/04/PS5-Console-White-Mockup.jpg"
                            rating={5}/>
                            <Productcard
                            price={30}
                            title="Joggers"
                            rating={4}
                            id="5fiy62"
                            img="https://th.bing.com/th/id/OIP.WwbSHEtFr5bljJZG0KDT3AHaLH?pid=Api&rs=1"/>   
                            </div> */}

                        </div>
                </div>
        
    )
}

export default Home
