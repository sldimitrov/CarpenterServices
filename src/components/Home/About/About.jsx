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
                <h4>2011</h4>
                <h4 className="subheading">Вдъхновяващ старт!</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Започваме като малък семеен бизнес с много страст. От малките
                  ни произведения на изкуството ние се вдъхновихме. Това ни
                  накара да експериментираме със своите собствени възможности и
                  <strong> покорим нови върхове</strong>!
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img
                className="photo rounded-circle img-fluid"
                src="assets/img/naves3.jpg"
                id="second"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2014</h4>
                <h4 className="subheading">Откриваме пътя си!</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Няколко години по-късно ние се насочваме към изграждането на
                  олекотени дървени конструкции. Места на които да прекарвате
                  времето си с любимите за Вас хора. Това са нашите:{" "}
                  <strong>беседки, навеси, бунгала и Къщи!</strong>
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
                <h4>2018</h4>
                <h4 className="subheading">Специализираме в областта!</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  За нас създаването на Вашите домове не е просто работа. Това е
                  нашето <strong>призвание</strong>! През 2018 със
                  <strong> стотици доволни клиенти</strong> до нас ние
                  продължаваме да градим все <br />
                  по-нависоко!
                </p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <img
                className="photo rounded-circle img-fluid"
                src="assets/img/latest.jpg"
                id="forth"
                alt="..."
              />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2024</h4>
                <h4 className="subheading">Сбъдваме мечти!</h4>
              </div>
              <div className="timeline-body">
                <p className="text-muted">
                  Помогнахме на стотици семейства в реализацията на къщи, които
                  те самите превърнаха в домове. Вложихме сърце и душа, за да
                  предоставим на нашите клиенти най-високо качество на услугите!
                  Екипът ни е готов да създаде и Вашия мечтан дом!
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
