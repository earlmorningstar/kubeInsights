import "./StyleSheet.css";
import "../components/MainNavigation.css";
import { AiOutlineKubernetes } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

function Footer() {
  return (
    <div className="footer-parent">
      <div className="sub-holder">
        <div className="footer-title-info">
          <span className="icon-title">
            <span>
              <AiOutlineKubernetes size={35} color="rgb(170, 153, 236)" />
            </span>
            <h2>KubeInsights</h2>
          </span>
          <p>Simplify Your Kubernetes Development Experience</p>
        </div>

        <div className="sub-parent">
          <p>Subscribe to Our Newsletter</p>

          <div className="sub-btn">
            <input type="text" placeholder="Email Address here" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      <div className="stay-connected-section">
        <div>
          <span className="sc-icon">
            <a
              href="https://x.com/earlmorningsta1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX
                size={25}
                color="#ffffff"
                style={{ transform: "rotateX(360deg)" }}
              />
            </a>
          </span>
          <span className="sc-icon">
            <a
              href="https://instagram.com/earlmorningstar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SlSocialInstagram
                size={25}
                color="#ffffff"
                style={{ transform: "rotateX(360deg)" }}
              />
            </a>
          </span>
          <span className="sc-icon">
            <a
              href="https://github.com/earlmorningstar"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub
                size={25}
                color="#ffffff"
                style={{ transform: "rotateX(360deg)" }}
              />
            </a>
          </span>
          <span className="sc-icon">
            <a
              href="https://linkedin.com/in/joel-onyeabor"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn
                size={25}
                color="#ffffff"
                style={{ transform: "rotateX(360deg)" }}
              />
            </a>
          </span>
          <span className="sc-icon">
            <a
              href="mailto:onyeaborjoel@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TfiEmail
                size={25}
                color="#ffffff"
                style={{ transform: "rotateX(360deg)" }}
              />
            </a>
          </span>
        </div>
      </div>

      <div className="horizontal-line"></div>

      <div className="footerLinks-parent">
        <span className="footerLinks">
          <h3>PRODUCTS</h3>
          <p>Telepresence</p>
          <p>Edge Stack</p>
          <p>Pricing</p>
        </span>
        <span className="footerLinks">
          <h3>OPEN SOURCE</h3>
          <p>Emissary Ingress</p>
          <p>Telepresence OSS</p>
          <p>Envoy Proxy</p>
        </span>
        <span className="footerLinks">
          <h3>RESOURCES</h3>
          <p>Blog</p>
          <p>Case Studies</p>
          <p>Content Library</p>
          <p>FAQs</p>
          <p>Kubernetes Learning Center</p>
          <p>Kubernetes Glossary</p>
          <p>Documentation</p>
        </span>
        <span className="footerLinks">
          <h3>COMPANY</h3>
          <p>About Us</p>
          <p>Careers</p>
          <p>Contact Us</p>
          <p>Newsroom</p>
          <p>Support</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </span>
        <span className="footerLinks">
          <h3>ENGAGE</h3>
          <p>Events</p>
          <p>Community Advocates</p>
          <p>Kubernetes Expert Interviews</p>
        </span>
      </div>

      <div className="horizontal-line"></div>

      <div className="reservedRights">
        ©2025 Joelinton, Inc. (Earl Morningstar). All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
