import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from '../../styles/Menu.module.css'

function Menu() {
  return (
    <div className={classes.menuContainer}>
      <div className={classes.textContainer}>
        <NavLink
          exact={true}
          activeClassName={classes.activeMenuItem}
          className={classes.menuItem}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          exact={true}
          activeClassName={classes.activeMenuItem}
          className={classes.menuItem}
          to="/nrc"
        >
          NRC
        </NavLink>
        <NavLink
          activeClassName={classes.activeMenuItem}
          className={classes.menuItem}
          to="/stupas"
        >
          Stupas
        </NavLink>
        <NavLink
          activeClassName={classes.activeMenuItem}
          className={classes.menuItem}
          to="/dw-stupas"
        >
          DW Stupas
        </NavLink>
        {/* <Link to="/">
          <p className={classes.menuItem}>Home</p>
        </Link>
        <Link to="/nrc">
          <p className={classes.menuItem}>NRC</p>
        </Link>
        <Link to="/stupas">
          <p className={classes.menuItem}>Stupas</p>
        </Link>
        <Link to="/teachers">
          <p className={classes.menuItem}>Teachers</p>
        </Link> */}
      </div>
    </div>
  )
}

export default Menu
