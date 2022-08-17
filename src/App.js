import React from 'react';
import Home from './containers/templates/Home';
import Navbar from './containers/organisms/Navbar';
import Footer from './containers/organisms/Footer';
import 'swiper/css/bundle';
import './styles.scss';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    );
  }
}
