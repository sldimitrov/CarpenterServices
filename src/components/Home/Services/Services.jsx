import housesIcon from "../../../pictures/house.png";
import shedIcon from "../../../pictures/shed.png";
import shelterIcon from "../../../pictures/shelter.png";

export default function Services() {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">Услуги</h2>
          <h3 className="section-subheading text-muted">
            Ние сме фирма, която е специализирала в това да построява леки,
            здрави и устойчиви дървени конструкции. Можете да разчитате на нас
            за всичко от навес до къща на няколко етажа.
          </h3>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <div className="icon-container">
              <form className="icon-bg">
                <img src={shedIcon} alt="gear"></img>
              </form>
            </div>
            <h4 className="my-3">Беседки</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chat-left-heart"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
            </svg>
            <p className="text-muted">
              Дървени беседки, които да съберат цялото да Ви събират с
              най-близките Ви!
            </p>
            <p className="text-muted">
              Елегантни и неповторими нашите, нашите беседки пленяват окото.
            </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <div className="icon-container">
                <form className="icon-bg">
                  <img src={housesIcon} alt="gear"></img>
                </form>
              </div>
            </span>
            <h4 className="my-3">Дървени къщи</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-houses"
              viewBox="0 0 16 16"
            >
              <path d="M5.793 1a1 1 0 0 1 1.414 0l.647.646a.5.5 0 1 1-.708.708L6.5 1.707 2 6.207V12.5a.5.5 0 0 0 .5.5.5.5 0 0 1 0 1A1.5 1.5 0 0 1 1 12.5V7.207l-.146.147a.5.5 0 0 1-.708-.708zm3 1a1 1 0 0 1 1.414 0L12 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l1.854 1.853a.5.5 0 0 1-.708.708L15 8.207V13.5a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 4 13.5V8.207l-.146.147a.5.5 0 1 1-.708-.708zm.707.707L5 7.207V13.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5V7.207z" />
            </svg>
            <br />
            <p className="text-muted">
              Сглобяеми, леки и устойчиви дървени конструции.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-chat-square-heart"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path d="M8 3.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
            </svg>
            <br />
            <p className="text-muted">По-устойчиви на природни бедствия.</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-fast-forward"
              viewBox="0 0 16 16"
            >
              <path d="M6.804 8 1 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696z" />
              <path d="M14.804 8 9 4.633v6.734zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696z" />
            </svg>
            <br />
            <p className="text-muted">
              Кратък срок за изпълнение от 3 до 5 пъти в сравнение с монолитно
              изградените конструкции.
            </p>
            <p className="text-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-recycle"
                viewBox="0 0 16 16"
              >
                <path d="M9.302 1.256a1.5 1.5 0 0 0-2.604 0l-1.704 2.98a.5.5 0 0 0 .869.497l1.703-2.981a.5.5 0 0 1 .868 0l2.54 4.444-1.256-.337a.5.5 0 1 0-.26.966l2.415.647a.5.5 0 0 0 .613-.353l.647-2.415a.5.5 0 1 0-.966-.259l-.333 1.242zM2.973 7.773l-1.255.337a.5.5 0 1 1-.26-.966l2.416-.647a.5.5 0 0 1 .612.353l.647 2.415a.5.5 0 0 1-.966.259l-.333-1.242-2.545 4.454a.5.5 0 0 0 .434.748H5a.5.5 0 0 1 0 1H1.723A1.5 1.5 0 0 1 .421 12.24zm10.89 1.463a.5.5 0 1 0-.868.496l1.716 3.004a.5.5 0 0 1-.434.748h-5.57l.647-.646a.5.5 0 1 0-.708-.707l-1.5 1.5a.5.5 0 0 0 0 .707l1.5 1.5a.5.5 0 1 0 .708-.707l-.647-.647h5.57a1.5 1.5 0 0 0 1.302-2.244z" />
              </svg>
              <br />
              Енергийно ефективни. Висока енергийна ефективност, която намалява
              разходите за електричество с до 60%.
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cast"
              viewBox="0 0 16 16"
            >
              <path d="m7.646 9.354-3.792 3.792a.5.5 0 0 0 .353.854h7.586a.5.5 0 0 0 .354-.854L8.354 9.354a.5.5 0 0 0-.708 0" />
              <path d="M11.414 11H14.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-13a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h3.086l-1 1H1.5A1.5 1.5 0 0 1 0 10.5v-7A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v7a1.5 1.5 0 0 1-1.5 1.5h-2.086z" />
            </svg>
            <br />
            <p className="text-muted">
              Индивидуални проекти с ниска себестойност на проекта, поради
              кратките срокове за изпълнение.
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime quam architecto quo inventore harum ex magni, dicta
              impedit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
