import { lazy } from "react";
import About from "../../components/About";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const HomepageArts = lazy(() => import("../../components/HomepageArts"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <HomepageArts />
      <About />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
