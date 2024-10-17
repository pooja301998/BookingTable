import React from "react";
import images from "../images/images.jpeg";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <section>
        <div>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterraneran restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <Link to="/booking">
            <button aria-label="OnClick">Reserve Table</button>
          </Link>
        </div>
        <div>
          <img src={images} alt="logo" />
        </div>
      </section>
    </header>
  );
}
export default Header;
