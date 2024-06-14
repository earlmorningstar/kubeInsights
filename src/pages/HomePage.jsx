import EdgeInAction from "./EdgeInAction";
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
    </>
  );
}

export default HomePage;
