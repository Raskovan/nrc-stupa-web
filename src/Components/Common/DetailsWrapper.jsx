import React from 'react'
import Header from './Header'
import Footer from './Footer'
import classes from '../../styles/DetailsWrapper.module.css'
import Menu from './Menu'

function DetailsWrapper({ children }) {
  return (
    <div>
      <Header backgroundWhite={true} />
      <Menu />
      <div className={classes.mainContainer}>{children}</div>
      <Footer marginTop={true} />
    </div>
  )
}

export default DetailsWrapper
