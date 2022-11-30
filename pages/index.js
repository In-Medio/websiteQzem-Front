import React from "react";
import Navbar from "../components/Layout/Navbar";
import Banner from "../components/Home/Banner";
import ServicesSlider from "../components/Home/ServicesSlider";
import AboutUs from "../components/Home/AboutUs";
import PriceTable from "../components/Home/PriceTable";
// import ReviewSlider from "../components/Home/ReviewSlider";
import Contact from "../components/Contact/ContactContent";
import Footer from "../components/Layout/Footer";
// import axios from "axios";
// import env from "../config/environment";

function Index() {
  return (
    <>
      <Navbar />

      <Banner />

      <ServicesSlider />

      <AboutUs />

      <PriceTable />

      {/* <ReviewSlider reviews={reviews} /> */}

      <Contact />

      <Footer />
    </>
  );
}

// export async function getServerSideProps() {
//   const {STRAPI_BASE_URL} = env;
//   const {data} = await axios.get(`${STRAPI_BASE_URL}/api/reviews`);

//   return {
//       props: {
//           reviews: data.data,
//       }
//   }
// }

export default Index;