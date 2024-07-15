export default function Houses() {
  return (
    <>
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
                    <h2 id="first">Двуетажна къща</h2>
                    <p className="item-intro text-muted">Норвежка перла</p>
                    {/* <img
                        className="img-fluid d-block mx-auto"
                        src="assets/img/portfolio/house_1.jpg"
                        alt="..."
                      /> */}
                    <div id="carouselExample" className="carousel slide">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="assets/img/portfolio/first/house_1.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/1.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>

                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/3.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/4.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/5.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/6.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/7.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/9.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/12.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/13.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/14.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/15.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/16.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/17.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/18.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/19.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/20.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/21.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/22.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/23.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/first/24.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExample"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>

                    <p>Това място ще се използва за описание на проекта. </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Клиент:</strong>
                        #Човек
                      </li>
                      <li>
                        <strong>Категория:</strong>
                        Къщи
                      </li>
                      <li>
                        <strong>Квадратура:</strong>
                        #?
                      </li>
                      <li>
                        <strong>Изолация:</strong>
                        #?
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
                    <h2 id="first">Двуетажна къща</h2>
                    <p className="item-intro text-muted">Норвежка перла</p>
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="3"
                          aria-label="Slide 4"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="4"
                          aria-label="Slide 5"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="5"
                          aria-label="Slide 6"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="6"
                          aria-label="Slide 7"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="7"
                          aria-label="Slide 8"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="8"
                          aria-label="Slide 9"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="9"
                          aria-label="Slide 10"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="10"
                          aria-label="Slide 11"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="11"
                          aria-label="Slide 12"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="assets/img/portfolio/second/finish.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/second/1.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/second/2.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/second/3.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/second/4.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/second/5.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/second/6.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/second/7.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/second/8.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/second/9.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/second/10.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/second/11.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <p>Това място ще се използва за описание на проекта. </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Клиент:</strong>
                        #Човек
                      </li>
                      <li>
                        <strong>Категория:</strong>
                        Къщи
                      </li>
                      <li>
                        <strong>Квадратура:</strong>
                        #?
                      </li>
                      <li>
                        <strong>Изолация:</strong>
                        #?
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
                    <h2 id="first">Модерна къща</h2>
                    <p className="item-intro text-muted">
                      Естетика завладява ума и пречупва представите
                    </p>
                    <div
                      id="carouselExampleControls"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="assets/img/portfolio/third/1.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/2.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/3.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/4.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/5.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/6.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/8.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/9.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/10.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/12.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/13.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/14.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/15.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/16.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/17.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/18.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/19.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/20.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/21.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/22.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/23.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/25.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/26.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/27.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/28.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/29.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/30.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/31.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/32.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        v
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/33.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/34.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/35.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/36.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/37.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/38.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/39.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/40.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/41.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/42.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/43.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/44.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/45.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/46.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/third/47.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <p>Това място ще се използва за описание на проекта. </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Клиент:</strong>
                        #Човек
                      </li>
                      <li>
                        <strong>Категория:</strong>
                        Къщи
                      </li>
                      <li>
                        <strong>Квадратура:</strong>
                        #?
                      </li>
                      <li>
                        <strong>Изолация:</strong>
                        #?
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
    </>
  );
}
