import React from "react";
import MyChart from "../Plot";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Back from "../../assets/back.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 50,
    marginBottom: 100,
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  h1: {
    color: "black",
    fontSize: "3rem",
    marginTop: 3,
  },
  container: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  icon: {
    margin: 25,
    width: 35,
    height: 35,
    marginBottom: 0,
    [theme.breakpoints.down("sm")]: {
      marginBottom: -20,
    },
  },
}));

function Dashboard(props) {
  const classes = useStyles();
  return (
    <>
      {props.user && (
        <div className="backBtn">
          <Grid item xs={2}>
            <Link to="/note">
              <img src={Back} className={classes.icon} />
            </Link>
          </Grid>
        </div>
      )}

      <div className={classes.root}>
        <Grid container spacing={3} className={classes.container}>
          <Grid item xs={11}>
            <Paper className={classes.paper}>
              <h1 className={classes.h1}>Week</h1>
              <MyChart type={"Week"} user={props.user} />
            </Paper>
          </Grid>
          <Grid item xs={11}>
            <Paper className={classes.paper}>
              <h1 className={classes.h1}>Month</h1>
              <MyChart type={"Month"} user={props.user} />
            </Paper>
          </Grid>
          <Grid item xs={11}>
            <Paper className={classes.paper}>
              <h1 className={classes.h1}>Year</h1>
              <MyChart type={"Year"} user={props.user} />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
export default Dashboard;
