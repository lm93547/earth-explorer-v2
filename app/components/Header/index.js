/**
 *
 * Header
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
import "./style.css";

function Header() {
  return (
    <nav class="navbar is-dark">
      <div class="container">
        <div id="navMenu" class="navbar-menu">
          <div class="navbar-start">
            <a class="navbar-item">Earth Explorer V2</a>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-dark">Github</a>
                <a class="button is-link">Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {};

export default memo(Header);
