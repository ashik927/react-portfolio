import React from "react";
import shahadat from "../../../shahadat.jpg";
import Fade from "react-reveal/Fade";
import Typical from "react-typical";
import { FaFacebookSquare, FaGithub, FaLinkedin ,FaMedium } from "react-icons/fa";
import resume from "./shahadat CV (11).pdf";
import { Link } from "react-router-dom";
import ashik from "../../../ashik.jpg"
const Header = () => {
  const expertise = [
    "I am ",
    2000,
    "I am a Programmer",
    5000,
    "I am a Front-end web developer",
    5000,
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-7" style={{ marginTop: "170px" }}>
          <h5 style={{ color: "rgb(81, 233, 157)" }}>Hello, I am</h5>
          <Fade left>
            <h1 className="text-white">Khandker Ashik Mahmud</h1>
          </Fade>
          <Typical
            className="text-success mb-3 h3"
            steps={expertise}
            loop={Infinity}
            wrapper="p"
          />
          <h6 className="text-white mb-3">
            I am a react and javascript lover. Recently i have finished more than
            a few projects or many projects on javascript,react.js,node.js mongodb ,firebase etc. So click
            here  know more details about me.
          </h6>
          <a
            style={{ fontSize: "30px", color: "white", paddingRight: "30px" }}
            href="https://github.com/ashik927" target="_blank"
          >
            <FaGithub></FaGithub>
          </a>
          <a
            style={{ fontSize: "30px", color: "white", paddingRight: "30px" }}
            href="https://www.linkedin.com/in/ashik-mahmud-080591126/"  target="_blank"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            style={{ fontSize: "30px", color: "white" }}
            href="https://ashik1012.medium.com/"  target="_blank"
          >
            <FaMedium></FaMedium>{" "}
          </a>
          <br />
          <br />

          <Link to="/about-me">
            <button
              class="btn btn-success my-2 my-sm-0 text-white mr-4"
              type="submit"
            >
              About Me
            </button>
          </Link>
          <a href="https://drive.google.com/file/d/1FXwoc2rJxh1lx3tqwL5syrsW2OBxvgro/view?usp=sharing">
            <button className="btn btn-danger text-white pd-4">
              Download CV
            </button>
          </a>
        </div>
        <div className="col-md-5">
          D0C0
          <img
            style={{ width: "100%", marginTop: "120px", borderRadius: "50%" }}
            src={ashik}
            alt=""
          />
        </div>
      
      </div>
    </div>
  );
};

export default Header;



