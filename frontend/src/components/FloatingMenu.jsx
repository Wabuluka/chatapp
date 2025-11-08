import React, { useState } from "react";

const FloatingMenu = ({ children, trigger }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-menu-container">
      <div onClick={toggleMenu} className="floating-menu-trigger">
        {trigger}
      </div>
      {isOpen && <div className="floating-menu-content">{children}</div>}
    </div>
  );
};

export default FloatingMenu;
