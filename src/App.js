import ContentSection from "./components/ContentSection/ContentSection";
import Header from "./components/Header/Header";
import Slider from "./components/Slider/Slider";
import { theBandDesc } from "./assets/data/data";
import MemberList from "./components/MemberList/MemberList";
import TicketList from "./components/TicketList/TicketList";
import Places from "./components/Places/Places";
import Contact from "./components/Contact/Contact";
import Map from "./components/Map/Map";
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='App'>
      <Header />
      <Slider />
      <ContentSection
        bgcolor={"#fff"}
        title={"The Band"}
        subTitle={"We love music"}
        isDesc={true}
        desc={theBandDesc}
      >
        <MemberList/>
      </ContentSection>
      <ContentSection
        bgcolor={"#000"}
        title={"Tour dates"}
        subTitle={"Remember to book your tickets!"}
      >
        <TicketList/>
        <Places/>
      </ContentSection>
      <ContentSection
        bgcolor={"#fff"}
        title={"Contact"}
        subTitle={"Fan? Drop a note!"}
      >
        <Contact/>
      </ContentSection>
      <Map/>
      <Footer/>
    </div>
  );
}

export default App;
