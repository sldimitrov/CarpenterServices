export default function Bowers() {
  return (
    <>
      <h2 className="section-subheading text-muted subheading">Беседки</h2>
      <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
        {/* Portfolio item 7*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal7"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/forth/finished.jpg"
              alt="..."
            />
          </a>
          <div className="portfolio-caption">
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
        {/* Portfolio item 8*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal8"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/fifth/18.jpg"
              id="shed-photo"
              alt="..."
            />
          </a>
          <div className="portfolio-caption">
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
        {/* Portfolio item 9*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal9"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/sixth/bekira.jpg"
              alt="..."
            />
          </a>
          <div className="portfolio-caption">
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
