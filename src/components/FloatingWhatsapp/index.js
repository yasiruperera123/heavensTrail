import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import whatsappImg from "assets/images/whatsapp.png";

const FloatingWhatsApp = () => {
  const [showWidget, setShowWidget] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledToBottom =
        Math.ceil(window.innerHeight + window.scrollY) >= Math.ceil(document.documentElement.scrollHeight);
      setShowWidget(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerStyle = {
    position: "fixed",
    bottom: "24px",
    right: "24px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer"
  };

  const textContainerStyle = {
    backgroundColor: "white",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    borderRadius: "999px",
    padding: "4px 16px",
    marginRight: "8px",
    transition: "box-shadow 0.3s ease-in-out"
  };

  const textStyle = {
    color: "#4a4a4a",
    fontWeight: "400",
    fontSize: "16px"
  };

  const imgContainerStyle = {
    backgroundColor: "transparent",
    padding: "8px",
    transition: "box-shadow 0.3s ease-in-out",
    display: 'flex',
    borderRadius:"100%"
  };

  const imgStyle = {
    width: "35px",
    height: "35px",
    backgroundColor: 'transparent',
  };

  const handleClick = () => {
    window.open(`https://wa.me/0710944927`, "_blank");
  };

  return (
    showWidget && (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        style={containerStyle}
        onClick={handleClick}
      >
        <div
          style={textContainerStyle}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0px 6px 10px rgba(0, 0, 0, 0.15)"}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0px 4px 6px rgba(0, 0, 0, 0.1)"}
        >
          <span style={textStyle}>Chat with us</span>
        </div>
        <div
          style={imgContainerStyle}
          onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0px 6px 10px rgba(0, 0, 0, 0.15)"}
          onMouseLeave={(e) => e.currentTarget.style.boxShadow = "none"}
        >
          <img src={whatsappImg} alt="WhatsApp" style={imgStyle} />
        </div>
      </motion.div>
    )
  );
};

export default FloatingWhatsApp;