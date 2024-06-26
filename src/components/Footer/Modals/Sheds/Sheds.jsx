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
                    <h2 className="text-uppercase">Огромен навес</h2>
                    <p className="item-intro text-muted">
                      За целия китайски народ
                    </p>
                    <div id="carouselExampleCaptions" class="carousel slide">
                      <div class="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleCaptions"
                          data-bs-slide-to="0"
                          class="active"
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
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img
                            src="assets/img/portfolio/forth/finished.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5 className="pale-text">Завършен етап</h5>
                            <p className="pale-text">
                              Натиснете вдясно, за да видите още снимки.
                            </p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img
                            src="assets/img/portfolio/forth/0.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>1/8</h5>
                            <p>Снимка преди започване на конструкцията.</p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img
                            src="assets/img/portfolio/forth/1.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>2/8</h5>
                            <p>
                              Изграден е скелета на конструкцията от напречни
                              греди. Дължината му надминава 10 метра.
                            </p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img
                            src="assets/img/portfolio/forth/2.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>3/8</h5>
                            <p>Снимано от друг ъгъл.</p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img
                            src="assets/img/portfolio/forth/3.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>4/8</h5>
                            <p>Конструкцията е укрепена с конзоли.</p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img
                            src="assets/img/portfolio/forth/4.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>5/8</h5>
                            <p>Тавана се наребрява.</p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img
                            src="assets/img/portfolio/forth/5.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>6/8</h5>
                            <p>След наковаването на ламперията.</p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img
                            src="assets/img/portfolio/forth/6.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>7/8</h5>
                            <p></p>
                          </div>
                        </div>
                        <div class="carousel-item">
                          <img
                            src="assets/img/portfolio/forth/7.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                          <div class="carousel-caption d-none d-md-block">
                            <h5>8/8</h5>
                            <p></p>
                          </div>
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
                    </p>
                    <ul className="list-inline">
                      <li>
                        <strong>Клиенти:</strong>
                        от Карнобат
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
                    <h2 className="text-uppercase">
                      ,,Прекарайте време навън"
                    </h2>
                    <p className="item-intro text-muted">Приятно навесче</p>
                    <div
                      id="carouselExampleIndicators"
                      class="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-indicators">
                        <button
                          type="button"
                          data-bs-target="#carouselExampleIndicators"
                          data-bs-slide-to="0"
                          class="active"
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
                      </div>
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img
                            src="assets/img/portfolio/fifth/18.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            src="assets/img/portfolio/fifth/1.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                        </div>
                        <div class="carousel-item">
                          <img
                            src="assets/img/portfolio/fifth/2.jpg"
                            class="d-block w-100"
                            alt="..."
                          />
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                    <p>
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
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
                      Use this area to describe your project. Lorem ipsum dolor
                      sit amet, consectetur adipisicing elit. Est blanditiis
                      dolorem culpa incidunt minus dignissimos deserunt repellat
                      aperiam quasi sunt officia expedita beatae cupiditate,
                      maiores repudiandae, nostrum, reiciendis facere nemo!
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
        {/* Portfolio item 7 modal popup*/}
        <div
          className="portfolio-modal modal fade"
          id="portfolioModal7"
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
