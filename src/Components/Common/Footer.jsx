import React from 'react'
import classes from '../../styles/Footer.module.css'

function Footer(props) {
  const { marginTop = false } = props
  const currentYear = () => {
    const today = new Date()
    return today.getFullYear()
  }

  return (
    <div
      className={classes.footer_container}
      style={{ marginTop: marginTop ? '166px' : '0' }}
    >
      <p className={classes.caption}>
        NORTHEAST RETREAT CENTER <br />
        1026 East Hill Road Middleburgh, NY 12122
      </p>
      <p className={classes.caption}>
        DWB-NYC is part of <a href="https://diamondway.org/">DWB-USA</a>, a
        volunteer 501(c)3 non-profit organization
      </p>
      <p className={classes.caption}>
        © {currentYear()} Diamond Way Buddhist Centers USA
      </p>
    </div>
  )
}

export default Footer
