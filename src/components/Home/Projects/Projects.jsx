export default function Projects() {
  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Проекти</h2>
          <h2 className="section-subheading text-muted">Къщи</h2>
        </div>
        <div className="row">
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
                <div className="portfolio-caption-heading">Двуетажна къща</div>
                <div className="portfolio-caption-subheading text-muted">
                  Норвежка перла
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
                  src="assets/img/portfolio/shed_3.jpg"
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">
                  Беседка за събирания
                </div>
                <div className="portfolio-caption-subheading text-muted">
                  Бистро ,,Градина"
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
                  src="assets/img/portfolio/modern_2.jpg"
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Модерна къща</div>
                <div className="portfolio-caption-subheading text-muted">
                  Естетика
                </div>
              </div>
            </div>
          </div>
          <h2 className="section-subheading text-muted subheading">Беседки</h2>
          <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
            {/* Portfolio item 4*/}
            <div className="portfolio-item">
              <a
                className="portfolio-link"
                data-bs-toggle="modal"
                href="#portfolioModal4"
              >
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/bekira_4.jpg"
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Огромен навес</div>
                <div className="portfolio-caption-subheading text-muted">
                  Заведение ,,Бекира"
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
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/table_5.jpg"
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">
                  Маса с епоксидна смола
                </div>
                <div className="portfolio-caption-subheading text-muted">
                  Майсторска изработка
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
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x" />
                  </div>
                </div>
                <img
                  className="img-fluid"
                  src="assets/img/portfolio/big_shed_6.jpg"
                  alt="..."
                />
              </a>
              <div className="portfolio-caption">
                <div className="portfolio-caption-heading">Беседка</div>
                <div className="portfolio-caption-subheading text-muted">
                  За целия китайски народ
                </div>
              </div>
            </div>
          </div>
          <h2 className="section-subheading text-muted subheading">Навеси</h2>
        </div>
      </div>
    </section>
  );
}
