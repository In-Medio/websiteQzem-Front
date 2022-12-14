import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';

class Navbar extends Component {

    // Navbar 
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <>
                <div id="navbar" className="navbar-area">
                    <div className="tuam-nav">
                        <div className="container">
                            <nav className="navbar navbar-expand-md navbar-dark">
                                <Link href="/">
                                    <a className="navbar-brand">
                                        <img src="/images/qzem.jpg" width="140" height="20" alt="logo" />
                                    </a>
                                </Link>

                                <button 
                                    onClick={this.toggleNavbar} 
                                    className={classTwo}
                                    type="button" 
                                    data-toggle="collapse" 
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                    aria-expanded="false" 
                                    aria-label="Toggle navigation"
                                >
                                    <span className="icon-bar top-bar"></span>
                                    <span className="icon-bar middle-bar"></span>
                                    <span className="icon-bar bottom-bar"></span>
                                </button>

                                <div className={classOne} id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link href="/">
                                                <a className="nav-link"> Home </a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/diensten" activeClassName="active">
                                                <a className="nav-link">Diensten</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/over-ons" activeClassName="active">
                                                <a className="nav-link">Over ons</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/prijzenpolitiek" activeClassName="active">
                                                <a className="nav-link">Prijzenpolitiek</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/nieuws" activeClassName="active">
                                                <a className="nav-link">Nieuws</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/contact" activeClassName="active">
                                                <a className="nav-link">Contact</a>
                                            </Link>
                                        </li>
                                    </ul>

                                    <div className="others-option">
                                        <div className="call-us">
                                            <div className="icon">
                                                <i className="flaticon-call"></i>
                                            </div>
                                            Bel ons:
                                            <span className="number"><a href="tel:+3289590068">+32 (0) 89 59 00 68</a></span>
                                            <span className="number"><a href="tel:+32474137776">+32 (0) 474 13 77 76</a></span>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;