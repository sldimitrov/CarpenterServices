import React from "react";
import logo from "../../pictures/tools.webp";

function Header() {
  return (
    <>
      <div>
        {/* Navigation*/}
        <nav
          className="navbar navbar-expand-lg navbar-dark fixed-top"
          id="mainNav"
        >
          <div className="container" id="header-container">
            <a className="navbar-brand" href="#page-top">
              <img src={logo} alt="crossed tools - the logo of the firm" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              Меню
              <i className="fas fa-bars ms-1" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    Услуги
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio" id="link">
                    <div class="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="fall-down-btn"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Проекти
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#portfolio">
                            Къщи
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#sheds">
                            Навеси
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#bowers">
                            Беседки
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#tables">
                            Маси с епоксидна смола
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#bungalow">
                            Бунгала
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#stairs">
                            Стълби
                          </a>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    Относно
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">
                    Екип
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">
                    Контакти
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Masthead*/}
        <header className="masthead">
          <div className="container">
            <div className="masthead-subheading" id="firm-name">
              Дърводелски услуги Бургас-Айтос
            </div>
            <div className="masthead-heading text-uppercase" id="heading">
              предлагаме ви място, което да наречете свой дом!
            </div>
            <a
              className="btn btn-primary btn-xl text-uppercase"
              href="#services"
            >
              Искам да знам повече
            </a>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
