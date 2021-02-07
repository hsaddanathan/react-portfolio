import React from "react";

const Contact = () => {
  
  
    return (
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <section class="content">
            <h1 class="content-header">Contact</h1>
            <hr />
            <form>
              <div class="form-row">
                <div class="col-md-9 contact-fields">
                  <label for="formGroupExampleInput">Name</label>
                  <input type="text" class="form-control" placeholder="Name" />
                </div>
                <div class="col-md-9 contact-fields">
                  <label for="formGroupExampleInput2">Email</label>
                  <input type="text" class="form-control" placeholder="Email" />
                </div>
                <div class="col-md-9 contact-fields">
                  <label for="exampleFormControlTextarea1">Message</label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div class="col-md-8 contact-fields">
                  <button type="submit" class="btn btn-primary submit-button">
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
