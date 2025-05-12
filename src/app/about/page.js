import React from "react";
import Head from "next/head";

// Meta tags object with dynamic values
const metaTags = {
  businessName: "[Your Friend's Business Name]",
  driverName: "[Your Friend’s Name]",
  websiteUrl: "https://www.[yourfriendswebsite].com",
  description:
    "Reliable taxi services and travel guidance in Dalhousie and Himachal Pradesh. Book a cab with [Your Friend's Business Name] for local sightseeing and HP adventures.",
  keywords:
    "taxi service Dalhousie, Himachal Pradesh taxi, travel guide HP, book taxi Dalhousie, HP travel destinations, affordable cab service",
  ogImage: "https://www.[yourfriendswebsite].com/assets/og-image.jpg",
  googleReviews:
    "https://www.google.com/search?q=[yourfriendsbusiness]+reviews",
  instagram: "https://instagram.com/[yourfriendsinsta]",
  youtube: "https://youtube.com/[yourfriendsyoutube]",
  phone: "+91-[yourfriendsphone]",
};

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>
          About Us - {metaTags.businessName} Taxi Service in Dalhousie & HP
        </title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <meta name="author" content={metaTags.businessName} />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="IN-HP" />
        <meta name="geo.placename" content="Dalhousie, Himachal Pradesh" />
        <meta
          property="og:title"
          content={`About Us - ${metaTags.businessName} Taxi Service`}
        />
        <meta
          property="og:description"
          content="Trusted taxi services in Dalhousie and HP with experienced drivers and scenic travel options."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${metaTags.websiteUrl}/about`} />
        <meta property="og:image" content={metaTags.ogImage} />
      </Head>
      <div>
        <h1>About Us</h1>
      </div>
    </>
  );
};

export default AboutPage;
