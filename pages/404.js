import React, { Component } from 'react';
import Link from 'next/link';

class Error extends Component {
    render() {
        return (
            <>
                <div className="error-area">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="container">
                                <div className="error-content">
                                    <img src="/images/404.png" alt="error" />
                                    
                                    <h3>Pagina kan niet gevonden worden!</h3>
                                    <p>De pagina die u zoekt, is mogelijk verwijderd als de naam is gewijzigd of is tijdelijk niet beschikbaar.</p>

                                    <Link href="/">
                                        <a className="default-btn">
                                            Ga naar Home <span></span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Error;