import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/Services/PageHeader';
import ServicesContent from '../components/Services/ServicesContent';
import Footer from '../components/Layout/Footer';

class Services extends Component {
    render() {
        return (
            <>
              <Navbar />

              <PageHeader />

              <ServicesContent />

              <Footer />
            </>
        );
    }
}

export default Services;