import "./StyleSheet.css";
import { MdNavigateNext } from "react-icons/md";
import { NavLink } from "react-router-dom";

function SecurityAndAuthentication() {
  return (
    <>
      <div className="sec-auth-parent">
        <div className="sec-auth-info">
          <h2>Security and authentication at the edge</h2>
          <p>
            Edge Stack, the Kubernetes-native API Gateway, makes securing
            microservices easy with a comprehensive set of advanced
            functionality, including automatic TLS, comprehensive authentication
            options (OAuth2, OIDC, JWT, Single Sign On, and more), rate
            limiting, IP allow/deny listing, WAF integration, and fine-grained
            access control.
          </p>
          <button> <NavLink to="/demoSchedule" className="demo-link">
       Schedule a Demo <MdNavigateNext size={20} />
      </NavLink></button>
        </div>
        <div className="security-image-container">
          <img src="/images/newweb.jpg" alt="web img" />
        </div>
      </div>
    </>
  );
}

export default SecurityAndAuthentication;
