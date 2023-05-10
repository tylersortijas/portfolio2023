import { React, useState, useEffect } from "react";

import Nav from "./Nav";

import HeadShot from "../images/headshot-circa-2018.png";
import CodeSymbol from "../images/code-solid.svg";
import PremierAuto from "../images/premier_auto_spa.jpg";
import Lamborghini from "../images/lamborghini_clone.jpg";
import Tindog from "../images/tindog.jpg";
import Apple from "../images/apple_clone.jpg";
import Microsoft from "../images/microsoft-clone.jpg";
import FamilyChristmas from "../images/familychristmas2019.jpg";
import Siblings from "../images/siblings.jpg";
import Coaching from "../images/coaching2019.jpg";
import Car from "../images/newcar2023.jpg";
import Shop from "../images/ecommerce-shop.jpg";

function LandingPage() {
  const [workTarget, setWorkTarget] = useState(null);
  const [aboutTarget, setAboutTarget] = useState(null);
  const [contactTarget, setContactTarget] = useState(null);

  useEffect(() => {
    setWorkTarget(document.getElementById("work"));
    setAboutTarget(document.getElementById("about"));
    setContactTarget(document.getElementById("contact"));
  }, []);

  const handleWork = (event) => {
    event.preventDefault();
    workTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleAbout = (event) => {
    event.preventDefault();
    aboutTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleContact = (event) => {
    event.preventDefault();
    contactTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main>
      <div className="header-container">
        <Nav
          handleWork={handleWork}
          handleAbout={handleAbout}
          handleContact={handleContact}
        />
        <section className="title-container">
          <div className="title-text">
            <h1>Hello. Welcome.</h1>
            <p>
              I'm Francisco T Roncalli Sortijas, <br />a Filipino-American Los
              Angeles based Front-End Developer.
              <br /> I am passionate about learning, and creating <br />
              the best user experience possible.
            </p>
            <ul>
              <li>
                <a href="https://docs.google.com/document/d/1rveU9MYT9l8WUB_Nkz7SMtlTGTsZpU4S7hpwoM1K_Xg/edit?usp=sharing">
                  Resume
                </a>
              </li>
              <li>
                <a href="mailto: tylersortijas@gmail.com">Email</a>
              </li>
            </ul>
          </div>
          <img src={HeadShot} alt="My Headshot" />
        </section>
      </div>
      <section className="knowledge-container">
        <div className="knowledge-card">
          <img src={CodeSymbol} alt="Front-End Developer Logo" />
          <h3>Front-End Developer</h3>
          <p>
            I like to bring designs created from talented UI/UX Designers
            <br /> to life for not only the world to see, but for people to use
            in their everyday lives.
          </p>
          <h4>Languages I speak: </h4>
          <p>HTML, CSS, Javascript, Python, Java, Git</p>
          <h4>Dev Utility Belt:</h4>
          <ul>
            <li>REACT.JS</li>
            <li>TailwindCSS</li>
            <li>VSCode</li>
            <li>Github</li>
            <li>NodeJS</li>
          </ul>
        </div>
      </section>
      <section className="work-container" id="work">
        <h2>My Work</h2>
        <div className="work-card">
          <img src={Shop} alt="Clothing Ecommerce Shop" />
          <div className="card-text">
            <h3>Ecommerce Shop</h3>
            <p>
              An ecommerce shop that uses the fake store API to pull product
              data. It's filtered to only show Men's and Women's clothing. It
              has a responsive design, created with tailwind. With React I
              separated the data between product, sidebar, and cart data. Which
              is then used in conjunction with the components, home, and product
              page to display information seamlessly all across.
            </p>
            <div className="card-links">
              <a href="https://github.com/tylersortijas/clothing-shop">
                Source Code
              </a>
              <a href="https://tylersortijas.github.io/clothing-chop/">Preview</a>
            </div>
            <hr />
            <p>HTML | CSS | Javascript | REACT.JS | Tailwind</p>
          </div>
        </div>
        <div className="work-card">
          <div className="card-text">
            <h3>Premier Auto Spa</h3>
            <p>
              Innovated the Front-end experience for a Pasadena based car wash
              that will (in the near future) be used by over 100+ clientele. In
              addition, I will also be implementing the back-end using MongoDB,
              Mongoose, and Nodejs. With the Square API as well.
            </p>
            <div className="card-links">
              <a href="https://github.com/tylersortijas/premier-auto-spa">
                Source Code
              </a>
              <a href="https://tylersortijas.github.io/premier-auto-spa/">
                Preview
              </a>
            </div>
            <hr />
            <p>HTML | CSS | Javascript | REACT.JS</p>
          </div>
          <img src={PremierAuto} alt="Premier Auto Spa" />
        </div>
        <div className="work-card">
          <img src={Apple} alt="Apple Clone Website" />
          <div className="card-text">
            <h3>Apple - Landing Page</h3>
            <p>
              Recreated the Apple landing page by eye, using Tailwind in tandem
              with React. This pushed my limits in creating more realistic
              designs and user driven experiences that are being used as we
              speak.
            </p>
            <div className="card-links">
              <a href="https://github.com/tylersortijas/apple-clone">
                Source Code
              </a>
              <a href="https://tylersortijas.github.io/apple-clone/">Preview</a>
            </div>
            <hr />
            <p>HTML | CSS | Javascript | REACT.JS | Tailwind</p>
          </div>
        </div>
        <div className="work-card">
          <div className="card-text">
            <h3>Tindog (the Tinder for Dogs)</h3>
            <p>
              A responsive project to mimic a Tinder application, but for one of
              our many four legged friends. The project includes testimonials, a
              carousel, price points, and fun designs.
            </p>
            <div className="card-links">
              <a href="https://github.com/tylersortijas/tindog-tinder-website">
                Source Code
              </a>
              <a href="https://tylersortijas.github.io/tindog-tinder-website/">
                Preview
              </a>
            </div>
            <hr />
            <p>HTML | CSS | Bootstrap</p>
          </div>
          <img src={Tindog} alt="Tindog Website" />
        </div>
        <div className="work-card">
          <img src={Lamborghini} alt="Lamborghini Website Clone" />
          <div className="card-text">
            <h3>Lamborghini - Shopping Cart</h3>
            <p>
              A shopping site in the format of Lamborghinis. The main purpose of
              this project was to create a functional cart system that
              replicated a back-end for adding items to a cart and purchasing
              them via a check-out modal/menu.
            </p>
            <div className="card-links">
              <a href="https://github.com/tylersortijas/shopping-cart">
                Source Code
              </a>
              <a href="https://tylersortijas.github.io/shopping-cart/">
                Preview
              </a>
            </div>
            <hr />
            <p>HTML | CSS | Javascript | REACT.JS</p>
          </div>
        </div>
        <div className="work-card">
          <div className="card-text">
            <h3>Microsoft - Landing Page</h3>
            <p>
              A responsive Microsoft Landing page clone that was created using
              React, Tailwind, Javascript, and HTML.
            </p>
            <div className="card-links">
              <a href="https://github.com/tylersortijas/microsoft-clone">
                Source Code
              </a>
              <a href="https://tylersortijas.github.io/microsoft-clone/">
                Preview
              </a>
            </div>
            <hr />
            <p>HTML | CSS | REACT.JS | Tailwind</p>
          </div>
          <img src={Microsoft} alt="Microsoft Clone Preview" />
        </div>
      </section>
      <section className="about-container" id="about">
        <h2 id="about-title">About</h2>
        <div className="about-card">
          <div className="about-images">
            <div className="about-col-one">
              <img src={FamilyChristmas} alt="" />
              <img src={Siblings} alt="" />
            </div>
            <div className="about-col-two">
              <img src={Car} alt="" />
              <img src={Coaching} alt="" />
            </div>
          </div>
          <div className="about-text">
            <h2>A little bit about me...</h2>
            <p>
              I am a 22 year old male, who has a passion for cars, video games,
              and always puts family/Loved-ones first. I am very empathetic,
              understanding, and try everyday to be the very best version of
              myself that I can be.
            </p>
            <p>
              Everyday I put my best foot forward and always give my 100%.
              Coming from a background of Poverty, I am always grateful for any
              opportunity in life, and strive to achieve success in any
              avenue/passion of mine.
            </p>
            <h4>Things I am Doing currently:</h4>
            <ul>
              <li>Working Out</li>
              <li>Playing a game called Valorant</li>
              <li>Watching a K-Drama</li>
              <li>Obsessing over the Toyota Supra</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="contact-container" id="contact">
        <h2>Contact | Socials</h2>
        <ul>
          <li>
            <a href="mailto: tylersortijas@gmail.com">Email</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/tyler-f-roncalli-sortijas-236ab522b/">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://instagram.com/tylersortijas?igshid=YmMyMTA2M2Y=">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://github.com/tylersortijas">Github</a>
          </li>
        </ul>
      </section>
      <section className="footer-container">
        <p>Coded with ❤. Copyright © 2023 TFSS</p>
      </section>
    </main>
  );
}

export default LandingPage;
