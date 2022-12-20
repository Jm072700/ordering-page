import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRadio,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
import Footer from "./Footer.js";
import { useState } from "react";
const Feedback = () => {
  const [feedbacks, setFeedBacks] = useState([]);

  const [rate, setRate] = useState("");
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10 && rate.trim().length > 0) {
      const newFeedback = {
        text: text,
        rate: rate,
      };
      setFeedBacks([newFeedback, ...feedbacks]);
    } else {
      alert("Text should be greater than 10 chracters");
    }
  };

  console.log(feedbacks);
  return (
    <MDBContainer>
      <MDBRow className="justify-content-center">
        <MDBCol size="6">
          <MDBCard>
            <MDBCardBody>
              <div className="text-center">
                <MDBIcon far icon="file-alt mb-3 text-primary" size="4x" />
                <p>
                  <strong>Your opinion matters</strong>
                </p>
                <p>
                  Have some ideas how to improve our product?
                  <strong>Give us your feedback.</strong>
                </p>
              </div>

              <hr />

              <form className="px-4" onSubmit={handleSubmit}>
                <p className="text-center">
                  <strong>Your rating:</strong>
                </p>
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  label="Very good"
                  value="Very good"
                  className="mb-2"
                  onChange={(e) => setRate(e.target.value)}
                />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  label="Good"
                  value="Good"
                  className="mb-2"
                  onChange={(e) => setRate(e.target.value)}
                />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  label="Neutral"
                  value="Neutral"
                  className="mb-2"
                  onChange={(e) => setRate(e.target.value)}
                />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                  label="Bad"
                  value="Bad"
                  className="mb-2"
                  onChange={(e) => setRate(e.target.value)}
                />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault5"
                  label="Very bad"
                  value="Very bad"
                  className="mb-2"
                  onChange={(e) => setRate(e.target.value)}
                />
                <p className="text-center">
                  <strong>What could we improve?</strong>
                </p>

                <MDBTextArea
                  className="mb-4"
                  label="Message"
                  id="textAreaExample"
                  rows={4}
                  onChange={(e) => setText(e.target.value)}
                />
                <div className="text-end">
                  <button
                    className="btn btn-primary"
                    type="Submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
          <br></br>
          {feedbacks.map((feedback, idx) => (
            <MDBCard key={idx} className="mt-3">
              <MDBCardHeader>{feedback.rate}</MDBCardHeader>
              <MDBCardBody>
                <p>{feedback.text}</p>
              </MDBCardBody>
            </MDBCard>
          ))}
        </MDBCol>
      </MDBRow>

      <Footer />
    </MDBContainer>
  );
};

export default Feedback;
