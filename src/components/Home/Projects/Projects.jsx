import Houses from "./Houses";
import Sheds from "./Sheds";
import Bowers from "./Bowers";

export default function Projects() {
  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Проекти</h2>
          <h2 className="section-subheading text-muted">Къщи</h2>
        </div>
        <div className="row">
          <Houses />
          <Sheds />
          <Bowers />
          {/* NAVESI */}
        </div>
      </div>
    </section>
  );
}
