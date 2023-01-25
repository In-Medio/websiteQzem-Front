import React from "react";
import Navbar from "../components/Layout/Navbar";
import PageHeader from "../components/PrivacyPolicy/PageHeader";
import Policies from '../components/PrivacyPolicy/Policies';
import Footer from "../components/Layout/Footer";

function PrivacyPolicy() {
    return (
        <>
            <Navbar />

            <PageHeader />

            <Policies />

            <Footer />
        </>
    );
}

export default PrivacyPolicy;