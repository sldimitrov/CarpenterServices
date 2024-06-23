export default function About() {
  return (
    <section className="page-section" id="about">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Относно нас</h2>
          <h3 className="section-subheading text-muted">
            "Едно от нещата, които ни свързват като семейство, е чувството за
            хумор."
          </h3>
        </div>
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <img
                className="photo rounded-circle img-fluid"
                src="assets/img/about/beggining.jpg"
                id="first"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>Март 2011</h4>
                <h4 className="subheading">Вдъхновяващ старт</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Нашето начало е изпълнено със страст. От нашите малки
                  произведения на изкуството ние се вдъхновихме. Това ни накара
                  да експериментираме със своите собствени възможности и
                  успяхме!
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img
                className="photo rounded-circle img-fluid"
                src="assets/img/about/real_house.jpg"
                id="second"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>March 2015</h4>
                <h4 className="subheading">Откриваме пътя си</h4>
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
                id="third"
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
                id="forth"
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
