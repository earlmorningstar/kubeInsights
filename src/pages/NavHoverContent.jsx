import { useState } from "react";

import { GoChevronDown } from "react-icons/go";
import "./StyleSheet.css";

function NavHoverContent() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <>
      <div id="navlist-items-id" className="navlist-items">
        <div
          onMouseEnter={() => handleMouseEnter("Products")}
          onMouseLeave={handleMouseLeave}
          className="hv"
        >
          <span>Products</span>
          <GoChevronDown size={20} className={`icon ${hoveredItem === "Products" ? "rotate-icon" : ""}`}/>
          {hoveredItem === "Products" && (
            <div
            id="products-hover-content"
              className="hover-content"
              onMouseEnter={() => setHoveredItem("Products")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="hoverContent-infos">
                <span className="hovercontent-list">
                  <h3>PRODUCTS</h3>
                  <div class="horizontal-line"></div>
                  <div className="hovercontent-list-item">
                    <p>Edge Stack</p>
                    <p>Telepresence</p>
                    <p>Blackbird Beta</p>
                  </div>
                </span>
                <span className="hovercontent-list">
                  <h3>BUILT ON ENVOY PROXY</h3>
                  <div class="horizontal-line"></div>
                  <div className="hovercontent-list-item">
                    <p>Envoy Proxy</p>
                  </div>
                </span>
              </div>
            </div>
          )}
        </div>

        <div
          onMouseEnter={() => handleMouseEnter("Solutions")}
          onMouseLeave={handleMouseLeave}
          className="hv"
        >
          <span>Solutions</span>
          <GoChevronDown size={20} className={`icon ${hoveredItem === "Solutions" ? "rotate-icon" : ""}`}/>
          {hoveredItem === "Solutions" && (
            <div
              className="hover-content"
              onMouseEnter={() => setHoveredItem("Solutions")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="hoverContent-infos">
                <span className="hovercontent-list">
                  <h3>BY USE CASE</h3>
                  <div class="horizontal-line"></div>
                  <div className="hovercontent-list-item">
                    <p>Maximize API Gateway Security</p>
                    <p>Creating a Productive Kubernetes Local Dev Environment</p>
                    <p>Kubernetes Ingress Controller</p>
                  </div>
                </span>
                <span className="hovercontent-list">
                  <h3>BY INDUSTRY</h3>
                  <div class="horizontal-line"></div>
                  <div className="hovercontent-list-item">
                    <p>Financial Services</p>
                    <p>General/Other</p>
                  </div>
                </span>
                <span className="hovercontent-list">
                  <h3>BY ROLE</h3>
                  <div class="horizontal-line"></div>
                  <div className="hovercontent-list-item">
                    <p>Tech & Engineering Leaders</p>
                    <p>DevOps</p>
                    <p>Developers</p>
                  </div>
                </span>
              </div>
            </div>
          )}
        </div>

        <div
          onMouseEnter={() => handleMouseEnter("Resources")}
          onMouseLeave={handleMouseLeave}
          className="hv"
        >
          <span>Resources</span>
          <GoChevronDown size={20} className={`icon ${hoveredItem === "Resources" ? "rotate-icon" : ""}`}/>
          {hoveredItem === "Resources" && (
            <div
              className="hover-content"
              onMouseEnter={() => setHoveredItem("Resources")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="hoverContent-infos">
                <span className="hovercontent-list">
                  <h3>LEARN</h3>
                  <div class="horizontal-line"></div>
                  <div className="hovercontent-list-item">
                    <p>Blog</p>
                    <p>Kubernetes Glossary</p>
                    <p>Guides, eBooks & White Papers</p>
                  </div>
                </span>
                <span className="hovercontent-list">
                  <h3>LISTEN</h3>
                  <div class="horizontal-line"></div>
                  <div className="hovercontent-list-item">
                    <p>Podcasts</p>
                    <p>Events & Webinars</p>
                  </div>
                </span>
                <span className="hovercontent-list">
                  <h3>ACT</h3>
                  <div class="horizontal-line"></div>
                  <div className="hovercontent-list-item">
                    <p>Case Studies</p>
                    <p>API Security Course</p>
                    <p>Advocate Program</p>
                  </div>
                </span>
                <span className="hovercontent-list">
                  <h3>COMPANY</h3>
                  <div class="horizontal-line"></div>
                  <div className="hovercontent-list-item">
                    <p>About Us</p>
                    <p>Careers</p>
                  </div>
                </span>
              </div>
            </div>
          )}
        </div>

        <div
          onMouseEnter={() => handleMouseEnter("Docs")}
          onMouseLeave={handleMouseLeave}
          className="hv"
        >
          <span>Docs</span>
          <GoChevronDown size={20} className={`icon ${hoveredItem === "Docs" ? "rotate-icon" : ""}`}/>
          {hoveredItem === "Docs" && (
            <div
            id="docs-hover-content"
              className="hover-content"
              onMouseEnter={() => setHoveredItem("Docs")}
              onMouseLeave={handleMouseLeave}
            >
              <div className="hoverContent-infos">
                <span className="hovercontent-list">
                  <h3>DOCS</h3>
                  <div class="horizontal-line"></div>
                  <div className="hovercontent-list-item">
                    <p>Documentation</p>
                    <p>Edge Stack Quick Start</p>
                    <p>Telepresence Quick Start</p>
                  </div>
                </span>
                
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default NavHoverContent;
