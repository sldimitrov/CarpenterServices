export default function Masthead() {
  return (
    <>
      {/* Masthead*/}
      <header className="masthead">
        <div className="container">
          <div className="masthead-subheading sm:text-sm" id="firm-name">
            <p className="sm:text-base">Дърводелски услуги Бургас-Айтос</p>
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
