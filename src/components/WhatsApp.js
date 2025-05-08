import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "256757511823";
    const message = "Hello, I got this number from RPP Website!!!";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <div>
      <button
        className="whatsapp_float"
        onClick={handleWhatsAppClick}
        style={{
          position: "fixed",
          bottom: "40px",
          right: "70px",
          backgroundColor: "#25d366",
          color: "#fff",
          borderRadius: "50px",
          padding: "10px",
          border: "none",
          cursor: "pointer",
          zIndex: "100",
        }}
      >
        <FaWhatsapp size={30} />
      </button>
    </div>
  );
};

export default WhatsApp;
