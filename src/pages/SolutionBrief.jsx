import { NavLink } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import ImagesComponent from "./ImagesComponent";
import "./StyleSheet.css";

const images = [
  { src: "/images/introWeb.jpg", alt: "intro image 1" },
  { src: "/images/microServiceWeb.jpg", alt: "intro image 2" },
];

function SolutionBrief() {
  return (
    <>
      <div className="solutionBrief-parent">
        <div className="solutionBrief-holder">
          <p>Edge Stack Solution Brief</p>
          <h1>Coding at the Edge: Supercharge API Performance</h1>
        </div>

        <div className="solutionBrief-links-parent">
          <div className="solutionLink-flex">
            <div className="solutionBrief-links-holder">
              <h2>Streamline workload with self-service</h2>
              <p>
                Reduce toil by introducing a self-service edge proxy, speeding
                up development iterations by eliminating manual tasks.
              </p>
            </div>

            <span>
              <NavLink to="/demoSchedule" className="ready-demo-link">
                See a live demo <MdNavigateNext size={18} />
              </NavLink>
            </span>
          </div>

          <div className="solutionLink-flex">
            <div className="solutionBrief-links-holder">
              <h2>Improve full lifecycle developer experience</h2>
              <p>
                Enable faster developer onboarding, decentralized day-to-day
                configuration, speedy and safe routing updates as well as
                seamless integration with Kubernetes and popular DevOps tools.
              </p>
            </div>

            <span>
              <NavLink to="/" className="ready-demo-link">
                Learn more about Edge Stack <MdNavigateNext size={18} />
              </NavLink>
            </span>
          </div>
        </div>
      </div>

      <div className="introduction-div">
        <h2>Introduction to Edge Stack API Gateway</h2>
        <p>
          Edge Stack is a Kubernetes-native API gateway that delivers
          scalability, security, and simplicity for some of the world's largest
          Kubernetes installations.
        </p>
        <h3>
          Simplify to amplify: Solve Kubernetes development challenges
          throughout the microservices lifecycle
        </h3>
        <p>
          Cloud-native applications are now the gold standard in enterprise IT,
          driven by demands for scalability, security, and efficiency. According
          to SlashData, 5.6 million developers — which equates to 31% of all
          backend developers — have embraced Kubernetes globally. As the uptake
          of cloud technologies, including Docker and Kubernetes, soars
          alongside the growth in enterprise developers, a challenge emerges.
          Development teams keen on swift, secure deployments in a microservices
          landscape often confront bottlenecks. The hurdles? Organizations and
          tools that are yet to evolve and align with the revamped life cycle.
        </p>
        {/* <div className="solutionBrief-image-container">
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
          ))}
        </div> */}
        <ImagesComponent src={images[0].src} alt={images[0].alt} />
        <p>
          Adopting cloud-native development best practices is step one in
          shipping features and getting applications to market faster.
          Kubernetes as the de facto container orchestration platform for
          building cloud-native applications helps deliver speed but also poses
          new challenges, such as navigating microservice architectures and the
          complexities and dependencies they create.
        </p>
        <h3>Edge Stack: Going big on microservices management</h3>
        <p>
          Edge Stack API Gateway is a comprehensive, self-service edge stack.
          Built on Envoy Proxy and Kubernetes to manage API traffic coming into
          your Kubernetes cluster, it provides state-of-the-art functionality
          for observability, availability, security, traffic management,
          developer onboarding and edge policy management – the critical
          elements of safe, rapid and frequent application deployment.
        </p>
        <p>
          With Edge Stack API Gateway, development teams can deploy and iterate
          rapidly, unhindered by centralized cluster operations or platform team
          bottlenecks. It empowers application teams to optimize their
          microservices architecture while retaining the familiar Kubernetes
          workflow. Furthermore, Edge Stack's intuitive design ensures that
          development teams can easily manage their routing configurations. By
          mastering a single Kubernetes resource – the mapping – they can
          effortlessly channel traffic to their applications.
        </p>

        <h2>Integrating Edge Stack</h2>
        <h3>Enhancing every phase of the microservices lifecycle</h3>
        <p>
          Edge Stack API Gateway plays an important role throughout the entire
          microservices lifecycle and can make a difference to your
          organization's design, development, testing, deployment and
          observability activities.
        </p>
        <ImagesComponent src={images[1].src} alt={images[1].alt} />
        <div className="edgeStackLearning-parent">
            <h2>Interested in learning more about Edge Stack?</h2>
            <div className="Hero-btn" id="pricing-btn-id">
              <button>
                <NavLink className="loginLink" to="/demoSchedule">
                Book a Demo <MdNavigateNext size={17} />
              </NavLink>
              </button>
            </div>
        </div>
      </div>
    </>
  );
}

export default SolutionBrief;
