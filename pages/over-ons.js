import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageHeader from '../components/AboutUs/PageHeader';
import WhyChooseUs from '../components/AboutUs/WhyChooseUs';
import TeamSlider from '../components/AboutUs/TeamSlider'
import Footer from '../components/Layout/Footer';

class AboutUs extends Component {
    render() {
        return (
            <>
              <Navbar />

              <PageHeader />

              <WhyChooseUs />

              <TeamSlider />

              <Footer />
            </>
        );
    }
}

export default AboutUs;