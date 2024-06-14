import copyIcon from "../../../pictures/copy-image.png";
import handleCopyText from "../../../services/handleCopyText";

export default function Contacts() {
  return (
    <section className="page-section" id="contact">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Свържете се с нас</h2>
          <div class="contact">
            <h3 className="subheading">Като ни се обадите на:</h3>
            <div id="number">
              <h4 id="contact-number">0876533802</h4>
              <img src={copyIcon} id="copy-icon" onClick={handleCopyText}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
