import React from "react";

function Footer() {
  return (
    <div>
      <p className="text-bg-primary py-3 mb-0 text-center"> 
      © {new Date().getFullYear()} Animal Shelter. All Rights Reserved. 
      </p>
    </div>
  );
}

export default Footer;
