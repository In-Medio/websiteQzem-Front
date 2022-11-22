import React, { Component } from 'react';

class PriceTable extends Component {
    render() {
        return (
            <>
                <section className="pricing-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Prijzen</span>
                            <h2>Onze Prijzenpolitiek</h2>
                            <p>We werken met een transparante prijzenpolitiek. Onze prijzen zijn all-in voor het volledige standaard loonverwerkings-pakket. Kortom geen bijkomende kosten bij uw maandelijkse afrekening.</p>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-pricing-box">
                                    <div className="pricing-header bg1">
                                        <h3>Loonverwerking</h3>
                                    </div>

                                    <div className="price">
                                        <sub></sub>
                                    </div>

                                    <ul className="pricing-features-list">
                                        <li><i className="flaticon-check-mark"></i> Loonverwerking</li>
                                        <li><i className="flaticon-check-mark"></i> Arbeidsovereenkomsten</li>
                                        <li><i className="flaticon-check-mark"></i> Loonbrievent</li>
                                        <li><i className="flaticon-check-mark"></i> Sociale balans</li>
                                        <li><i className="flaticon-check-mark"></i> Fiscaal Attest</li>
                                        <li><i className="flaticon-check-mark"></i> Bestelling maaltijd- /ecocheques </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-pricing-box">
                                    <div className="pricing-header bg2">
                                        <h3>Starten met Personeel</h3>
                                    </div>

                                    <div className="price">
                                        <sub>€</sub>260
                                    </div>

                                    <ul className="pricing-features-list">
                                        <li><i className="flaticon-check-mark"></i> Aanvraag RSZ-nummer</li>
                                        <li><i className="flaticon-check-mark"></i> Begeleiding zodat alle wettelijke registraties en aansluitingen  in orde zijn</li>
                                        <li><i className="flaticon-check-mark"></i> Optimalisatie van RSZ-kortingen en mogelijke andere subsidies</li>
                                        <li><i className="flaticon-check-mark"></i> Aansluiting bij Qzem payroll processing</li>
                                        <li><i className="flaticon-check-mark"></i> Arbeidsovereenkomst met uw medewerker</li>
                                        <li><i className="flaticon-check-mark"></i> Dimona-aangifte </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="single-pricing-box">
                                    <div className="pricing-header bg3">
                                        <h3>Advies</h3>
                                    </div>

                                    <div className="price">
                                        <sub></sub>
                                    </div>

                                    <ul className="pricing-features-list">
                                        <li><i className="flaticon-check-mark"></i> Graag helpen wij u verder met eventuele vragen </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default PriceTable;