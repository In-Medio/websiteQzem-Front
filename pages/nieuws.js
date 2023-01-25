import React from "react";
import Navbar from "../components/Layout/Navbar";
import PageHeader from "../components/News/PageHeader";
import NewsCardContent from "../components/News/NewsCardContent";
import Footer from "../components/Layout/Footer";
import axios from "axios";
import env from "../config/environment";

function News({newsArticles}) {
    return (
        <>
            <Navbar />

            <PageHeader />

            <NewsCardContent newsArticles={newsArticles} />

            <Footer />
        </>
    );
}

export async function getServerSideProps() {
    const {STRAPI_BASE_URL} = env;
    const {data} = await axios.get(`${STRAPI_BASE_URL}/api/news-articles?sort=releaseDate:desc&populate=image`);

    return {
        props: {
            newsArticles: data.data,
        }
    }
}

export default News;
