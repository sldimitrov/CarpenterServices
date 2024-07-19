export default function Bungalows() {
  return (
    <>
      <h1
        className="headings section-subheading text-muted subheading"
        id="bungalows"
      >
        Бунгала
      </h1>
      <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
        {/* Portfolio item 13*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal13"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/thirteen/1.jpg"
              alt="..."
            />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">
              ,,Всичко тук е в бяло"
            </div>
            <div className="portfolio-caption-subheading text-muted">
              Освен морето
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
        {/* Portfolio item 14*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal14"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/fourteen/1.jpg"
              alt="..."
            />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">,,Къщата на Хобит"</div>
            <div className="portfolio-caption-subheading text-muted">
              С тематични колони
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        {/* Portfolio item 15*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal15"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/fifteen/1.jpg"
              alt="..."
            />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">,,За младоженците"</div>
            <div className="portfolio-caption-subheading text-muted">
              На два етажа
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
