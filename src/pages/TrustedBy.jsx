import "./StyleSheet.css";

const images = [
    { src: '/images/jpMorgan-web.jpg', alt: 'image 1' },
    { src: '/images/walmart-web.jpg', alt: 'image 2' },
    { src: '/images/monday-web.jpg', alt: 'image 3' },
    { src: '/images/alibaba-web.jpg', alt: 'image 4' },
    { src: '/images/upwork-web.jpg', alt: 'image 5' },
  ];


function TrustedBy() {
    
  return (
    <>
      <div className="trustedby-info">
        <h2>TRUSTED BY DEVELOPERS AT</h2>
        <div className="trusted-by-image-container">
        {images.map((image, index) => (
          <img key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
      </div>
    </>
  );
}

export default TrustedBy;
