import { MdNavigateNext } from "react-icons/md";
import { SiPrometheus } from "react-icons/si";
import { SiNewrelic } from "react-icons/si";
import { SiDatadog } from "react-icons/si";
import { IoChevronForwardSharp } from "react-icons/io5";
import "./StyleSheet.css";

function Integrations() {
  return (
    <div className="intergration-parent">
      <h2>Edge Stack API Gateway Integrations</h2>
      <p>
        Seamless Integration with Your Tech Stack Explore the Complete List of
        Integrations for Edge Stack Kubernetes API Gateway
      </p>
      <div className="intergration-info-holder">
        <span>
          <SiPrometheus size={50} color="rgb(230, 82, 44)"/>
          <h2>Prometheus</h2>
          <p className="integration-note">
            A popular monitoring solution, Prometheus can scrape metrics from
            Edge Stack, allowing users to monitor the health and performance of
            their ingress and services, and set up alerts for any anomalies.
          </p>
          {/* <span className="intergration-links">
            See all Integrations <MdNavigateNext size={18} />
          </span> */}
        </span>
        <span>
          <SiNewrelic size={50} color="rgb(28, 231, 131)"/>
          <h2>New Relic</h2>
          <p className="integration-note">
            A popular monitoring solution, Prometheus can scrape metrics from
            Edge Stack, allowing users to monitor the health and performance of
            their ingress and services, and set up alerts for any anomalies.
          </p>
          {/* <span className="intergration-links">
            See all Integrations <MdNavigateNext size={18} />
          </span> */}
        </span>
        <span>
          <SiDatadog size={50} color="rgb(98, 45, 164)"/>
          <h2>DataDog</h2>
          <p className="integration-note">
            A popular monitoring solution, Prometheus can scrape metrics from
            Edge Stack, allowing users to monitor the health and performance of
            their ingress and services, and set up alerts for any anomalies.
          </p>
          {/* <span className="intergration-links">
            See all Integrations <MdNavigateNext size={18} />
          </span> */}
        </span>
        <span>
          <IoChevronForwardSharp size={50} color="rgb(100, 166, 55)"/>
          <h2>Splunk</h2>
          <p className="integration-note">
            A popular monitoring solution, Prometheus can scrape metrics from
            Edge Stack, allowing users to monitor the health and performance of
            their ingress and services, and set up alerts for any anomalies.
          </p>
          <span className="intergration-links">
            See all Integrations <MdNavigateNext size={18} />
          </span>
        </span>
      </div>
    </div>
  );
}

export default Integrations;
