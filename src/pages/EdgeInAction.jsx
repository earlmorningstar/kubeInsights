import "./StyleSheet.css";
import { MdNavigateNext } from "react-icons/md";
import { NavLink } from "react-router-dom";

function EdgeInAction() {
  return (
    <div className="edgeInAction-parent">
      <h2>See Edge Stack in Action</h2>
      <p>
        See why Edge Stack is the chosen Kubernetes-native API Gateway solution
        for development and platform teams alike — and what it can do for your
        team.
      </p>
      <div  id="edgeInAction-btn" className="Hero-btn">
        <button>
        <NavLink to="/demoSchedule" className="demo-link">
       Schedule a Demo <MdNavigateNext size={17} />
      </NavLink>
        </button>
        <button id="transparent-hero-btn">
            <NavLink to="/pricingPlans" className="demo-link">
              See Pricing Plans <MdNavigateNext size={17} />
            </NavLink>
          </button>
      </div>
    </div>
  );
}

export default EdgeInAction;
