import firstHouse from "../../../../pictures/img/modern_house.jpg";
import secondHouse from "../../../../pictures/img/portfolio/second/finish.jpg";
import thirdHouse from "../../../../pictures/img/portfolio/third/41.jpg";

export default function Houses() {
  return (
    <>
      <h2 className="section-subheading text-muted subheading" id="bungalow">
        Къщи
      </h2>

      <div className="col-lg-4 col-sm-6 mb-4">
        {/* Portfolio item 1*/}
        <div className="portfolio-item">
          <a
            className="portfolio-link"
            data-bs-toggle="modal"
            href="#portfolioModal1"
          >
            <div className="portfolio-hover portfolio">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid modal-img"
              src={firstHouse}
              alt="бяла дървена къща на два етажа"
            />
          </a>
          <div className="portfolio-caption caption">
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
            <div className="portfolio-hover portfolio">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid modal-img"
              src={secondHouse}
              alt="огромна дървена със стабилна конструкция, 4 спални и още"
            />
          </a>
          <div className="portfolio-caption caption">
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
            <div className="portfolio-hover portfolio">
              <div className="portfolio-hover-content">
                <i className="fas fa-plus fa-3x" />
              </div>
            </div>
            <img
              className="img-fluid modal-img"
              src={thirdHouse}
              alt="дървена къща с басейн отпред, веранда, параклис, беседка"
            />
          </a>
          <div className="portfolio-caption caption">
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
