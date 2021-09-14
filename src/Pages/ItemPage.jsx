import React from 'react';
import {Paper, Grid} from "@material-ui/core"
import { makeStyles } from '@material-ui/core/styles';

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

export default function ItemPage({data}) {
    const classes = useStyles();
  return (
    <div className={`${classes.root}`}>
        <Grid container spacing={3} >
            <Grid item xs={8} className="lg-img" >
                <img src="" alt="#" />
            </Grid>
            <Grid container xs={6} spacing={3}>
            <Grid item xs={2} >
                <img src="" alt="#" className="sm-img" />
            </Grid>
            <Grid item xs={2} >
                <img src="" alt="#"  className="sm-img" />
            </Grid>
            <Grid item xs={2} >
                <img src="" alt="#"  className="sm-img" />
            </Grid>
            <Grid item xs={2} >
                <img src="" alt="#"  className="sm-img"/>
            </Grid>
            </Grid>
        </Grid>
        <Paper className={`${classes.root}`}>
            <h1></h1>
        </Paper>
    </div>
  );
}
