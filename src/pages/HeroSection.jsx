import { MdNavigateNext } from "react-icons/md";
import { TbPlugConnectedX } from "react-icons/tb";
import { FaExpeditedssl } from "react-icons/fa6";
import { RiSettings2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";

import "./StyleSheet.css";

function HeroSection() {
  return (
    <>
      <div className="Hero-section">
        <h1>Edge Stack</h1>
        <p>
          Simplify and secure your Kubernetes application development with
          best-in-class, cloud-native API Gateway solution
        </p>
        <div className="Hero-btn">
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
        <div className="Hero-info-parent">
          <span className="Hero-info">
            <TbPlugConnectedX
              className="Hero-icon"
              size={50}
              color="rgb(170, 153, 236)"
            />
            <h3>Accelerate Scalability</h3>
            <p>
              Manage high traffic volumes and distribute incoming requests
              across multiple backend services, ensuring reliable application
              performance.
            </p>
          </span>
          <span className="Hero-info">
            <FaExpeditedssl
              className="Hero-icon"
              size={50}
              color="rgb(170, 153, 236)"
            />
            <h3>Enhanced Security</h3>
            <p>
              Protect your APIs from unauthorized access and malicious attacks
              with robust security features including WAF, rate limiting, IP
              whitelisting, and more.
            </p>
          </span>
          <span className="Hero-info">
            <RiSettings2Line
              className="Hero-icon"
              size={50}
              color="rgb(170, 153, 236)"
            />
            <h3>Improve Productivity & Developer Experience</h3>
            <p>
              Streamline productivity through self-service options to leverage
              your team’s existing K8s workflows for configuration, deployment,
              and management of APIs.
            </p>
          </span>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
