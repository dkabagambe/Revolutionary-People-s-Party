import React from "react";
import "../styles/ContactUs.css";
import mkc from "../img/mkc.jpg";

const ContactUs = () => {
  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <img src={mkc} alt="Contact RPP" className="hero-image" />
        <div className="hero-overlay">
          <h1>Let's Connect</h1>
          <p>Get In Touch?</p>
        </div>
      </section>

      {/* Contact Details and Socials */}
      <section className="contact-info">
        <div className="contact-left">
          <h2>Contact Information</h2>
          <p>
            <strong>Address:</strong> Kampala, Uganda
          </p>
          <p>
            <strong>Email:</strong>
            <a href="mailto:info@rppuganda.org">info@rppuganda.org</a>
          </p>
          <p>
            <strong>Phone:</strong>
            <a href="tel:+25656757511823">(+256) 56757511823</a>
          </p>
        </div>
        <div className="contact-right">
          <h2>Follow Us</h2>
          <ul className="social-links">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61572705284188"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/rppuganda"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/rppuganda"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@rppuganda"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/25656757511823"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <iframe
          title="RPP Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.7617457958274!2d32.582519999999996!3d0.347596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb2c7cb00f5d%3A0x4ad6c1b9467f4c53!2sKampala!5e0!3m2!1sen!2sug!4v1684753787652!5m2!1sen!2sug"
          allowFullScreen=""
          loading="lazy"
          className="map-frame"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactUs;
