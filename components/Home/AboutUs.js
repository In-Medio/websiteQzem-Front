import React, { Component } from 'react';
import Link from 'next/link';

class About extends Component {
    render() {
        return (
            <>
                <section className="about-area ptb-100">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="about-title">
                                    <span>Over Ons</span>
                                    <h2>Wij verlonen uw medewerkers transparant en correct. Met Qzem nemen we samen de payroll in handen.</h2>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="about-text">
                                    <p>
                                        Onze software berekent in een handomdraai de loonkost. Verder staat uw gedreven ervaren vaste dossierbeheerder u met raad en daad bij.
                                        Naast de loonadministratie van de algemeen gekende bedienden zijn we ondertussen actief in vele sectoren waaronder kleinhandel, transport, bouw, metaal, stoffering en houtbewerking, … 
                                    </p>

                                    <Link href="/over-ons">
                                        <a className="read-more-btn">
                                            Meer Over Ons <i className="flaticon-next"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default About;