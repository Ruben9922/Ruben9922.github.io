import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

export default function Header() {
  const useStyles = makeStyles(theme => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon/>
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Ruben Dougall
        </Typography>
        <Button color="inherit" href="/projects">Projects</Button>
        <Button color="inherit" href="/tutorials">Tutorials</Button>
        <Button color="inherit" href="/about">About</Button>
      </Toolbar>
    </AppBar>
  );
};