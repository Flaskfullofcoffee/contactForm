import React from 'react';
import Header from "./header"
import Footer from "./footer"
import layoutStyles from './layout.module.scss'

const Layout = (props) => {

  return (
    <div className={layoutStyles.container}>
      <Header />
        <div >
          {props.children}
        </div>
      <Footer />
    </div>
  )
}

export default Layout
