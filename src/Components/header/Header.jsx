import React, { useState } from "react";
import Icon from "/icon.png";
import Logo from "../../assets/logo.png";
import { MdSearch, MdOutlineClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import "./style.scss";
function Header() {
  const [showSearch, setShowSearch] = useState("");
  const [hideSearch, setHideSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const openSearch = () => {
    setHideSearch(false);
    setShowSearch(true);
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const backToHomeHandle = () => {
    navigate("/");
  };
  return (
    <>
      <div className="header_container">
        <div className="header_container_logo">
          <img src={Icon} alt="icon" onClick={backToHomeHandle} />
          <img src={Logo} alt="logo" />
        </div>
        <div className="header_container_DesktopMenu">
          <ul>
            <li>Movies</li>
            <li>TV Shows</li>
            <MdSearch onClick={openSearch} />
          </ul>

          {showSearch && (
            <div className="search_wrapper">
              <div className="searchInput">
                <input
                  type="text"
                  placeholder="Search for a movie or tv show.."
                />
                <MdOutlineClose onClick={() => setShowSearch(false)} />
              </div>
            </div>
          )}
        </div>
        <div className="header_container_MobileMenu">
          <button className="btn" onClick={toggleMenu}>
            {isOpen ? <MdOutlineClose /> : <RxHamburgerMenu />}
          </button>
          {isOpen && (
            <div className="mobileMenu_item">
              <ul>
                <li>Movies</li>
                <li>TV Shows</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
