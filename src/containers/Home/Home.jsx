import React from "react";
import "./home.css";
import harshaImage from "../../media/harsha.jpg"
import resume from "../../media/HarshaSaddanathanResume022021.pdf"
const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <section className="content">
            <h1 className="content-header">About Me</h1>
            <hr />
            <img
              className="self"
              src={harshaImage}
              alt="Harsha Saddanathan Image"
              width="150"
              height="200"
            />
            <p className="bio">
              My name is Harsha Saddanathan. I am originally from Rochester, NY,
              but have lived the majority of my life in metro Atlanta. I
              currently live with my wife and son in Peachtree Corners. I
              studied family financial planning at the University of GA. After
              school, I worked in the home remodeling sector for a few years. I
              discovered my passion for web development while working for a
              technology consulting and implementation company. I really saw the
              benefits of understanding how to code and develop, and I decided
              to pursue my certification in Full Stack Development. In my free
              time, I enjoy spending time with my family, hiking with our dogs,
              working out, playing and watching sports. I am a big football fan,
              and I am a HUGE Buffalo Bills fan. I also enjoy DIY projects
              around and outside the house.
              </p>
              <ul>
                <strong>Follow Me On:</strong>
                <li>
                  <a
                    href="https://www.facebook.com/harsha.saddanathan"
                    target="blank"
                    className="links"
                  >
                    <strong>Facebook</strong>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/harshanan-saddanathan/"
                    target="blank"
                    className="links"
                  >
                    <strong>LinkedIn</strong>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/hsaddanathan"
                    target="blank"
                    className="links"
                  >
                    <strong>GitHub</strong>
                  </a>
                </li>
                <li>
                  <a
                    href={resume}
                    download="HarshaSaddanathanResume"
                    className="links"
                  >
                    <strong>Download Resume</strong>
                  </a>
                </li>
              </ul>
          </section>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Home;
