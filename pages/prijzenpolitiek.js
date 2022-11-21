import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/PricePolicy/PageHeader';
import Prices from '../components/PricePolicy/Prices';
import Footer from '../components/Layout/Footer';

class PricePolicy extends Component {
    render() {
        return (
            <>
              <Navbar />

              <PageHeader />

              <Prices />

              <Footer />
            </>
        );
    }
}

export default PricePolicy;