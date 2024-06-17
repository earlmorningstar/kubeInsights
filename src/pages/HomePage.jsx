import EdgeInAction from "./EdgeInAction";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import HowEdgeWorks from "./HowEdgeWorks";
import Integrations from "./Integrations";
import NoHiddenFees from "./NoHiddenFees";
import ReadyToLearn from "./ReadyToLearn";
import SecurityAndAuthentication from "./SecurityAndAuthentication";
import TrustedBy from "./TrustedBy";
import WhyEdgeStack from "./WhyEdgeStack";

function HomePage() {
   
  return (
    <>
      <HeroSection />
      <TrustedBy />
      <WhyEdgeStack />
      <NoHiddenFees />
      <SecurityAndAuthentication />
      <HowEdgeWorks />
      <ReadyToLearn />
      <Integrations />
      <EdgeInAction />
      <Footer />
    </>
  );
}

export default HomePage;
