import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../../styles/Menu.module.css";

function Menu() {
  return (
    <div className={classes.menuContainer}>
      <NavLink exact={true} activeClassName={classes.activeMenuItem} className={classes.menuItem} to={`/`}>
        Home
      </NavLink>
      <NavLink exact={true} activeClassName={classes.activeMenuItem} className={classes.menuItem} to={`/nrc`}>
        NRC
      </NavLink>
      <NavLink activeClassName={classes.activeMenuItem} className={classes.menuItem} to={`/stupas`}>
        Stupas
      </NavLink>
      <NavLink activeClassName={classes.activeMenuItem} className={classes.menuItem} to={`/dwbc`}>
        Diamond Way Buddhism
      </NavLink>
    </div>
  );
}

export default Menu;
