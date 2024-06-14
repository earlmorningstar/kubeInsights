import "./MainNavigation.css";
import { AiOutlineKubernetes } from "react-icons/ai";

function MainNavigation({ title, children }) {
  return (
    <nav className="navbar">
        <div className="icon-title">
            <span><AiOutlineKubernetes size={35} color="rgb(170, 153, 236)"/></span>
            <h2>{title}</h2>
        </div>
      
      <div className="navDiv">
        <span>{children}</span>
      </div>
    </nav>
  );
}

export default MainNavigation;
