import React from "react";

function Footer() {
  return (
    <>
      <div>
        {/* Footer*/}
        <footer className="footer py-4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 text-lg-start">
                Copyright © <i>Дърводелски услуги ООД</i>
              </div>

              <div className="col-lg-4 my-3 my-lg-0">
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="https://www.facebook.com/Darvodelstvo"
                  target="_blank"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  className="btn btn-dark btn-social mx-2"
                  href="https://www.instagram.com/durvodelskiuslugi/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram" />
                </a>
              </div>
              <div className="col-lg-4 text-lg-end">
                <a className="link-dark text-decoration-none me-3" href="#!">
                  0876533802
                </a>
                <a
                  className="link-dark text-decoration-none me-3"
                  href="https://github.com/sldimitrov/CarpenterServices/blob/main/LICENSE"
                >
                  License
                </a>
              </div>
            </div>
          </div>
        </footer>
        {/* Portfolio Modals*/}
        {/* Portfolio item 1 modal popup*/}
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal1"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal">
                <img src="assets/img/close-icon.svg" alt="Close modal" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">Двуетажна къща</h2>
                      <p className="item-intro text-muted">Норвежка перла</p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src="assets/img/portfolio/house_1.jpg"
                        alt="..."
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>
                          <strong>Клиент:</strong>
                          Threads
                        </li>
                        <li>
                          <strong>Категория:</strong>
                          Къщи
                        </li>
                      </ul>
                      <button
                        className="btn btn-primary btn-xl text-uppercase"
                        data-bs-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-xmark me-1" />
                        Затвори проекта
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio item 2 modal popup*/}
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal3"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal">
                <img src="assets/img/close-icon.svg" alt="Close modal" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">Беседка за събирания</h2>
                      <p className="item-intro text-muted">Бистро ,,Градина"</p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src="assets/img/portfolio/shed_3.jpg"
                        alt="..."
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>
                          <strong>Клиент:</strong>
                          Бистро ,,Градина"
                        </li>
                        <li>
                          <strong>Категория:</strong>
                          Беседки
                        </li>
                      </ul>
                      <button
                        className="btn btn-primary btn-xl text-uppercase"
                        data-bs-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-xmark me-1" />
                        Затвори проекта
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio item 3 modal popup*/}
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal2"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal">
                <img src="assets/img/close-icon.svg" alt="Close modal" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">Модерна къща</h2>
                      <p className="item-intro text-muted">
                        Естетика завладява ума и пречупва представите
                      </p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src="assets/img/portfolio/modern_2.jpg"
                        alt="..."
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>
                          <strong>Клиент:</strong>
                          Explore
                        </li>
                        <li>
                          <strong>Категория:</strong>
                          Къщи
                        </li>
                      </ul>
                      <button
                        className="btn btn-primary btn-xl text-uppercase"
                        data-bs-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-xmark me-1" />
                        Затвори проекта
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio item 4 modal popup*/}
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal4"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal">
                <img src="assets/img/close-icon.svg" alt="Close modal" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">Огромен навес</h2>
                      <p className="item-intro text-muted">
                        Заведение ,,Бекира" скоро отваря врати!
                      </p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src="assets/img/portfolio/bekira_4.jpg"
                        alt="big wooden shed"
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>
                          <strong>Клиенти:</strong>
                          Стефанови ООД
                        </li>
                        <li>
                          <strong>Категория:</strong>
                          Навеси
                        </li>
                      </ul>
                      <button
                        className="btn btn-primary btn-xl text-uppercase"
                        data-bs-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-xmark me-1" />
                        Затвори проекта
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio item 5 modal popup*/}
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal5"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal">
                <img src="assets/img/close-icon.svg" alt="Close modal" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">Творческа маса</h2>
                      <p className="item-intro text-muted">
                        Майсторска изработка на маса с епоксидна смола.
                      </p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src="assets/img/portfolio/table_5.jpg"
                        alt="..."
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>
                          <strong>Състояние: Продава се!</strong>
                        </li>
                        <li>
                          <strong>Категория:</strong>
                          Маси с епоксидна смола
                        </li>
                      </ul>
                      <button
                        className="btn btn-primary btn-xl text-uppercase"
                        data-bs-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-xmark me-1" />
                        Затвори проекта
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Portfolio item 6 modal popup*/}
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal6"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-bs-dismiss="modal">
                <img src="assets/img/close-icon.svg" alt="Close modal" />
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      {/* Project details*/}
                      <h2 className="text-uppercase">Беседка</h2>
                      <p className="item-intro text-muted">
                        За целия китайски народ
                      </p>
                      <img
                        className="img-fluid d-block mx-auto"
                        src="assets/img/portfolio/big_shed_6.jpg"
                        alt="..."
                      />
                      <p>
                        Use this area to describe your project. Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Est
                        blanditiis dolorem culpa incidunt minus dignissimos
                        deserunt repellat aperiam quasi sunt officia expedita
                        beatae cupiditate, maiores repudiandae, nostrum,
                        reiciendis facere nemo!
                      </p>
                      <ul className="list-inline">
                        <li>
                          <strong>Клиент:</strong>
                          Window
                        </li>
                        <li>
                          <strong>Категория:</strong>
                          Photography
                        </li>
                      </ul>
                      <button
                        className="btn btn-primary btn-xl text-uppercase"
                        data-bs-dismiss="modal"
                        type="button"
                      >
                        <i className="fas fa-xmark me-1" />
                        Затвори проекта
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
