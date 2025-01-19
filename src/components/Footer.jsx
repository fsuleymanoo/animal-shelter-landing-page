import React from "react";

function Footer() {
  return (
    <div>
      <p className="text-bg-primary py-3 text-center">
        All Rights Reserved. {new Date().getFullYear()}
      </p>
    </div>
  );
}

export default Footer;
