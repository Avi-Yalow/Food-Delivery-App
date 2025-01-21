import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const { getToatlCartAmount, auth, setAuth, url } = useContext(StoreContext);
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();
  const logout = async () => {
    //TODO api call to backend to logout and remove cookie
    try {
      const response = await axios.post(
        `${url}/api/user/logout`,
        {},
        {
          withCredentials: true,
        }
      );
      if (response.data.success) {
        setAuth(false);
        localStorage.removeItem("auth");
        navigate("/");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert(response.data.message);
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo_humus} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu{" "}
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile")}
          className={menu === "mobile" ? "active" : ""}
        >
          mobile
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getToatlCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!auth ? (
          <button onClick={() => setShowLogin(true)}>sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={() => navigate("/myorders")}>
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
