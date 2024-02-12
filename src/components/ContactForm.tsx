import { useState } from "react";

const ContactForm = () => {
  const [checked, setChecked] = useState(false);
  return (
    <section className="main--form">
      <div className="header">
        <h1>Get in touch</h1>
        <p>Our friendly team will love to hear from you</p>
      </div>

      <section className="contact">
        <div id="names">
          <ContactInput
            id="first"
            label="First Name"
            type="text"
            placeholder="First Name"
          />
          <ContactInput
            id="last"
            label="Last Name"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <ContactInput
          id="email"
          label="Email"
          type="email"
          placeholder="you@company.com"
        />
        <ContactInput
          id="phone"
          label="Phone Number"
          type="number"
          placeholder="+1 (555) 000-0000"
        />
        <ContactInput
          id="message"
          label="Message"
          type="text"
          placeholder="Leave us a message..."
        />
      </section>
      <div className="checkboxDiv">
        <input
          type="checkbox"
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        <p>You agree to our friendly privacy policy.</p>
      </div>
      <button type="button" className="sendBtn">Send Message</button>
    </section>
  );
};
export default ContactForm;

interface InputProps {
  type: string;
  label: string;
  id: string;
  placeholder: string;
}

const ContactInput = (props: InputProps) => {
  const states = ["US", "NG"];
  return (
    <div className="contactGroup">
      <label htmlFor={props.id} className="contactLabel">
        {props.label}
      </label>
      <div className="input">
        {props.type == "number" && (
          <select>
            {states.map((state) => (
              <option key={state}>{state}</option>
            ))}
          </select>
        )}
        {props.id == "message" ? (
          <textarea
            className="contactInput"
            id={props.id}
            placeholder={props.placeholder}
          />
        ) : (
          <input
            type={props.type}
            className="contactInput"
            id={props.id}
            placeholder={props.placeholder}
          />
        )}
      </div>
    </div>
  );
};
