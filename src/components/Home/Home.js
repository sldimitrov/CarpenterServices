import React from "react";
import housesIcon from "../../pictures/house.png";
import shedIcon from "../../pictures/shed.png";
import shelterIcon from "../../pictures/shelter.png";

function Home() {
  return (
    <>
      <div>
        {/* Services*/}
        <section className="page-section" id="services">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Услуги</h2>
              <h3 className="section-subheading text-muted">
                Ние сме фирма, която е специализирала в това да построява леки,
                здрави и устойчиви дървени конструкции. Можете да разчитате на
                нас за всичко от навес до къща на няколко етажа.
              </h3>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <div className="icon-container">
                    <form className="icon-bg">
                      <img src={housesIcon} alt="gear"></img>
                    </form>
                  </div>
                </span>
                <h4 className="my-3">Дървени къщи</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div className="col-md-4">
                <div className="icon-container">
                  <form className="icon-bg">
                    <img src={shedIcon} alt="gear"></img>
                  </form>
                </div>
                <h4 className="my-3">Беседки</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
              <div className="col-md-4">
                <div className="icon-container">
                  <form className="icon-bg">
                    <img src={shelterIcon} alt="gear"></img>
                  </form>
                </div>
                <h4 className="my-3">Навеси</h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Minima maxime quam architecto quo inventore harum ex magni,
                  dicta impedit.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Portfolio Grid*/}
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Проекти</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
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
                      src="assets/img/portfolio/house_1.jpg"
                      alt="..."
                    />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">
                      Двуетажна къща
                    </div>
                    <div className="portfolio-caption-subheading text-muted">
                      Норвежка перла
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
                {/* Portfolio item 2*/}
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
                    <div className="portfolio-caption-heading">
                      Модерна къща
                    </div>
                    <div className="portfolio-caption-subheading text-muted">
                      Естетика
                    </div>
                  </div>
                </div>
              </div>

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
                    <div className="portfolio-caption-heading">
                      Огромен навес
                    </div>
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
            </div>
          </div>
        </section>
        {/* About*/}
        <section className="page-section" id="about">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Относно</h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img
                    className="photo rounded-circle img-fluid"
                    src="assets/img/about/beggining.jpg"
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2009-2011</h4>
                    <h4 className="subheading">Our Humble Beginnings</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt ut voluptatum eius sapiente, totam reiciendis
                      temporibus qui quibusdam, recusandae sit vero unde, sed,
                      incidunt et ea quo dolore laudantium consectetur!
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="photo rounded-circle img-fluid"
                    src="assets/img/about/real_house.jpg"
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>March 2011</h4>
                    <h4 className="subheading">An Agency is Born</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt ut voluptatum eius sapiente, totam reiciendis
                      temporibus qui quibusdam, recusandae sit vero unde, sed,
                      incidunt et ea quo dolore laudantium consectetur!
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <div className="timeline-image">
                  <img
                    className="photo rounded-circle img-fluid"
                    src="assets/img/about/big_projects.jpg"
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>December 2015</h4>
                    <h4 className="subheading">Transition to Full Service</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt ut voluptatum eius sapiente, totam reiciendis
                      temporibus qui quibusdam, recusandae sit vero unde, sed,
                      incidunt et ea quo dolore laudantium consectetur!
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <img
                    className="photo rounded-circle img-fluid"
                    src="assets/img/about/today.jpg"
                    alt="..."
                  />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>July 2020</h4>
                    <h4 className="subheading">Phase Two Expansion</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Sunt ut voluptatum eius sapiente, totam reiciendis
                      temporibus qui quibusdam, recusandae sit vero unde, sed,
                      incidunt et ea quo dolore laudantium consectetur!
                    </p>
                  </div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    Бъди Част
                    <br />
                    От Нашата
                    <br />
                    История!
                  </h4>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* Team*/}
        <section className="page-section bg-light" id="team">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">
                Нашият уникален отбор
              </h2>
              <h3 className="section-subheading text-muted">
                Е тук да ви дадете най-доброто качество, което вярваме, че
                заслужавате!
              </h3>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="assets/img/team/director.jpg"
                    alt="..."
                  />
                  <h4>Теодор Димитров</h4>
                  <p className="text-muted">Изпълнителен директор</p>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Parveen Anand Twitter Profile"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Parveen Anand Facebook Profile"
                  >
                    <i className="fab fa-facebook" />
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Parveen Anand LinkedIn Profile"
                  >
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="assets/img/team/architech.jpg"
                    alt="..."
                  />
                  <h4>Слави Димитров</h4>
                  <p className="text-muted">Главен архитект</p>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Diana Petersen Twitter Profile"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Diana Petersen Facebook Profile"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Diana Petersen LinkedIn Profile"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="team-member">
                  <img
                    className="mx-auto rounded-circle"
                    src="assets/img/team/engineer.jpg"
                    alt="..."
                  />
                  <h4>Слави Димитров</h4>
                  <p className="text-muted">Софтуерен Инжинер</p>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Larry Parker Twitter Profile"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Larry Parker Facebook Profile"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-dark btn-social mx-2"
                    href="#!"
                    aria-label="Larry Parker LinkedIn Profile"
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <p className="large text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                  totam corporis ea, alias ut unde.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact*/}
        <section className="page-section" id="contact">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">
                Свържете се с нас
              </h2>
              <h3 className="section-subheading text-muted">
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
            {/* * * * * * * * * * * * * * * **/}
            {/* * * SB Forms Contact Form * **/}
            {/* * * * * * * * * * * * * * * **/}
            {/* This form is pre-integrated with SB Forms.*/}
            {/* To make this form functional, sign up at*/}
            {/* https://startbootstrap.com/solution/contact-forms*/}
            {/* to get an API token!*/}
            <form id="contactForm" data-sb-form-api-token="API">
              <div className="row align-items-stretch mb-5">
                <div className="col-md-6">
                  <div className="form-group">
                    {/* Name input*/}
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      placeholder="Your Name *"
                      data-sb-validations="required"
                    />
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="name:required"
                    >
                      A name is required.
                    </div>
                  </div>
                  <div className="form-group">
                    {/* Email address input*/}
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      placeholder="Your Email *"
                      data-sb-validations="required,email"
                    />
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:required"
                    >
                      An email is required.
                    </div>
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:email"
                    >
                      Email is not valid.
                    </div>
                  </div>
                  <div className="form-group mb-md-0">
                    {/* Phone number input*/}
                    <input
                      className="form-control"
                      id="phone"
                      type="tel"
                      placeholder="Your Phone *"
                      data-sb-validations="required"
                    />
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="phone:required"
                    >
                      A phone number is required.
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group form-group-textarea mb-md-0">
                    {/* Message input*/}
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Your Message *"
                      data-sb-validations="required"
                      defaultValue={""}
                    />
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="message:required"
                    >
                      A message is required.
                    </div>
                  </div>
                </div>
              </div>
              {/* Submit success message*/}
              {/**/}
              {/* This is what your users will see when the form*/}
              {/* has successfully submitted*/}
              <div className="d-none" id="submitSuccessMessage">
                <div className="text-center text-white mb-3">
                  <div className="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms">
                    https://startbootstrap.com/solution/contact-forms
                  </a>
                </div>
              </div>
              {/* Submit error message*/}
              {/**/}
              {/* This is what your users will see when there is*/}
              {/* an error submitting the form*/}
              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>
              {/* Submit Button*/}
              <div className="text-center">
                <button
                  className="btn btn-primary btn-xl text-uppercase disabled"
                  id="submitButton"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
