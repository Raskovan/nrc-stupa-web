import React from 'react'
import logo from '../../assets/dwb-logo-trnsp.png'
import classes from '../../styles/Header.module.css'

function Header(props) {
  const [headerScrolled, setHeaderScrolled] = React.useState(false)
  const { backgroundWhite } = props

  const listenScrollEvent = e => {
    if (window.scrollY > window.innerHeight) {
      setHeaderScrolled(true)
    } else {
      setHeaderScrolled(false)
    }
  }

  React.useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
    return () => {
      window.removeEventListener('scroll', listenScrollEvent)
    }
  }, [])

  return (
    <div
      className={
        headerScrolled || backgroundWhite
          ? classes.header_container_white
          : classes.header_container
      }
    >
      <header className={classes.content_container}>
        <div className={classes.leftBorder} />
        <div className={classes.rightBorder} />
        <div
          style={{
            marginLeft: 'auto',
            background: `url(${logo}) no-repeat left top / 235px 47px`,
            width: '235px',
            position: 'relative',
            top: '20px'
          }}
        />
      </header>
    </div>
  )
}

export default Header
