import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
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


class DienstenSlider extends Component {

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
                <section className="services-area ptb-100 bg-f8f8f8">
                    <div className="container">
                        <div className="section-title">
                            <h2>Diensten</h2>
                        </div>

                        {this.state.display ? <OwlCarousel
                            className="main-services-slides owl-carousel owl-theme"
                            {...options}
                        >   
                            <div className="services-box">
                                <img src="/images/gallery/gallery1.jpg" alt="image" />

                                <div className="services-content">
                                    <h3>
                                        <Link href="/diensten/#loonverwerking">
                                            <a>Loonverwerking</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>

                            <div className="services-box">
                                <img src="/images/gallery/gallery2.jpg" alt="image" />

                                <div className="services-content">
                                    <h3>
                                        <Link href="/diensten/#startenmetpersoneel">
                                            <a>Starten met Personeel</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>

                            <div className="services-box">
                                <img src="/images/gallery/gallery3.jpg" alt="image" />

                                <div className="services-content">
                                    <h3>
                                        <Link href="/diensten/#advies">
                                            <a>Advies</a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>
                        </OwlCarousel> : ''}
                    </div>
                </section>
            </>
        );
    }
}

export default DienstenSlider;