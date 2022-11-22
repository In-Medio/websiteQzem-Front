import React, { Component } from 'react';

class ServicesContent extends Component {
    render() {
        return (
            <>
                <section className="services-details-area ptb-100">
                    <div className="container">
                        <div className="services-details-overview">
                            <div className="services-details-desc" id="loonverwerking">
                                <h3>Loonverwerking</h3>
                                <p>
                                    Er wordt wel eens beweerd dat loonverwerking een standaard bulkproduct is. Niets meer dan een druk op de knop en klaar?
                                    Als je echter weet dat ons land een van de meest complexe wetgevingen rond loonverwerking ter wereld heeft en daarnaast de wetswijzigingen elkaar aan de lopende band opvolgen.
                                    Dan weet je dat loonverwerking geen commodity is!
                                </p>

                                <p>
                                    Naast de maandelijkse loonverwerking en de wettelijke aangiftes zorgen wij ook voor
                                    de nodige documenten bij in- en uitdiensttreding,  C-documenten, indexaties, maaltijd- /ecocheques,…
                                </p>
                            </div>

                            <div className="services-details-image">
                                <img src="/images/services/single-service1.jpg" alt="image" />
                            </div>
                        </div>

                        <div className="services-details-overview">
                            <div className="services-details-image">
                                <img src="/images/services/single-service2.jpg" alt="image" />
                            </div>

                            <div className="services-details-desc" id="startenmetpersoneel">
                                <h3>Starten met personeel</h3>
                                <p>
                                    Bij Qzem heb je hier de geschikte partner gevonden.
                                    Wij zorgen voor een tijdige en correcte verloning van uw personeel.
                                    Wetswijzigingen, indexaties van lonen, verplichte premies,… Wij volgen dit allemaal voor jouw op.
                                    We informeren jouw naar de specifieke wijzigingen die op jouw bedrijf van toepassing zijn.
                                </p>

                                <p>
                                    Daarnaast verzorgen we ook de verder wettelijke verplichtingen zoals de dimona-aangiftes, DMFA, bedrijfsvoorheffing, aangifte specifieke sector-fondsen,…
                                    Personeel aanwerven?
                                    We helpen je bij het aanwerven van personeel, zorgen voor de arbeidsovereenkomst en  de dimona-aangifte naar de RSZ.
                                    En ontslaan?
                                    Ook bij ontslag staan we je bij met raad en daad zodat je op een correcte manier afscheid kan nemen.
                                </p>
                            </div>
                        </div>

                        <div className="services-details-overview">
                            <div className="services-details-desc" id="advies">
                                <h3>Advies</h3>
                                <p>
                                    Niets is zo vervelend als geconfronteerd worden met medewerkers die verkeerd zijn uitbetaald.
                                    In tijden dat de ‘War for Talent’ meer dan ooit een piek bereikt, is een correcte en tijdige loonverwerking de basisregel om geschikt personeel aan te trekken en te behouden.
                                </p>

                                <p>
                                    Recht op subsidies? <br></br>
                                    Onze software heeft een directe link naar de VDAB  zodat we on-line de loopbaanportfolio’s van jullie medewerkers kunnen opvragen.
                                </p>

                                <p>
                                    On-site support nodig? <br></br>
                                    Ook daar bieden we oplossingen aan om je personeelsdienst te ondersteunen.
                                </p>

                                <p>
                                    Prijs? <br></br>
                                    Bij ons geen bijkomende kosten, alle service is vervat in de prijs per loonbrief.
                                </p>

                                <p>
                                    Persoonlijke aanpak? <br></br>
                                    Wij staan voor een persoonlijke aanpak, je contacteert ons via mail, telefoon, whatsapp,…
                                    Daarnaast vinden wij een face-to-face contact heel belangrijk; 1 x per jaar plannen we een bezoek in om de samenwerking te bespreken.
                                </p>
                            </div>

                            <div className="services-details-image">
                                <img  className="services-image" src="/images/services/services3.jpg" alt="image" />
                            </div>
                        </div>
                        
                    </div>
                </section>
            </>
        );
    }
}

export default ServicesContent;