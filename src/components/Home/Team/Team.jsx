export default function Team() {
  return (
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
                src="assets/img/team/teodor.png"
                id="teodor-pic"
                alt="..."
              />
              <h4>Теодор Димитров</h4>
              <p className="text-muted">Изпълнителен директор</p>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.facebook.com/omgfffomgff"
                aria-label="Teodor Dimitrov Facebook Profile"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-facebook" />
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.instagram.com/teo98dor/"
                aria-label="Teodor Dimitrov Instagram Profile"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="assets/img/team/slavi-main.jpg"
                id="manager-photo"
                alt="..."
              />
              <h4>Слави Димитров</h4>
              <p className="text-muted">Управител</p>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.facebook.com/profile.php?id=100011316370240"
                aria-label="Slavi Dimitrov Facebook Profile"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-facebook" />
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.instagram.com/slavitrans1970/"
                aria-label="Slavi Dimitrov Instagram Profile"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="team-member">
              <img
                className="mx-auto rounded-circle"
                src="assets/img/team/slavi.jpg"
                id="slavi-pic"
                alt="..."
              />
              <h4>Слави Димитров</h4>
              <p className="text-muted">Софтуерен Инжинер</p>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.facebook.com/slavi.dimitrov.3551/"
                aria-label="Slavi Dimitrov Facebook Profile"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-facebook" />
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.instagram.com/sldimitrovv_/"
                aria-label="Slavi Dimitrov Instagram Profile"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="btn btn-dark btn-social mx-2"
                href="https://www.linkedin.com/in/trick-er-311982292/"
                aria-label="Slavi Dimitrov Linkedin Profile"
                rel="noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <p className="large text-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
              eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam
              corporis ea, alias ut unde.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
