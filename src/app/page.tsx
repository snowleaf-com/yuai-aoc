import FullScreenSwiper from "@/components/organisms/FullScreenSwiper/FullScreenSwiper";
import Header from "../components/organisms/Header/Header";
import IndexTop from "@/components/organisms/IndexTop/IndexTop";
import ContentWrap from "@/components/molecules/ContentWrap";
import SectionBorderOrangeBottom from "@/components/atoms/SectionBorderOrangeBottom";
import SectionBorderPinkBottom from "@/components/atoms/SectionBorderPinkBottom";
import SectionBorderToContactForm from "@/components/atoms/SectionBorderToContactForm";
import Footer from "@/components/organisms/Footer/Footer";
import Strength from "@/components/organisms/TopPageSections/Strength/Strength";
import Trouble from "@/components/organisms/TopPageSections/Trouble/Trouble";
import Faq from "@/components/organisms/TopPageSections/Faq/Faq";
import Message from "@/components/organisms/TopPageSections/Message/Message";
import Contact from "@/components/organisms/TopPageSections/Contact/Contact";
import News from "@/components/organisms/TopPageSections/News/News";
import "animate.css";

export default function HomePage() {
  return (
    <>
      <FullScreenSwiper />
      <Header />
      <IndexTop />
      <ContentWrap>
        <News />
        <Strength />
        <SectionBorderOrangeBottom />
        <Trouble />
        <Faq />
        <SectionBorderPinkBottom />
        <Message />
        <SectionBorderToContactForm />
        <Contact />
      </ContentWrap>
      <Footer />
    </>
  );
}
