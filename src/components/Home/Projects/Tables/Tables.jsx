export default function Tables() {
  return (
    <>
      <h2 className="section-subheading text-muted subheading" id="tables">
        Маси с епоксидна смола
      </h2>
      <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
        {/* Portfolio item 10*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal10"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/ten/1.jpg"
              alt="..."
            />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">,,Червеният дявол"</div>
            <div className="portfolio-caption-subheading text-muted">
              <strong>Продава се!</strong>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
        {/* Portfolio item 11*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal11"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/eleven/1.png"
              alt="..."
            />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">,,Синя смола"</div>
            <div className="portfolio-caption-subheading text-muted">
              Продадена
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6">
        {/* Portfolio item 12*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal12"
          >
            <div className="portfolio-hover">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid"
              src="assets/img/portfolio/twelve/3.png"
              alt="..."
            />
          </a>
          <div className="portfolio-caption">
            <div className="portfolio-caption-heading">Светеща в тъмното</div>
            <div className="portfolio-caption-subheading text-muted">
              Продадена
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
