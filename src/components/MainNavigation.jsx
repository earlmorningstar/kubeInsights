import "./MainNavigation.css";
import { AiOutlineKubernetes } from "react-icons/ai";
import { NavLink } from "react-router-dom";

function MainNavigation({ title, children }) {
  return (
    <nav className="navbar">
      <div className="icon-title">
        <NavLink className="icon-link" to="/">
          <span>
            <AiOutlineKubernetes size={35} color="rgb(170, 153, 236)" />
          </span>
          <h2>{title}</h2>
        </NavLink>
      </div>

      <div className="navDiv">
        <span>{children}</span>
      </div>
    </nav>
  );
}

export default MainNavigation;
