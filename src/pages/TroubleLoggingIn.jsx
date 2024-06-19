import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineKubernetes } from "react-icons/ai";
import { RiCodeSSlashFill } from "react-icons/ri";
import { GiHammerNails } from "react-icons/gi";
import { FaRegFileLines } from "react-icons/fa6";
import { LuAsterisk } from "react-icons/lu";
import "./StyleSheet.css";

function TroubleLoggingIn() {
  const [email, setEmail] = useState("");
  const [issue, setIssue] = useState("");
  const [file, setFile] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [issueError, setIssueError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleIssueChange = (e) => {
    setIssue(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const validateEmail = () => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const validateIssue = () => {
    if (issue.trim() === "") {
      setIssueError("Please complete this required field.");
    } else if (issue.trim().length < 25) {
      setIssueError("The issue description must be at least 25 characters long.");
    } else {
      setIssueError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validateIssue();

    if (emailError || issueError) {
      return;
    }

    console.log("Email:", email);
    console.log("Issue:", issue);
    console.log("Selected file:", file);
    navigate("/login");
  };

  return (
    <>
      <div className="login-section">
        <div className="loginPage-firstSection">
          <div className="loginPage-icon-title">
            <span>
              <AiOutlineKubernetes size={35} color="rgb(170, 153, 236)" />
            </span>
            <h2>KubeInsights</h2>
          </div>

          <h2>Supercharge Your Kubernetes Developer Experience!</h2>

          <div className="loginPage-note">
            <h5>
              <RiCodeSSlashFill size={35} color="#ac190c" /> Code, ship, and run
              your Kubernetes services, with less YAML.
            </h5>
            <h5>
              <GiHammerNails size={40} color="rgb(6, 96, 75)" /> Build faster
              using the tools you love. Ambassador Cloud is pre-integrated with
              top CNCF open source projects.
            </h5>
            <h5>
              <FaRegFileLines size={35} color="#795cec" /> View and manage all
              your services running across environments, based on real-time
              status from the Kubernetes API.
            </h5>
          </div>

          <p>
            Get started free with Ambassador Cloud. No credit card required.
          </p>
        </div>

        <div className="loginPage-secondSection">
          <div className="secondSection-whiteLayout">
            <h1>Trouble Logging In?</h1>
            <form onSubmit={handleSubmit}>
              <div className="trouble-input-parent">
                <label htmlFor="email">
                  Email
                  <LuAsterisk color="red" size={10} />
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={validateEmail}
                  required
                />
                {emailError && (
                  <span className="trouble-vali-error">{emailError}</span>
                )}
              </div>
              <div className="trouble-input-parent">
                <label htmlFor="issue">
                  Tell us about your issue
                  <LuAsterisk color="red" size={10} />
                </label>
                <textarea
                  id="issue"
                  value={issue}
                  onChange={handleIssueChange}
                  onBlur={validateIssue}
                  required
                />
                {issueError && (
                  <span className="trouble-vali-error">{issueError}</span>
                )}
              </div>
              <div className="fileSelect">
                <label htmlFor="file">Submit a screenshot.</label>
                <input type="file" id="file" onChange={handleFileChange} />
              </div>
              <span className="info-submit-parent">
                <NavLink className="info-submit-cancel" to="/login">
                  Cancel
                </NavLink>

                <button type="submit">Submit</button>
              </span>
            </form>
          </div>

          <div className="termsOfService">
            <span>by using Ambassador, you agree to our</span>
            <span>
              <b>Terms of Service</b> and <b>Privacy Policy</b>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default TroubleLoggingIn;