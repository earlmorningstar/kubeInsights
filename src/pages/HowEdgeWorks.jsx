import "./StyleSheet.css";
import { MdNavigateNext } from "react-icons/md";

function HowEdgeWorks() {
  return (
    <>
      <div className="edge-works-parent">
        <h2>How Edge Stack works</h2>
        <p>
          Edge Stack Kubernetes-native API Gateway plays an important role
          throughout the entire microservices lifecycle and can make a
          difference to your organization's design, development, testing,
          deployment and observability activities.
        </p>
      </div>
      <div className="sec-auth-parent">
        <div className="security-image-container">
          <img src="/images/trafficweb.jpg" alt="web img" />
        </div>
        <div className="sec-auth-info">
          <h2>Kubernetes ingress controller</h2>
          <p>
            Routing user requests into your Kubernetes cluster requires a modern
            traffic management solution. Edge Stack API Gateway provides a
            robust Kubernetes Ingress Controller that supports a broad range of
            protocols, including TCP, HTTP/1/2/3 and gRPC, supports TLS and mTLS
            termination, and provides reliability and resilience features to
            protect your backend services.
          </p>
          <ul>
            <li>Designed and built with Kubernetes best practices</li>
            <li>Cross-Origin Resource Sharing (CORS)</li>
            <li>TLS and mTLS</li>
            <li>Automatic HTTPS</li>
            <li>Robust configuration options</li>
            <li>Enabled for developer self-service</li>
          </ul>
        </div>
      </div>
      <div className="sec-auth-parent">
        <div className="sec-auth-info">
          <h2>Simplified traffic management</h2>
          <p>
            Edge Stack includes support for automatic retries, timeouts, circuit
            breakers, and rate limiting to maximize application availability. In
            addition to keeping your application available, Edge Stack supports
            progressive releases with fine-grained traffic management controls.
          </p>
          <ul>
            <li>Advanced load balancing</li>
            <li>Timeouts, retries, and circuit breaking</li>
            <li>Progressive delivery and continuous delivery support</li>
          </ul>
          <button>
            Schedule a Demo <MdNavigateNext size={20} />
          </button>
        </div>
        <div className="security-image-container">
          <img src="/images/ambCloudweb.jpg" alt="web img" />
        </div>
      </div>
      <div className="sec-auth-parent">
        <div className="security-image-container">
          <img src="/images/workflowWeb.jpg" alt="web img" />
        </div>
        <div className="sec-auth-info">
          <h2>Decentralized, declarative workflow</h2>
          <p>
            Edge Stack empowers development teams to safely manage their
            ingress, using the same workflow you already use with K8s.
          </p>
          <ul>
            <li>Configure using K8s Custom Resource Definitions</li>
            <li>Operator-focused CRDs (host, listener, & security configuration)</li>
            <li>Developer-focused CRDs (mappings & rate limiting configuration)</li>
            <li>Protocol support, including TCP, HTTP/1, HTTP/2, HTTP/3, and gRPC & gRPC-Web</li>
            <li>Zero-downtime reconfiguration</li>
            <li>Integrate with existing GitOps / Kubernetes workflows</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HowEdgeWorks;
