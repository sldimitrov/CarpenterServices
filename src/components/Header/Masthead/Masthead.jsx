export default function Masthead() {
  return (
    <>
      {/* Masthead*/}
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading" id="firm-name">
            Дърводелски услуги Бургас-Айтос
          </div>
          <div className="masthead-heading text-uppercase" id="heading">
            предлагаме ви място, което да наречете свой дом!
          </div>
          <a className="btn btn-primary btn-xl text-uppercase" href="#services">
            Искам да знам повече
          </a>
        </div>
      </header>
    </>
  );
}
