import "./StyleSheet.css";

const ImagesComponent = ({ src, alt }) => {
  return (
    <div className="solutionBrief-image-container">
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImagesComponent;
