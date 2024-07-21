export default function Bowers() {
  return (
    <>
      <h1
        className="headings section-subheading text-muted subheading"
        id="bowers"
      >
        Беседки
      </h1>
      <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
        {/* Portfolio item 7*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal7"
          >
            <div className="portfolio-hover portfolio">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid modal-img"
              src="assets/img/portfolio/seventh/shed_3.jpg"
              alt="..."
            />
          </a>
          <div className="portfolio-caption caption">
            <div className="portfolio-caption-heading">Бистро ,,Градина"</div>
            <div className="portfolio-caption-subheading text-muted">
              Празнична зала
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
            <div className="portfolio-hover portfolio">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid modal-img"
              src="assets/img/portfolio/eight/24.jpg"
              alt="..."
            />
          </a>
          <div className="portfolio-caption caption">
            <div className="portfolio-caption-heading">Медна беседка</div>
            <div className="portfolio-caption-subheading text-muted">
              За истински ценители
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
            <div className="portfolio-hover portfolio">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid modal-img"
              src="assets/img/portfolio/nine/1.jpg"
              alt="..."
            />
          </a>
          <div className="portfolio-caption caption">
            <div className="portfolio-caption-heading">Заведение ,,Аетос"</div>
            <div className="portfolio-caption-subheading text-muted">
              Прекрасен интериор с подслон
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
