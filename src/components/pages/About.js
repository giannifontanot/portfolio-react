import React from 'react';
import img1 from '../pages/img/img1.jpeg'
import img2 from '../pages/img/img2.jpeg'
import img3 from '../pages/img/img3.jpeg'


export default function About() {
  return (
      <div>
          <div className="flex-grid">
              <div className="main-content">
                  <main>

                      <div className="about-container">
                          <a id="about"></a>
                          <h2>About me</h2>
                          <hr />
                          {<React.Fragment>
                          <p>Hi there! My name is Gianni Fontanot, and I have been programming computers in many languages since
                              1998.
                              Back then I was working with now old technologies like PowerDynamo, Internet Information Server, and
                              the Sybase database ... (have you ever heard of any of them?) and later with a much more modern set of
                              languages as a Full Stack Java Web Developer with Java EE and SQL. </p>
                          <p>In 2011, I did an
                              intermission and
                              decided to come
                              to the United States to teach children in a bilingual classroom, and for ten years I enjoyed doing so.
                              Now, after getting acquainted by the excellent <strong>SMU Bootcamp instructors</strong> about the new technologies developed in
                              recent years, I am ready to get back to coding!</p>
                          </React.Fragment>}
                      </div>
                  </main>
                  </div>
          </div>
          <br />
          <div className="polaroid-container">
              <div className="polaroid rotate-15">
                  <img className="pure-img img-about" src={img1} alt="" />
              </div>
              <div className="polaroid rotate20">
                  <img className="pure-img img-about" src={img2} alt="" />
              </div>
              <div className="polaroid rotate10">
                  <img className="pure-img img-about" src={img3} alt="" />
              </div>
          </div>
      </div>

  );
}
