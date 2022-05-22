import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ArtDetails = lazy(() => import("../../components/ArtDetails"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ArtDetails />
    </Container>
  );
};

export default Home;
