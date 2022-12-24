import React from 'react';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const Layout = (props) => {
  return (
    <>
      <div>
        <Header />
        {props.children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;