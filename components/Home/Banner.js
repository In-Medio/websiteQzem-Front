import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1000,
    animateOut: "slideOutDown",
    animateIn: "slideInDown",
    items: 1,
    navText: [
        "<i class='flaticon-left-chevron'></i>",
        "<i class='flaticon-right-chevron'></i>"
    ]
}

class Banner extends Component {

    _isMounted = false;
    state = {
        display:false,
        isOpen: false,
    }

    componentDidMount(){ 
        this._isMounted = true;
        this.setState({ display: true }) 
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <>
                <div className="home-section">
                    {this.state.display ? <OwlCarousel 
                        className="home-slides owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="main-banner item-bg3">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="main-banner-content">
                                            <h1>Payroll Processing met oog voor Kwaliteit</h1>
                                            <div className="btn-box">
                                                <Link href="/contact">
                                                    <a className="default-btn">Contacteer Ons <span></span></a>
                                                </Link>

                                                <Link href="/diensten/#startenmetpersoneel">
                                                    <a className="default-btn">Starten met Personeel <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="main-banner item-bg1">
                            <div className="d-table">
                                <div className="d-table-cell">
                                    <div className="container">
                                        <div className="main-banner-content">
                                            <h1>Persoonlijk, Correct, Gedreven, Zorgeloos en Langdurig</h1>
                                            <div className="btn-box">
                                                <Link href="/contact">
                                                    <a className="default-btn">Contacteer Ons <span></span></a>
                                                </Link>

                                                <Link href="/diensten/#startenmetpersoneel">
                                                    <a className="default-btn">Starten met Personeel <span></span></a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
 
                    <div className="banner-footer">
                        <div className="container-fluid p-0">
                            <div className="row m-0 align-items-center">
                                <div className="col-lg-5 col-md-12 p-0">
                                </div>

                                <div className="col-lg-7 col-md-12 p-0">
                                    <div className="banner-contact-info">
                                        <ul>
                                            <li>
                                                <i className="flaticon-location"></i>
                                                <span>Adres</span>
                                                Europalaan 2A Bus: 201, 3650 Dilsen-Stokkem
                                            </li>

                                            <li>
                                                <i className="flaticon-email"></i>
                                                <span>E-mailadres</span>
                                                <a href="info@qzem.be">info@qzem.be</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Banner;