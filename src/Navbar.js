
import React from "react";
import "../src/App.css";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container">
        <a href="#" class="navbar-brand">
          Clickup
        </a>
        <button class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
        >
        <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navmenu">
          <ul class="navbar-nav ms-auto" >
            <li class="nav-item">
              <a href="#contact" class="nav-link">
                Contact Sales
              </a>
            </li>
            <li class="nav-item">
              <a href="#signup" class="nav-link">
                Sign Up
              </a>
            </li>
            <li class="nav-item">
              <a href="#login" class="nav-link">
                Log in
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
