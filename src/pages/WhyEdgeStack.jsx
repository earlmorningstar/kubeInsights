import { BsCloudCheckFill } from "react-icons/bs";

import "./StyleSheet.css";

function WhyEdgeStack() {
  return (
    <>
      <div className="why-edge-stack-parent">
        <h2>Why Edge Stack API Gateway</h2>
        <div className="why-edge-stack-info-holder">
            <span className="why-edge-stack-info">
                <BsCloudCheckFill size={40} color="rgb(94, 88, 246)"/>
                <h2>Flexible Kubernetes Management</h2>
                <p>Flexible Kubernetes management with Ingress Controller.</p>
            </span>
            <span className="why-edge-stack-info">
                <BsCloudCheckFill size={40} color="rgb(94, 88, 246)"/>
                <h2>Simplified Traffic Management</h2>
                <p>Simplified traffic management to ensure high availability, resilience and uptime.</p>
            </span>
            <span className="why-edge-stack-info">
                <BsCloudCheckFill size={40} color="rgb(94, 88, 246)"/>
                <h2>Decentralized</h2>
                <p>Decentralized, declarative workflows.</p>
            </span>
            <span className="why-edge-stack-info">
                <BsCloudCheckFill size={40} color="rgb(94, 88, 246)"/>
                <h2>Policy Management</h2>
                <p>Policy management at the edge.</p>
            </span>
            <span className="why-edge-stack-info">
                <BsCloudCheckFill size={40} color="rgb(94, 88, 246)"/>
                <h2>Self-Service Control</h2>
                <p>Self-service control and flexibility over edge proxy needs, eliminating manual tasks.</p>
            </span>
            <span className="why-edge-stack-info">
                <BsCloudCheckFill size={40} color="rgb(94, 88, 246)"/>
                <h2>World-Class Support</h2>
                <p>Professional world-class support on Enterprise plans.</p>
            </span>
            <span className="why-edge-stack-info">
                <BsCloudCheckFill size={40} color="rgb(94, 88, 246)"/>
                <h2>Service Mesh</h2>
                <p>Service Mesh Integrations: multi-cluster support, rate limiting, automatic HTTPS, custom request filters.</p>
            </span>
        </div>
      </div>
    </>
  );
}

export default WhyEdgeStack;
