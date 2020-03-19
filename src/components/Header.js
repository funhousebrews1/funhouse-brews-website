import React from 'react'

import logo from '../assets/images/logo.png';

const Header = (props) => (
    <header id="header" className="alt" >
        <span className="logo"><img src={logo} alt="" /></span>
        <h2>Portland, Oregon</h2>
    </header>
)

export default Header
