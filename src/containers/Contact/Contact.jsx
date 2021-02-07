import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <section className="content">
            <h1 className="content-header text-center">Contact</h1>
            <hr />
            <form action="https://formspree.io/f/xleovokv" method="POST">
              <div className="form-row">
                <div className="col-md-9 contact-fields mt-3">
                  <label for="formGroupExampleInput">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="col-md-9 contact-fields mt-4">
                  <label for="formGroupExampleInput2">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="col-md-9 contact-fields mt-4">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="col-md-8 contact-fields">
                  <button
                    type="submit"
                    className="btn btn-primary submit-button mt-4"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
