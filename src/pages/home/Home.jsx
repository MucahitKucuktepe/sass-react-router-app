import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-bgImg-container">
      <nav class="nav">
        <ul class="nav__list">
          <Link to="/" class="nav__item">
            <a href="index.html" class="nav__link nav__link--active">
              Home
            </a>
          </Link>
          <Link to="about" class="nav__item">
            <a href="about.html" class="nav__link">
              About Me
            </a>
          </Link>
          <Link to="projects" class="nav__item">
            <a href="projects.html" class="nav__link">
              My Projects
            </a>
          </Link>
          <Link to="contact" class="nav__item">
            <a href="contact.html" class="nav__link">
              Contact
            </a>
          </Link>
        </ul>
      </nav>
      <main class="home">
        <h2>Hi! My Name Is</h2>
        <h1 class="home__name">
          Wednesday <span class="home__name--last">Addams</span>
        </h1>
        <h2>Full Stack Web Developer</h2>
      </main>
      <footer class="horizontal">
        <div class="social-icons">
          <a href="#">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a href="https://github.com/MucahitKucuktepe">
            <i class="fab fa-github fa-2x"></i>
          </a>
        </div>
        <div class="copyright">&copy; Copyright 2023</div>
      </footer>
    </div>
  );
};

export default Home;
