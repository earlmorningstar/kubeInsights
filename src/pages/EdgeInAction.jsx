import "./StyleSheet.css";
import { MdNavigateNext } from "react-icons/md";

function EdgeInAction() {
  return (
    <div className="edgeInAction-parent">
      <h2>See Edge Stack in Action</h2>
      <p>
        See why Edge Stack is the chosen Kubernetes-native API Gateway solution
        for development and platform teams alike — and what it can do for your
        team.
      </p>
      <div  id="edgeInAction-btn" className="Hero-btn">
        <button>
          Schedule a Demo <MdNavigateNext size={17} />
        </button>
        <button id="transparent-hero-btn">
          See Pricing Plans <MdNavigateNext size={17} />
        </button>
      </div>
    </div>
  );
}

export default EdgeInAction;
