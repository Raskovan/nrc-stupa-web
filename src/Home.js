import React from "react";
import "./App.css";
import BackgroundVideo from "./Components/BackgroundVideo";
import Header from "./Components/Common/Header";
import Intro from "./Components/Intro";
// import NewsletterSubscribe from './Components/NewsletterSubscribe'
import AboutNRC from "./Components/AboutNRC";
import AboutStupas from "./Components/AboutStupas";
// import DWStupas from "./Components/AboutDWStupas";
import Teachers from "./Components/Teachers";
import Footer from "./Components/Common/Footer";
import { getEntries } from "./contentfull";

const introTextsMap = {
  intro: 0,
  aboutNrc: 1,
  aboutStupas: 2,
  dwStupas: 3
};

function Home() {
  const [introData, setIntroData] = React.useState();
  const [teachersData, setTeachersData] = React.useState();
  React.useEffect(() => {
    getEntries("intro").then(res => {
      const fields = res.map(obj => obj.fields);
      setIntroData(fields.sort((a, b) => a.order - b.order));
    });
    getEntries("teachers").then(res => setTeachersData(res.sort((a, b) => a.fields.order - b.fields.order).map(obj => obj.fields)));
  }, []);

  return (
    <>
      <Header />
      <BackgroundVideo />
      <Intro data={(introData && introData[introTextsMap.intro]) || {}} />
      {/* <NewsletterSubscribe /> */}
      <AboutNRC data={(introData && introData[introTextsMap.aboutNrc]) || {}} />
      <AboutStupas data={(introData && introData[introTextsMap.aboutStupas]) || {}} />
      {/* <DWStupas data={(introData && introData[introTextsMap.dwStupas]) || {}} /> */}
      <Teachers data={teachersData || []} />
      <Footer />
    </>
  );
}

export default Home;
