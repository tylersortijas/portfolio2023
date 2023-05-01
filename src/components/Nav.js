import { React, useState } from "react";

import Logo from "../images/my_logo.jpg";

function Nav(props) {
  const { handleWork, handleContact, handleAbout } = props;

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const changeClick = () => setClick(!click); // Set Click to True
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <nav>
      <img src={Logo} alt="My Logo" />
      <ul>
        <li>
          <a
            href="#work"
            aria-label="Scroll to Work Section"
            onClick={handleWork}
          >
            Work
          </a>
        </li>
        <li>
          <a
            href="#about"
            aria-label="Scroll to About Section"
            onClick={handleAbout}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            aria-label="Scroll to Contact Section"
            onClick={handleContact}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
