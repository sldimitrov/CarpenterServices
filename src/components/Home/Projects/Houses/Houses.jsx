export default function Houses() {
  return (
    <>
      <div className="col-lg-4 col-sm-6 mb-4">
        {/* Portfolio item 1*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal1"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/first/house_1.jpg"
              alt="..."
            />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">,,Норвежка перла"</div>
            <div className="portfolio-caption-subheading text-muted">
              Стилна двуетажна къща
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mb-4">
        {/* Portfolio item 2*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal3"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/second/finish.jpg"
              alt="..."
            />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">,,Пазителите"</div>
            <div className="portfolio-caption-subheading text-muted">
              Великолепна, двуетажна къща
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mb-4">
        {/* Portfolio item 3*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal2"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/third/41.jpg"
              alt="..."
            />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">,,Мечтан дом"</div>
            <div className="portfolio-caption-subheading text-muted">
              Дървена къща с беседка и параклис
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
