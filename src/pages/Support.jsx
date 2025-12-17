import React from "react";
import "./support.css";

export default function Support() {
  return (
    <div className="support-container">

      <div className="support-header">
        <h1>Support Center</h1>
        <p>We are here to help you 24/7. Contact us anytime.</p>
      </div>

      <div className="support-box">

        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>📩 Email: support@redshop.com</p>
          <p>📞 Phone: +1 (202) 555‑0181</p>
          <p>📍 Address: RED Shopping HQ, New York, USA</p>

          <img src="https://thumbs.dreamstime.com/b/call-center-agents-headsets-customer-service-representatives-client-support-phone-assistance-visual-graphic-illustration-385305434.jpg" alt="Support" />
        </div>

        <form className="support-form">
          <h2>Send us a Message</h2>

          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button>Send Message</button>
        </form>

      </div>

    </div>
  );
}
