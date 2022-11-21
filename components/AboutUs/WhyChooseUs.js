import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <>
                <section className="benefits-section ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Uw Voordelen</span>
                            <h3>Waarom Kiezen Voor Ons?</h3>
                            <p>Wij zorgen samen met u voor een zorgeloze en correcte opvolging van uw personeelsdossiers.
                                Vanuit onze jarenlange ervaring op het gebied van loonverwerking maken wij het verschil.
                            </p>
                        </div>

                        <div className="row align-items-center">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-benefits-box">
                                    <div className="icon">
                                        <i className="flaticon-layers"></i>
                                    </div>
                                    <h3>Correct</h3>
                                </div>

                                <div className="single-benefits-box">
                                    <div className="icon">
                                        <i className="flaticon-wifi"></i>
                                    </div>
                                    <h3>Langdurige samenwerking</h3>
                                </div>

                                <div className="single-benefits-box">
                                    <div className="icon">
                                        <i className="flaticon-taxi"></i>
                                    </div>
                                    <h3>Snel</h3>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <div className="benefits-image">
                                    <img src="/images/benefits-img.jpg" alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6">
                                <div className="single-benefits-box">
                                    <div className="icon">
                                        <i className="flaticon-security"></i>
                                    </div>
                                    <h3>Persoonlijk contact</h3>
                                </div>

                                <div className="single-benefits-box">
                                    <div className="icon">
                                        <i className="flaticon-location"></i>
                                    </div>
                                    <h3>U staat centraal</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default WhyChooseUs;