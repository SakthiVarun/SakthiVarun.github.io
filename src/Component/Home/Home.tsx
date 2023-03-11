import React from "react";

function App() {
  return (
    <>
      <header
        id="fh5co-header"
        className="fh5co-cover js-fullheight"
        role="banner"
        style={{ backgroundImage: "url(images/cover_bg_3.jpg)" }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center">
              <div className="display-t js-fullheight">
                <div
                  className="display-tc js-fullheight animate-box"
                  data-animate-effect="fadeIn"
                >
                  <div
                    className="profile-thumb"
                    style={{ background: "url(images/user-3.jpg)" }}
                  />
                  <h1>
                    <span>Louie Jie Mahusay</span>
                  </h1>
                  <h3>
                    <span>Web Developer / Photographer</span>
                  </h3>
                  <p></p>
                  <ul className="fh5co-social-icons">
                    <li>
                      <a href="https://twitter.com/">
                        <i className="icon-twitter2" />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="icon-facebook2" />
                      </a>
                    </li>
                    <li>
                      <a href="https://linkedin.com/">
                        <i className="icon-linkedin2" />
                      </a>
                    </li>
                    <li>
                      <a href="https://wa.me/9444561356">
                        <i className="icon-dribbble2" />
                      </a>
                    </li>
                  </ul>
                  <p />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
