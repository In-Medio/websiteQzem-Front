import React, { Component } from 'react';

class Prices extends Component {
    render() {
        return (
            <>
                <section className="pricing-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <span className="sub-title">Prijzen</span>
                            <h2>Onze Prijzenpolitiek</h2>
                            <p>
                                We werken met een transparante prijzenpolitiek. 
                                Onze prijzen zijn all-in voor het volledige standaard loonverwerkings-pakket. 
                                Kortom geen bijkomende kosten bij uw maandelijkse afrekening.
                            </p>
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
                                        <li><i className="flaticon-check-mark"></i>Loonverwerking</li>
                                        <li><i className="flaticon-check-mark"></i>Arbeidsovereenkomsten</li>
                                        <li><i className="flaticon-check-mark"></i>Loonbrievent</li>
                                        <li><i className="flaticon-check-mark"></i>Sociale balans</li>
                                        <li><i className="flaticon-check-mark"></i>Fiscaal Attest</li>
                                        <li><i className="flaticon-check-mark"></i>Bestelling maaltijd- /ecocheques </li>
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
                                        <li><i className="flaticon-check-mark"></i>Aanvraag RSZ-nummer</li>
                                        <li><i className="flaticon-check-mark"></i>Begeleiding zodat alle wettelijke registraties en aansluitingen in orde zijn</li>
                                        <li><i className="flaticon-check-mark"></i>Optimalisatie van RSZ-kortingen en mogelijke andere subsidies</li>
                                        <li><i className="flaticon-check-mark"></i>Aansluiting bij Qzem payroll processing</li>
                                        <li><i className="flaticon-check-mark"></i>Arbeidsovereenkomst met uw medewerker</li>
                                        <li><i className="flaticon-check-mark"></i>Dimona-aangifte </li>
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
                
                <section className="floor-plans-area ptb-100">
                    <div className="container">
                        <div className="section-title">
                            <h2>Staffels</h2>
                            <p>Bij Qzem werken we met staffels, hoe meer personeelsleden in dienst, hoe lager de prijs per loonverwerking. 
                            2-jaarlijks evalueren we de evolutie van uw personeelsbestand en passen de staffels als dusdanig aan.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="tab">
                                    <div className="tab_content">
                                        <div id="tab1" className="tabs_item">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6 col-md-12 content">
                                                    <div className="tabs_item_content">
                                                        <h3>Loonverwerking</h3>
                                                        
                                                        <ul className="features-list">
                                                            <li>Aantal loonverwerkingen per maand <span>Prijs per loonverwerking</span></li>
                                                            <li>1-5 <span>€28</span></li>
                                                            <li>6-10 <span>€24</span></li>
                                                            <li>11-15 <span>€21</span></li>
                                                            <li>16-30 <span>€19</span></li>
                                                            <li>31-50 <span>€15</span></li>
                                                            <li>50+ <span>Contacteer ons voor een aangepast prijsvoorstel</span></li>
                                                        </ul>
                                                        <br></br>
                                                        <p>
                                                            Heeft u meer werknemers in dienst of bent u geprikkeld door ons voorstel, neem dan vrijblijvend contact met Carine Purnot via mail op carine.purnot@qzem.be of GSM +32 (0) 474 13 77 76.
                                                        </p>

                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-12 image">
                                                    <div className="tabs_item_image">
                                                        <img className="payroll-processing-image" src="/images/gallery/gallery9.jpg" alt="image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default Prices;