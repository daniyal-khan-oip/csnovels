import React, { useState } from "react";
import Logo from "../Assets/Images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import HeaderSearch from "./HeaderSearch";
import HeaderDropdown from "./HeaderDropdown";

function Header(props) {
  const [text, setText] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="container-fluid header-bg">
      <div className="container">
        <div className="row d-flex flex-row align-items-center">
          <div className="col-md-3">
            {/* <div className="header-container"> */}
            <img src={Logo} className="header-logo" />
            {/* <div className="cat-and-icon-div"> */}
            {/* </div> */}
            {/* <HeaderSearch setText={setText} text={text} /> */}
            {/* </div> */}
          </div>

          <div className="col-md-2">
            <p className="cat-label">
              <FontAwesomeIcon icon={faThLarge} /> Categories
            </p>
          </div>
          <div className="col-md-4">
            <HeaderSearch setText={setText} text={text} />
          </div>
          <div className="col-md-3 comunity-and-user-icon">
            <a href="#" className="community-link">
              community
            </a>
            <div
              className="user-acc-circle"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <p className="user-acc-label">C</p>
            </div>
          </div>
          {/* <div className="content-right">
          <a href="#" className="community-link">
            community
          </a>
          <div
            className="user-acc-circle"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            <p className="user-acc-label">C</p>
          </div>
        </div> */}
        </div>

        {showDropdown && <HeaderDropdown />}
      </div>
    </div>
    // <div className="header-container">
    //   <div className="container header-contents">
    //     <div className="content-right">
    //       <img src={Logo} className="header-logo" />
    //       <div className="cat-and-icon-div">
    //         <FontAwesomeIcon icon={faThLarge} />
    //         <p className="cat-label">categories</p>
    //       </div>
    //       <HeaderSearch setText={setText} text={text} />
    //     </div>

    //     <div className="content-left">
    //       <a href="#" className="community-link">
    //         community
    //       </a>
    //       <div
    //         className="user-acc-circle"
    //         onClick={() => setShowDropdown(!showDropdown)}
    //       >
    //         <p className="user-acc-label">C</p>
    //       </div>
    //     </div>
    //   </div>

    //   {showDropdown && <HeaderDropdown />}
    // </div>
  );
}

export default Header;
