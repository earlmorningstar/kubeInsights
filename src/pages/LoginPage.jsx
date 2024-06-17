import { NavLink } from "react-router-dom";
import { AiOutlineKubernetes } from "react-icons/ai";
import { RiCodeSSlashFill } from "react-icons/ri";
import { GiHammerNails } from "react-icons/gi";
import { FaRegFileLines } from "react-icons/fa6";
import { FaDocker } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./StyleSheet.css";


function LoginPage() {
  return (
    <>
      <NavLink className="back-btn-link" to=".." relative="path">
        <div id="about-btn">
          <button className="btn-style">back</button>
        </div>
      </NavLink>

      <div className="login-section">

        <div className="loginPage-firstSection">
        <div className="loginPage-icon-title">
            <span><AiOutlineKubernetes size={35} color="rgb(170, 153, 236)"/></span>
            <h2>KubeInsights</h2>
        </div>

            <h2>Supercharge Your Kubernetes Developer Experience!</h2>

            <div className="loginPage-note">
                <h5><RiCodeSSlashFill size={35} color="#ac190c"/> Code, ship, and run your Kubernetes services, with less YAML.</h5>
                <h5><GiHammerNails size={40} color="rgb(6, 96, 75)"/> Build faster using the tools you love. Ambassador Cloud is pre-integrated with top CNCF open source projects.</h5>
                <h5><FaRegFileLines size={35}/> View and manage all your services running across environments, based on real-time status from the Kubernetes API.</h5>
            </div>

            <p>Get started free with Ambassador Cloud. No credit card required.</p>
        </div>


        <div className="loginPage-secondSection">

            <div className="secondSection-whiteLayout">
                <p>WELCOME TO AMBASSADOR CLOUD</p>
                <h2>Sign In</h2>
                <div className="regLink">
                    <span><FaDocker />DOCKER</span>
                    <span><FaGithub />GITHUB</span>
                    <span><FaGitlab />GITLAB</span>
                    <span><FcGoogle />GOOGLE</span>
                </div>


            </div>

            <div>
                <span>by using Ambassador, you agree to our</span>
                <span>Terms of Service and Privacy Policy</span>
            </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
