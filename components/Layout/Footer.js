import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {
        return (
            <>
                <footer className="footer-area">
                    <div className="container">
                        <div className="subscribe-area">
                            <div className="column align-items-center">
                                <div className="col-lg-12 col-md-12">
                                    <div className="subscribe-content">
                                        <h2>Schrijf je in voor onze nieuwsbrief!</h2>
                                    </div>
                                </div>

                                <div className="row-lg-50 row-md-12">
                                    <div className="subscribe-form">
                                        <form className="newsletter-form">
                                            <input type="name" className="input-name-newsletter" placeholder="Naam" name="name" />
                                            <input type="email" className="input-email-newsletter" placeholder="Vul je e-mailadres in" name="email" />
                                            <button type="submit">
                                                Schrijf je nu in <i className="flaticon-right-chevron"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="logo">
                                        <Link href="/">
                                            <a>
                                                <img src="/images/qzem_without_text.jpg" alt="image" width={75}/>
                                            </a>
                                        </Link>
                                    </div>

                                    {/* <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com/Qzem.be/" target="_blank">
                                                <i className="flaticon-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/qzem.be/about/" target="_blank">
                                                <i className="flaticon-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Snelle Links</h3>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/">
                                                <a>Home</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/diensten">
                                                <a>Diensten</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/nieuws">
                                                <a>Nieuws</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/over-ons">
                                                <a>Over ons</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <h3>Contact</h3>

                                    <ul className="footer-contact-info">
                                        <li><span>Adres:</span> Europalaan 2A Bus: 201, 3650 Dilsen-Stokkem</li>
                                        <li><span>E-mail:</span> <a href="info@qzem.be"> info@qzem.be</a></li>
                                        <li>
                                            <span>Telefoon:</span> 
                                            <a className="first-number-tab" href="tel:+32 89 59 00 68">+32 (0) 89 59 00 68</a> <br></br>
                                            <a className="second-number-tab" href="tel:+32 474 13 77 76">+32 (0) 474 13 77 76</a>
                                        </li>
                                        <li><a href="https://www.google.com/maps/place/Europalaan+2,+3650+Dilsen-Stokkem" target="_blank">Bekijk onze locatie op Google Maps</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="copyright-area">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <p><i className="far fa-copyright"></i> 2022 Qzem. Alle rechten voorbehouden.</p>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6">
                                    <ul>
                                        <li>
                                            <Link href="#">
                                                <a>Privacybeleid</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a>Algemene voorwaarden</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        );
    }
}

export default Footer;