import React from "react";
import "./projects.scss";
import { ReactDOM } from "react";
import { useEffect } from "react";
import WebFit_a from "../../assets/webfit-a.png";
import WebFit_b from "../../assets/webfit-b.png";
import Kasa from "../../assets/KASA-a.png";
const projects = () => {
  useEffect(() => {
    const sm = 480;
    const md = 768;

    function resizeThis() {
      const imgH = document.querySelector(".middle img").clientWidth;
      if (window.innerWidth >= sm) {
        document.querySelectorAll(".left, .right, .section").forEach((el) => {
          el.style.height = imgH + "px";
        });
      } else {
        document.querySelectorAll(".left, .right, .section").forEach((el) => {
          el.style.height = "auto";
        });
      }
    }

    resizeThis();

    window.addEventListener("resize", resizeThis);

    window.addEventListener("scroll", function () {
      document.querySelectorAll(".section").forEach((section) => {
        const elementPos = section.offsetTop;
        const scrollPos = window.pageYOffset;

        const sectionH = section.offsetHeight;
        const h = window.innerHeight;
        const sectionVert = h / 2 - sectionH / 4;

        if (
          elementPos - sectionVert <= scrollPos &&
          elementPos - sectionVert + sectionH > scrollPos
        ) {
          section.classList.add("animate");
        } else {
          section.classList.remove("animate");
        }
      });
    });

    document
      .querySelectorAll('a[href*="#"]:not([href="#"])')
      .forEach((link) => {
        link.addEventListener("click", function (e) {
          if (
            location.pathname.replace(/^\//, "") ==
              this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
          ) {
            const target = document.querySelector(this.hash);
            if (target) {
              e.preventDefault();
              window.scrollTo({
                top: target.offsetTop,
                behavior: "smooth",
              });
            }
          }
        });
      });

    document
      .querySelector(".btn-primary")
      .addEventListener("click", function () {
        alert("I lied");
      });
  }, []);
  return (
    <div className="pro_cont">
      <div className="pro_header" id="top">
        <h1>Scroll Down</h1>
        <i className="fa fa-angle-down animated bounce"></i>
      </div>

      {/* WEBFIT */}

      <div className="section animate">
        <div className="middle">
          <img src={WebFit_a} />
        </div>
        <div className="left title">
          <div className="content">
            <h2>WebFit</h2>
            <p>
              Un site de coaching interactif, alliant un design élégant et une
              expérience utilisateur fluide pour atteindre vos objectifs en
              toute simplicité.
            </p>
            <a href="#" className="btn-primary">
              Learn more
            </a>
          </div>
        </div>
        <div className="right tiles">
          <img src={WebFit_b} />
        </div>
      </div>

      {/* KASA */}

      <div className="section">
        <div className="middle">
          <img src={Kasa} />
        </div>
        <div className="right title">
          <div className="content">
            <h2>Check out this guy.</h2>
            <p>
              What an interesting looking person! I wonder if they've ever
              climbed Mount Everest, or seen the Egyptian Pyramids. If not, I
              hope that one day they get to. You go random stock image person!
              Follow your dreams!
            </p>
          </div>
        </div>

        <div className="left tiles">
          <img src="https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?dpr=2&auto=format&crop=entropy&fit=crop&w=250&h=250&q=80" />
          <img src="https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?dpr=2&auto=format&crop=entropy&fit=crop&w=250&h=250&q=80" />
          <img
            src="https://images.unsplash.com/photo-1464655646192-3cb2ace7a67

e?dpr=2&auto=format&crop=entropy&fit=crop&w=250&h=250&q=80"
          />
          <img src="https://images.unsplash.com/photo-1464655646192-3cb2ace7a67e?dpr=2&auto=format&crop=entropy&fit=crop&w=250&h=250&q=80" />
        </div>
      </div>

      <div className="section">
        <div className="middle">
          <img src="https://images.unsplash.com/photo-1465326117523-6450112b60b2?dpr=2&auto=format&crop=entropy&fit=crop&w=250&h=250&q=80" />
        </div>
        <div className="left title">
          <div className="content">
            <h2>That is one pretty building.</h2>
            <p>
              I once thought about becoming an architect. I wanted to create a
              house fit for a king. But then I failed maths. So I became a
              frontend developer instead.
            </p>
          </div>
        </div>

        <div className="right tiles">
          <img src="https://images.unsplash.com/photo-1465326117523-6450112b60b2?dpr=2&auto=format&crop=entropy&fit=crop&w=250&h=250&q=80" />
          <img src="https://images.unsplash.com/photo-1465326117523-6450112b60b2?dpr=2&auto=format&crop=entropy&fit=crop&w=250&h=250&q=80" />
          <img src="https://images.unsplash.com/photo-1465326117523-6450112b60b2?dpr=2&auto=format&crop=entropy&fit=crop&w=250&h=250&q=80" />
          <img src="https://images.unsplash.com/photo-1465326117523-6450112b60b2?dpr=2&auto=format&crop=entropy&fit=crop&w=250&h=250&q=80" />
        </div>
      </div>

      <div className="section">
        <div className="middle">
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?dpr=2&auto=format&crop=entropy&fit=crop&w=250&h=250&q=80" />
        </div>
        <div className="right title">
          <div className="content">
            <h2>The future is now.</h2>
            <p>
              Check out that technology! Imagine if we went back in time and put
              one of those in the hands of a neanderthal. Do you think they'd be
              impressed, or just try to club us to death?
            </p>
          </div>
        </div>

        <div className="left tiles">
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?dpr=2&auto=format&crop=entropy&fit=crop&w=250&h=250&q=80" />
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?dpr=2&auto=format&crop=entropy&fit=crop&w=250&h=250&q=80" />
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?dpr=2&auto=format&crop=entropy&

fit=crop&w=250&h=250&q=80"
          />
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?dpr=2&auto=format&crop=entropy&fit=crop&w=250&h=250&q=80" />
        </div>
      </div>

      <div className="pro_footer">
        <a href="#top" className="scrollTo">
          <i className="fa fa-angle-up animated bounce"></i>
        </a>
        <h1>Scroll Up</h1>
      </div>
    </div>
  );
};

export default projects;
