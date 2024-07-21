export default function Sheds() {
  return (
    <>
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
                    <h2 id="first">Огромен навес</h2>
                    <p className="item-intro text-muted">
                      За целия китайски народ
                    </p>
                    <div
                      id="carouselExampleCaptions"
                      className="carousel slide"
                    >
                      <div className="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="0"
                          className="active"
                          aria-current="true"
                          aria-label="Slide 1"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="1"
                          aria-label="Slide 2"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="2"
                          aria-label="Slide 3"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="3"
                          aria-label="Slide 4"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="4"
                          aria-label="Slide 5"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="5"
                          aria-label="Slide 6"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="6"
                          aria-label="Slide 7"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="7"
                          aria-label="Slide 8"
                        ></button>
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="8"
                          aria-label="Slide 9"
                        ></button>
                      </div>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            src="assets/img/portfolio/forth/finished.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5 className="pale-text">Завършен етап</h5>
                            <p className="pale-text">
                              Натиснете вдясно, за да видите още снимки.
                            </p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/forth/0.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>1/8</h5>
                            <p>Снимка преди започване на конструкцията.</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/forth/1.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>2/8</h5>
                            <p>
                              Изграден е скелета на конструкцията от напречни
                              греди. Дължината му надминава 10 метра.
                            </p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/forth/2.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>3/8</h5>
                            <p>Снимано от друг ъгъл.</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/forth/3.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>4/8</h5>
                            <p>Конструкцията е укрепена с конзоли.</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/forth/4.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>5/8</h5>
                            <p>Тавана се наребрява.</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/forth/5.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>6/8</h5>
                            <p>След наковаването на ламперията.</p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/forth/6.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>7/8</h5>
                            <p></p>
                          </div>
                        </div>
                        <div className="carousel-item">
                          <img
                            src="assets/img/portfolio/forth/7.jpg"
                            className="d-block w-100"
                            alt="..."
                          />
                          <div className="carousel-caption d-none d-md-block">
                            <h5>8/8</h5>
                            <p></p>
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
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
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                    <p>
                      Тук Ви предвавяме немалък навес с осн греди 25x25см и
                      конструкцията 8x16см ребра. Дълъг е 12метра. Като
                      допълнение е изградена затворена камина.
                    </p>
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
                    <h2 id="first">,,Прекарайте време навън"</h2>
                    <p className="item-intro text-muted">Приятно навесче</p>
                    <div className="image-container">
                      <img
                        src="assets/img/portfolio/fifth/1.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/4.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/6.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/8.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/9.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/10.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/11.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/12.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/13.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/18.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/7.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/16.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/17.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/15.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/19.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/20.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/2.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/3.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/5.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/fifth/7.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                    </div>
                    <p>
                      Клиентът ни искаше да се отърве от лятната горещина. Ние
                      му предложихме решение в лицето на този страхотен и уютен
                      навес. Съчетание от старобългарски родопски таван и
                      модерен екстериор, които придава неотличим завършек.
                    </p>
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
                    <h2 id="first">Заведение ,,Бекира"</h2>
                    <p className="item-intro text-muted">
                      Скоро отваря врати...
                    </p>
                    <div className="image-container">
                      <img
                        src="assets/img/portfolio/sixth/1.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/sixth/2.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/sixth/3.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/sixth/1.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/sixth/5.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/sixth/6.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/sixth/7.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                      <img
                        src="assets/img/portfolio/sixth/8.jpg"
                        alt="carousel-1"
                        className="slide"
                      />
                    </div>
                    <p>Проектът не е завършен...</p>
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
