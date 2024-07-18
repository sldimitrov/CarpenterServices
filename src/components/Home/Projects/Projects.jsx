import Houses from "./Houses";
import Sheds from "./Sheds";
import Bowers from "./Bowers";
import Tables from "./Tables";
import Bungalows from "./Bungalows";
import Stairs from "./Stairs";

export default function Projects() {
  return (
    <section className="page-section bg-light" id="portfolio">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Проекти</h2>
        </div>
        <div className="row">
          <Houses />
          <Sheds />
          <Bowers />
          <Tables />
          <Bungalows />
          <Stairs />
        </div>
      </div>
    </section>
  );
}
