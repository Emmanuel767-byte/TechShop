import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Productcard from "./Productcard"
import Grid from '@material-ui/core/Grid';
import CARbASS from "../Images/CARbASS.jpg";
import hometheatre from "../Images/hometheatre.jfif";
import pionerLg from "../Images/pionerLg.jfif";
import pioner from "../Images/Pioner.png";
import Auiopoplabel from "../Images/Auiopiplabel.jfif" ;
import Rockfoster from "../Images/Rockfoster.jfif";
import Pionerdeck from "../Images/Pionerdeck.jpg";
import Example from "./Example";
import pionerdeck2 from "../Images/pionerdeck2.jpg"
//import PionerAmp from "../Images/PionerAmp.jpg;"
import audiopipAmp from "../Images/audiopipAmp.jpg";
import audiopipe from "../Images/audiopipe.jpg";
import StudioSet3 from "../Images/StudioSet3.jpg"
import StudioSet1edit from "../Images/StudioSet1edit.jpg";
import Capacitor1 from "../Images/Capacitor1.jfif";
import Capacitor2 from "../Images/Capacitor2.jfif";


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

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
          <Grid item xs={12}>
            <Example/>
          </Grid>
        <Grid item xs={6}>
          <Productcard className={classes.paper} id="15vbn5"
                            title ="Pioner Car speaker Set"
                            price={750.00}
                            img={pioner}></Productcard>
        </Grid>
        <Grid item xs={6}>
          <Productcard className={classes.paper} id="15vbn5"
                            title ="Car Deck"
                            price={250.99}
                            img={Pionerdeck}></Productcard>
        </Grid>
        <Grid item xs={12} className="gridlogo" style={{marginTop:'10px'}}>
        <div className={`home_row`}>
                                
                                <img id="Biglogo" alt="" src={StudioSet1edit}/>
                    </div>
        </Grid>
        </Grid>
        
       <Grid xs={12} className="Hot" container spacing={2}>
       <Grid container>
        <center  className={`Hotheader ${classes.paper}`}> <h1 style={{color:'rgb(218, 12, 12)'}}>Hot Sellers!</h1></center>
        </Grid>
       <Grid item xs={3}>
          <Productcard className={classes.paper} id="15vbn5"
                            title ="Amp"
                            price={399.99}
                            img={audiopipAmp}></Productcard>
        </Grid>
        <Grid item xs={3}>
          <Productcard className={classes.paper} id="15vbn5"
                            title ="Double Speaker"
                            price={599.99}
                            img={audiopipe}></Productcard>
        </Grid>
        <Grid item xs={3}>
          <Productcard className={classes.paper} id="15vbn5"
                            title ="Pioner Deck Bt"
                            price={260.00}
                            img={pionerdeck2}></Productcard>
        </Grid>
        <Grid item xs={3}>
          <Productcard className={classes.paper} id="15vbn5"
                            title ="Audiopipe Amp"
                            price={599.99}
                            img={audiopipAmp}></Productcard>
        </Grid>
      
       </Grid>
      
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
  );
}
