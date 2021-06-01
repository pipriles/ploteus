import React from 'react';
import { Link } from 'gatsby';

const contentWrapper = {
  margin: '0 auto',
  maxWidth: 1024,
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
}

const Layout = ({ pageTitle, children }) => {
  return (
    <main style={contentWrapper}>
      <title>{ pageTitle }</title>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      { children }
    </main>
  );
}

export default Layout;
