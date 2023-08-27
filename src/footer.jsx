import React from "react";

const Footer = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <footer className="Nakredite">
      <p>&copy; {year} Nakredite. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
