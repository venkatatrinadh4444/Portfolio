import React from "react";
import styles from "./contact.module.css";
import { SiYelp } from "react-icons/si";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "eb453626-4394-4de3-8a00-aa56ee92b35f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      className={`d-flex justify-content-between p-4 align-items-center flex-column flex-sm-row ${styles.container}`}
    >
      <div className={`${styles.contactHead}`}>
        <h1>Contact</h1>
        <h4>Feel free to reach out!</h4>
      </div>
      <div className="w-75">
        <form
          onSubmit={onSubmit}
          className={`d-flex flex-column align-items-center ${styles.formContainer}`}
        >
          <input
            type="hidden"
            name="access_key"
            value="eb453626-4394-4de3-8a00-aa56ee92b35f"
          />
          <input
            type="text"
            name="name"
            required
            className="form-control mb-2 "
            placeholder="Enter Your Name"
          />
          <input
            type="email"
            name="email"
            required
            className="form-control mb-2"
            placeholder="Enter Your Email"
          />
          <textarea
            name="message"
            required
            className="form-control mb-2"
            placeholder="Enter Message"
          ></textarea>

          <button type="submit" className="btn btn-success mt-2">
            Submit Form
          </button>
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};
export default Contact;
