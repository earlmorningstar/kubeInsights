import "./StyleSheet.css";
import { GiCheckMark } from "react-icons/gi";
import { LuAsterisk } from "react-icons/lu";
import { useState } from "react";


const images = [
    { src: "/images/jpMorgan-web.jpg", alt: "demo image 1" },
    { src: "/images/monday-web.jpg", alt: "demo image 2" },
    { src: "/images/upwork-web.jpg", alt: "demo image 3" },
  ];

function TelepresenceEnterprisePlan() {
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
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    };
  
    const validateField = (name, value) => {
      let error = "";
      if (!value) {
        error = "This field is required.";
      } else {
        switch (name) {
          case "firstName":
          case "lastName":
            if (!/^[A-Z]/.test(value)) {
              error = "Must begin with an uppercase letter.";
            }
            break;
          case "email":
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
              error = "Email must be formatted correctly.";
            }
            break;
          case "phoneNumber":
            if (!/^\d+$/.test(value)) {
              error = "Must contain only numbers";
            }
            break;
          default:
            break;
        }
      }
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: error,
      }));
    };
  
    const validateForm = () => {
      const newErrors = {};
      Object.keys(formData).forEach((key) => {
        if (!formData[key] && (key === "firstName" || key === "lastName" || key === "email" || key === "phoneNumber" || key === "companyName")) {
          newErrors[key] = "This field is required.";
        }
        if ((key === "firstName" || key === "lastName") && formData[key] && !/^[A-Z]/.test(formData[key])) {
          newErrors[key] = "Must begin with an uppercase letter.";
        }
        if (key === "email" && formData[key] && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData[key])) {
          newErrors[key] = "Email must be formatted correctly.";
        }
        if (key === "phoneNumber" && formData[key] && !/^\d+$/.test(formData[key])) {
          newErrors[key] = "Must contain only numbers.";
        }
      });
      if (!formData.telepresence && !formData.edgeStackApiGateway && !formData.other) {
        newErrors.checkboxes = "At least one option must be selected.";
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log("Form Data:", formData);
      } else {
        console.log("Validation Errors:", errors);
      }
    };
  
    return (
      <div className="demoSchedule-parent">
        <div className="demoSchedule-firstSection">
          <h1>Telepresence Enterprise Plan</h1>
          <p>Let's get you started with the feature-packed Enterprise plan for Telepresence.</p>
          <div className="contactFor">
            <p>Get Telepresence pricing and feature information, including:</p>
            <span>
              <GiCheckMark color="#6852f8" size={20} />Unlimited Connects
            </span>
            <span>
              <GiCheckMark color="#6852f8" size={20} /> Personal Intercepts
            </span>
            <span>
              <GiCheckMark color="#6852f8" size={20} /> Intercept Specs
            </span>
            <span>
              <GiCheckMark color="#6852f8" size={20} /> Preview URLs
            </span>
            <span>
              <GiCheckMark color="#6852f8" size={20} /> Saved Intercepts
            </span>
            <span>
              <GiCheckMark color="#6852f8" size={20} /> Standard Support Plan (Priority Support Option Available)
            </span>
            <span>
              <GiCheckMark color="#6852f8" size={20} /> And More
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
                <label htmlFor="firstName">
                  First Name<LuAsterisk color="red" size={10} />
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  required
                />
                {errors.firstName && (
                  <p className="trouble-vali-error">{errors.firstName}</p>
                )}
              </div>
              <div className="class-form-group">
                <label htmlFor="lastName">
                  Last Name<LuAsterisk color="red" size={10} />
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  required
                />
                {errors.lastName && (
                  <p className="trouble-vali-error">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="demoSchedule-classForm">
              <div className="class-form-group">
                <label htmlFor="email">
                  Work Email<LuAsterisk color="red" size={10} />
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  required
                />
                {errors.email && (
                  <p className="trouble-vali-error">{errors.email}</p>
                )}
              </div>
              <div className="class-form-group">
                <label htmlFor="phoneNumber">
                  Phone Number<LuAsterisk color="red" size={10} />
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  required
                />
                {errors.phoneNumber && (
                  <p className="trouble-vali-error">{errors.phoneNumber}</p>
                )}
              </div>
            </div>
  
            <div className="form-group companyflex">
              <label htmlFor="companyName">
                Company Name<LuAsterisk color="red" size={10} />
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                onBlur={(e) => validateField(e.target.name, e.target.value)}
                required
              />
              {errors.companyName && (
                <p className="trouble-vali-error">{errors.companyName}</p>
              )}
            </div>
  
            <div className="form-group">
              <label>
                Which KubeInsight products are you interested in? Please select
                from the options below:<LuAsterisk color="red" size={10} />
              </label>
              <div>
                <input
                  type="checkbox"
                  id="telepresence"
                  name="telepresence"
                  checked={formData.telepresence}
                  onChange={handleChange}
                  onBlur={() =>
                    validateField(
                      "checkboxes",
                      formData.telepresence ||
                        formData.edgeStackApiGateway ||
                        formData.other
                    )
                  }
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
                  onBlur={() =>
                    validateField(
                      "checkboxes",
                      formData.telepresence ||
                        formData.edgeStackApiGateway ||
                        formData.other
                    )
                  }
                />
                <label htmlFor="edgeStackApiGateway">Edge Stack API Gateway</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="other"
                  name="other"
                  checked={formData.other}
                  onChange={handleChange}
                  onBlur={() =>
                    validateField(
                      "checkboxes",
                      formData.telepresence ||
                        formData.edgeStackApiGateway ||
                        formData.other
                    )
                  }
                />
                <label htmlFor="other">Other</label>
              </div>
              {errors.checkboxes && (
                <p className="trouble-vali-error">{errors.checkboxes}</p>
              )}
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
              <label htmlFor="howDidYouHear">How did you hear about KubeInsights?</label>
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

export default TelepresenceEnterprisePlan;
