import { useState } from 'react';
import logo from '../../img/logo.png';

const HeaderComponent = () => {
  const [btnText, setBtnText] = useState('Login');
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo" src={logo} />
      </div>
      <div className="navbarContainer">
        <ul className="nav-items">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="btn-login"
            onClick={() => {
              setBtnText(btnText === 'Login' ? 'Logout' : 'Login');
            }}
          >
            {btnText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
