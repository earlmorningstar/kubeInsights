import "./StyleSheet.css";
import { MdNavigateNext } from "react-icons/md";

function ReadyToLearn() {
  return (
    <>
      <div className="readyToLearn-parent">
        <h2>Ready to learn more?</h2>
        <div>
          <div className="readyToLearn-links">
            <h2>Edge Stack Solution Brief</h2>
            <span>
              Download Solution Brief <MdNavigateNext size={18}/>
            </span>
          </div>
          <div id="blue-border" className="readyToLearn-links">
            <h2>Edge Stack API Gateway Pricing</h2>
            <span>
              Edge Stack Pricing <MdNavigateNext size={18}/>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReadyToLearn;
