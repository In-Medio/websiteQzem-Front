import React, { Component } from 'react';
import ContactForm from './ContactForm';

class ContactContent extends Component {
    render() {
        return (
            <>
                <section className="contact-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-12">
                                <div className="section-title">
                                    <h2>Contacteer Ons</h2>
                                    <p> Uw e-mailadres wordt niet gedeeld. Wij bezorgen u geen spam!</p>
                                </div>

                                <div className="contact-info">
                                    <ul className="contact-list">
                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-location"></i>
                                            </div>
                                            <span>Adres</span>
                                            Europalaan 2A Bus: 201, 3650 Dilsen-Stokkem, België
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="flaticon-email"></i>
                                            </div>
                                            <span>E-mail</span>
                                            info@qzem.be
                                        </li>

                                        <li>
                                            <div className="icon">
                                                <i className="fas fa-phone-volume"></i>
                                            </div>
                                            <span>Telefoon</span>
                                            +32 (0) 89 59 00 68 <br></br>
                                            +32 (0) 474 13 77 76
                                        </li>
                                    </ul>

                                    {/* <ul className="social">
                                        <li>
                                            <a href="https://www.facebook.com/Qzem.be/" target="_blank">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/qzem.be/about/">
                                                <i className="fab fa-linkedin-in"></i>
                                            </a>
                                        </li>
                                    </ul> */}
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="section-title">
                                    <span className="sub-title">Heeft u een vraag?</span>
                                    <h2>Stuur een berichtje</h2>
                                </div>

                                <ContactForm />
                            </div>
                        </div>
                    </div>
                    
                    <div className="bg-map">
                        <img src="/images/bg-map.png" alt="image" />
                    </div>
                </section>
            </>
        );
    }
}

export default ContactContent;