import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    center: true,
    margin: 30,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        1200: {
            items: 3,
        }
    }
}

class OurTeamSlider extends Component {

    _isMounted = false;
    state = {
        display:false
    }

    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }

    componentWillUnmount() {
        this._isMounted = false; 
    }

    render() {
        return (
            <>
                <section className="team-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Ons Team</span>
                            <h2>Ontmoet Onze Experts</h2>
                            <p>Wij bij Qzem staan altijd voor u klaar met de beste service.</p>
                        </div>

                        {this.state.display ? <OwlCarousel 
                            className="team-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="single-team-box">
                                <div className="image">
                                    <img src="/images/team/Carine_Purnot_profile_2.jpg" alt="image" />
                                </div>

                                <div className="content">
                                    <h3>Carine Purnot</h3>
                                    <span>CEO - Payroll Manager</span>
                                </div>
                            </div>

                            <div className="single-team-box">
                                <div className="image">
                                    <img src="/images/team/Jo_Kortleven_profile_2.jpg" alt="image" />
                                </div>

                                <div className="content">
                                    <h3>Jo Kortleven</h3>
                                    <span>CEO - IT Manager</span>
                                </div>
                            </div>

                            <div className="single-team-box">
                                <div className="image">
                                    <img src="/images/team/Elke_Brouns_profile_2.jpg" alt="image" />
                                </div>

                                <div className="content">
                                    <h3>Elke Brouns</h3>
                                    <span>Payroll Consultant</span>
                                </div>
                            </div>

                            <div className="single-team-box">
                                <div className="image">
                                    <img src="/images/team/Seren_Uyusmaz_profile.jpg" alt="image" />
                                </div>

                                <div className="content">
                                    <h3>Seren Uyusmaz</h3>
                                    <span>Payroll Consultant</span>
                                </div>
                            </div>

                        </OwlCarousel> : ''}
                    </div>
                </section>
            </>
        );
    }
}

export default OurTeamSlider;