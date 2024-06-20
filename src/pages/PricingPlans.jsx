import { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import "./StyleSheet.css";
import { GiCheckMark } from "react-icons/gi";
import { MdNavigateNext } from "react-icons/md";

function PricingPlans() {
  const { plan } = useParams();
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState(plan || "Edge Stack");

  useEffect(() => {
    if (plan) {
      setSelectedPlan(plan);
    }
  }, [plan]);

  const handlePlanChange = (planName) => {
    setSelectedPlan(planName);
    navigate(`/pricingPlans/${planName}`);
  };

  const edgeStackDetails = (
    <>
      <div className="pricing-headers">
        <h2>Edge Stack</h2>
        <span>
          Edge Stack is an Envoy-based API gateway, built for modern,
          high-availability applications that run on K8s. Each plan tier is
          based on one simple metric Requests per Month (RPM), and allows
          complete flexibility to install any number of Edge Stack instances
          across your clusters and environments.
        </span>
      </div>

      <div className="pricing-detail-parent">
        <div className="each-pricing-details">
          <h3>Lite</h3>
          <p>For small K8 deployments with limited API traffic.</p>
          <h2>Free</h2>
          <button className="each-price-non-func">Annually</button>
          <div className="each-price-info">
            <div className="each-price-info-child">
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">
                  Up to 10,000 Requests per Month (RPM)
                </p>
              </span>
            </div>
            <div className="Hero-btn" id="pricing-btn-id">
              <button>
                <NavLink className="loginLink" to="/login">
                Get Started <MdNavigateNext size={17} />
              </NavLink>
              </button>
            </div>
          </div>
        </div>

        <div className="each-pricing-details">
          <h3>Growth</h3>
          <p>For new users of Edge Stack with growing API traffic.</p>
          <h2>$1K/mo Starting</h2>
          <button className="each-price-non-func">Annually</button>
          <div className="each-price-info">
            <div className="each-price-info-child">
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">5M RPM, add'l available</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Unlimited clusters & instances</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Product Support</p>
              </span>
            </div>
            <div className="Hero-btn" id="pricing-btn-id">
              <button>
              <NavLink className="loginLink" to="/edgeStackGrowth">
                Contact Us <MdNavigateNext size={17} />
              </NavLink>
              </button>
            </div>
          </div>
        </div>

        <div className="each-pricing-details">
          <h3>Enterprise</h3>
          <p>For organizations with K8 deployments and high API traffic.</p>
          <h2>Custom</h2>
          <button className="each-price-non-func">Annually</button>
          <div className="each-price-info">
            <div className="each-price-info-child">
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Volume discounts</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Unlimited clusters & instances</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">
                  Priority Support add-on available
                </p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Product Support</p>
              </span>
            </div>
            <div className="Hero-btn" id="pricing-btn-id">
              <button>
              <NavLink className="loginLink" to="/edgeStackGrowth">
                Contact Us <MdNavigateNext size={17} />
              </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  const telepresenceDetails = (
    <>
      <div className="pricing-headers">
        <h2>Telepresence</h2>
        <span>
          Put your laptop in the cluster: In seconds, set up a local dev
          environment in a remote Kubernetes cluster using your IDE and
          workflows.
        </span>
      </div>

      <div className="pricing-detail-parent">
        <div className="each-pricing-details">
          <h3>Lite</h3>
          <p>For individual developers getting started.</p>
          <h2>Free</h2>
          <button className="each-price-non-func">Annually</button>
          <div className="each-price-info">
            <div className="each-price-info-child">
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">10 Connects</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Global Intercepts</p>
              </span>
            </div>
            <div className="Hero-btn" id="pricing-btn-id">
              <button>
                <NavLink className="loginLink" to="/login">
                Get Started <MdNavigateNext size={17} />
              </NavLink>
              </button>
            </div>
          </div>
        </div>

        <div className="each-pricing-details">
          <h3>Developer</h3>
          <p>Ideal for individual developers working with a team.</p>
          <h2>$20/mo</h2>
          <button className="each-price-non-func">Annually</button>
          <div className="each-price-info">
            <div className="each-price-info-child">
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">60 Connects</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Global Intercepts</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Personal Intercepts</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Intercept Specs</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Deploy preview</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">JetBrains plugins</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Product Support</p>
              </span>
            </div>
            <div className="Hero-btn" id="pricing-btn-id">
              <button>
              <NavLink className="loginLink" to="/login">
                Get Started <MdNavigateNext size={17} />
              </NavLink>
              </button>
            </div>
          </div>
        </div>

        <div className="each-pricing-details">
          <h3>Enterprise</h3>
          <p>Ideal for dev teams needing advanced security and support.</p>
          <h2>Custom</h2>
          <button className="each-price-non-func">Annually</button>
          <div className="each-price-info">
            <div className="each-price-info-child">
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Unlimited Connect</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Global Intercepts</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Personal Intercepts</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Intercept Specs</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Deploy preview</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">JetBrains plugins</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Preview URLs</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Saved Intercepts</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Air-gapped clusters</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">SAML</p>
              </span>
              <span>
                <GiCheckMark color="#6852f8" size={16} />{" "}
                <p className="info-price-p">Product Support</p>
              </span>
            </div>
            <div className="Hero-btn" id="pricing-btn-id">
              <button>
              <NavLink className="loginLink" to="/telepresenceEnterprisePlan">
                Contact Us <MdNavigateNext size={17} />
              </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="pricingPlan-parent">
      <div className="pricing-headers">
        <h1>Pricing</h1>
        <p>
          Best-in-class, Kubernetes-native solutions for developer teams of all
          sizes: Edge Stack API gateway & Telepresence local development
          environment.
        </p>
      </div>

      <span className="pricingBtn">
        <button
          className={selectedPlan === "Edge Stack" ? "active" : ""}
          onClick={() => handlePlanChange("Edge Stack")}
        >
          Edge Stack
        </button>
        <button
          className={selectedPlan === "Telepresence" ? "active" : ""}
          onClick={() => handlePlanChange("Telepresence")}
        >
          Telepresence
        </button>
      </span>

      {selectedPlan === "Edge Stack" ? edgeStackDetails : telepresenceDetails}
    </div>
  );
}

export default PricingPlans;

