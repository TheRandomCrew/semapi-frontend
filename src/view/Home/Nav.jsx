import React from 'react';

import Logo from '../Assets/logo.png';

import NAV from './styles/Nav.module.css';

const Nav = () => (
    <nav className={NAV.nav}>
      <ul className={NAV.navbar}>
        <li><a href='/'><img src={Logo} /></a></li>
        <li><a href='#prices'><span>Pricing</span></a></li>
        <li><a href='#features'><span>Features</span></a></li>
        <li><a href='#'><span>Documentation</span></a></li>
        <li><a href='#faq'><span>FAQ</span></a></li>
      </ul>
      <ul className={NAV.navbar}>
        <li><Link to="/entra">Login</Link></li>
        <li><Link to="/inscribete"><button className={`${SEO.pillButton} ${SEO.ripple} userButton`}>Free Signup</button></Link></li>
      </ul>
    </nav>
  );

export default Nav;