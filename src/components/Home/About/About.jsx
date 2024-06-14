export default function About() {
  return (
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
                <h4>2011</h4>
                <h4 className="subheading">Our Humble Beginnings</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  ut voluptatum eius sapiente, totam reiciendis temporibus qui
                  quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                  dolore laudantium consectetur!
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
                <h4>March 2015</h4>
                <h4 className="subheading">An Agency is Born</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  ut voluptatum eius sapiente, totam reiciendis temporibus qui
                  quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                  dolore laudantium consectetur!
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
                <h4>December 2018</h4>
                <h4 className="subheading">Transition to Full Service</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  ut voluptatum eius sapiente, totam reiciendis temporibus qui
                  quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                  dolore laudantium consectetur!
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
                <h4>July 2024</h4>
                <h4 className="subheading">Phase Two Expansion</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
                  ut voluptatum eius sapiente, totam reiciendis temporibus qui
                  quibusdam, recusandae sit vero unde, sed, incidunt et ea quo
                  dolore laudantium consectetur!
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
  );
}
