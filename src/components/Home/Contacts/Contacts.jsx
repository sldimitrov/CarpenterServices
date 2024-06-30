import React from "react";

export default function Contacts() {
  const [result, setResult] = React.useState("");
  const [isSend, setIsSend] = React.useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "0c4c1d64-dd01-4272-98fa-5631a69c188d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setIsSend(true);
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      {/* Contact*/}
      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">
              Свържете се с нас
            </h2>
            <h3 className="section-subheading text-muted">
              Вашето мнение е важно за нас!
            </h3>
          </div>
          <form onSubmit={onSubmit}>
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  {/* Name input*/}
                  <input
                    className="form-control"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    data-sb-validations="required"
                    required
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    A name is required.
                  </div>
                </div>
                <div className="form-group">
                  {/* Email address input*/}
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    data-sb-validations="required,email"
                    required
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:required"
                  >
                    An email is required.
                  </div>
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="email:email"
                  >
                    Email is not valid.
                  </div>
                </div>
                <div className="form-group mb-md-0">
                  {/* Phone number input*/}
                  <input
                    className="form-control"
                    id="phone"
                    type="tel"
                    name="tel"
                    placeholder="Your Phone *"
                    data-sb-validations="required"
                    required
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  {/* Message input*/}
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    placeholder="Your Message *"
                    data-sb-validations="required"
                    defaultValue={""}
                    required
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="message:required"
                  >
                    A message is required.
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* Submit success message*/}
              {/**/}
              {/* This is what your users will see when the form*/}
              {/* has successfully submitted*/}
              {isSend && (
                <div className="" id="submitSuccessMessage">
                  <div className="text-center text-white mb-3">
                    <div className="fw-bolder">Form submission successful!</div>
                    <br />
                  </div>
                </div>
              )}
              {/* Submit error message*/}
              {/**/}
              {/* This is what your users will see when there is*/}
              {/* an error submitting the form*/}
              <div className="d-none" id="submitErrorMessage">
                <div className="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>
            </div>
            {/* Submit Button*/}
            <div className="text-center">
              <button
                className="btn btn-primary btn-xl text-uppercase"
                id="submitButton"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
