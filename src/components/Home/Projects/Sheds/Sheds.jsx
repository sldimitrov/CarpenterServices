export default function Sheds() {
  return (
    <>
      <h2
        className="headings section-subheading text-muted subheading"
        id="sheds"
      >
        Навеси
      </h2>
      <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
        {/* Portfolio item 4*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal4"
          >
            <div className="portfolio-hover portfolio">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid modal-img"
              src="assets/img/portfolio/forth/finished.jpg"
              alt="..."
            />
          </a>
          <div className="portfolio-caption caption">
            <div className="portfolio-caption-heading">
              За целия китайски народ
            </div>
            <div className="portfolio-caption-subheading text-muted">
              Огромен навес
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
        {/* Portfolio item 5*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal5"
          >
            <div className="portfolio-hover portfolio">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid modal-img"
              src="assets/img/portfolio/fifth/18.jpg"
              id="shed-photo"
              alt="..."
            />
          </a>
          <div className="portfolio-caption caption">
            <div className="portfolio-caption-heading">
              ,,Прекарайте време навън"
            </div>
            <div className="portfolio-caption-subheading text-muted">
              Приятно навесче
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        {/* Portfolio item 6*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal6"
          >
            <div className="portfolio-hover portfolio">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid modal-img"
              src="assets/img/portfolio/sixth/bekira.jpg"
              alt="..."
            />
          </a>
          <div className="portfolio-caption caption">
            <div className="portfolio-caption-heading">,,Заведение Бекира"</div>
            <div className="portfolio-caption-subheading text-muted">
              Скоро отваря врати...
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
