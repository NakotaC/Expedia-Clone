import React from "react";
import MainInputBox from "../Components/HomePageComponents/MainInputBox";
import Banner1 from "../Components/HomePageComponents/Banner1";
import ImageQRCodeBanner from "../Components/HomePageComponents/ImageQRCodeBanner";
import HelpBoxes from "../Components/HomePageComponents/HelpBoxes";
import QatarVisitBanner from "../Components/HomePageComponents/QatarVisitBanner";
import ManSeeBanner from "../Components/HomePageComponents/ManSeeBanner";

const HomePage = () => {
  return (
    <div>
      <MainInputBox />
      <Banner1 />
      <ImageQRCodeBanner />
      <HelpBoxes />
      <QatarVisitBanner />
      <ManSeeBanner />
    </div>
  );
};

export default HomePage;
