import { Fragment } from "react";
import Container from "../components/Container";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import siteInfo from "../utils/SiteInfo";
import Accordion from "../components/Accordion";
import Subscription from "../components/Subscription";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="divider mt-0 h-2 bg-[rgb(35,35,35)] bg-opacity-70 after:h-1 before:h-1"></div>
      {siteInfo.map((info, id) => (
        <Fragment key={id}>
          <Container
            title={info.title}
            description={info.description}
            image={info.image}
            imagePosition={info.imagePosition}
          />
          <div className="divider mt-0 h-2 bg-[rgb(35,35,35)] bg-opacity-70 after:h-1 before:h-1"></div>
        </Fragment>
      ))}
      <Accordion />
      <Subscription />
      <div className="divider mt-0 h-2 bg-[rgb(35,35,35)] bg-opacity-70 after:h-1 before:h-1"></div>
      <Footer />
    </>
  );
};

export default Home;
