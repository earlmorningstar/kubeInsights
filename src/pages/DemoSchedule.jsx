import "./StyleSheet.css";
import { GiCheckMark } from "react-icons/gi";
import { LuAsterisk } from "react-icons/lu";
import { useState } from "react";

const images = [
  { src: "/images/jpMorgan-web.jpg", alt: "demo image 1" },
  { src: "/images/monday-web.jpg", alt: "demo image 2" },
  { src: "/images/upwork-web.jpg", alt: "demo image 3" },
];

function DemoSchedule() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    telepresence: false,
    edgeStackApiGateway: false,
    other: false,
    additionalInfo: "",
    howDidYouHear: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="demoSchedule-parent">
      <div className="demoSchedule-firstSection">
        <h1>Let's Start a Conversation</h1>
        <p>One of our experts will reach out to answer your questions soon.</p>
        <div className="contactFor">
          <p>Contact us today to:</p>
          <span>
            <GiCheckMark color="#6852f8" size={20} /> See a live demo
          </span>
          <span>
            <GiCheckMark color="#6852f8" size={20} /> Discuss Enterprise Pricing
          </span>
          <span>
            <GiCheckMark color="#6852f8" size={20} /> Enhance API Security
            Efforts
          </span>
          <span>
            <GiCheckMark color="#6852f8" size={20} /> Maximize Developer
            Experience
          </span>
          <span>
            <GiCheckMark color="#6852f8" size={20} /> Simplify Your K8s Strategy
          </span>
        </div>
        <div className="demoSchedule-image-container">
          {images.map((image, index) => (
            <img key={index} src={image.src} alt={image.alt} />
          ))}
        </div>
      </div>

      <div className="demoSchedule-secondSection">
        <h1>Ready to talk to an expert?</h1>
        <span>You can also schedule a meeting.</span>
        <form className="submitForm" onSubmit={handleSubmit}>
          <div className="demoSchedule-classForm">
            <div className="class-form-group">
              <label htmlFor="firstName">First Name<LuAsterisk color="red" size={10}/></label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="class-form-group">
              <label htmlFor="lastName">Last Name<LuAsterisk color="red" size={10}/></label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="demoSchedule-classForm">
            <div className="class-form-group">
              <label htmlFor="email">Work Email<LuAsterisk color="red" size={10}/></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="class-form-group">
              <label htmlFor="phoneNumber">Phone Number<LuAsterisk color="red" size={10}/></label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group companyflex">
            <label htmlFor="companyName">Company Name<LuAsterisk color="red" size={10}/></label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Which Ambassador products are you interested in? Please select from the options below:<LuAsterisk color="red" size={10}/></label>
            <div>
              <input
                type="checkbox"
                id="telepresence"
                name="telepresence"
                checked={formData.telepresence}
                onChange={handleChange}
              />
              <label htmlFor="telepresence">Telepresence</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="edgeStackApiGateway"
                name="edgeStackApiGateway"
                checked={formData.edgeStackApiGateway}
                onChange={handleChange}
              />
              <label htmlFor="edgeStackApiGateway">
                Edge Stack API Gateway
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="other"
                name="other"
                checked={formData.other}
                onChange={handleChange}
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="form-group companyflex">
            <label htmlFor="additionalInfo">
              Additional information on your business needs:
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              rows="4"
            ></textarea>
          </div>
          <div className="form-group companyflex">
            <label htmlFor="howDidYouHear">How did you hear about us?</label>
            <textarea
              id="howDidYouHear"
              name="howDidYouHear"
              value={formData.howDidYouHear}
              onChange={handleChange}
              rows="2"
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default DemoSchedule;
