import React from "react";
import Modals from "./Modals/Modals.jsx";
import handleCopyText from "../../services/handleCopyText.js";

function Footer() {
  return (
    <>
      <div>
        {/* Footer*/}
        <footer className="footer py-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 text-lg-start">
                Copyright © <i>Дърводелски услуги Бургас-Айтос</i>
              </div>

              <div className="col-lg-4 my-3 my-lg-0">
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="https://www.facebook.com/Darvodelstvo"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="https://www.instagram.com/durvodelskiuslugi/"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="col-lg-4 text-lg-end">
                <a
                  id="footer-number"
                  className="link-dark text-decoration-none me-3"
                  onClick={handleCopyText}
                >
                  0876533802
                </a>
                <a
                  id="license"
                  className="link-dark text-decoration-none me-3"
                  href="https://github.com/sldimitrov/CarpenterServices/blob/main/LICENSE"
                >
                  License
                </a>
              </div>
            </div>
          </div>
        </footer>
        <Modals />
      </div>
    </>
  );
}

export default Footer;
