import './Navbar.css';
import { BsChevronDown, BsSearch } from 'react-icons/bs';

export const Navbar = () => {
  return (
    <div id="navbar-container">
      <div id="navbar-wrapper">
        <div id="navbar-left">
          <div id="navbar-logo">
            <span id="navbar-logo-text">EDYODA</span>
          </div>
          <div className="navbar-item">
            <span className="navbar-item-text">Courses</span>
            <span className="navbar-item-icon">
              <BsChevronDown />
            </span>
          </div>
          <div className="navbar-item">
            <span className="navbar-item-text">Programs</span>
            <span className="navbar-item-icon">
              <BsChevronDown />
            </span>
          </div>
        </div>
        <div id="navbar-right">
          <div id="navbar-search">
            <BsSearch />
          </div>
          <div id="navbar-login">Log in</div>
          <div id="navbar-join">Join Now</div>
        </div>
      </div>
    </div>
  );
};
