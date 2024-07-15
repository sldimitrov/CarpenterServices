export default function Stairs() {
  return (
    <>
      <h2
        className="headings section-subheading text-muted subheading"
        id="stairs"
      >
        Стълби
      </h2>
      <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
        {/* Portfolio item 16*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal16"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/sixteen/1.jpg"
              alt="..."
            />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">,,Водовъртеж"</div>
            <div className="portfolio-caption-subheading text-muted">
              Права стълба на няколко етажа
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
        {/* Portfolio item 17*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal17"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/seventeen/1.jpg"
              alt="..."
            />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">,,По пътя нагоре"</div>
            <div className="portfolio-caption-subheading text-muted">
              Стълба тип ,,пачи крак"
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        {/* Portfolio item 18*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal18"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/eighteen/1.jpg"
              alt="..."
            />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">,,Камуфлаж"</div>
            <div className="portfolio-caption-subheading text-muted">
              Облицовка на бетонена стълба
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
