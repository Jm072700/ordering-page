import {
    button,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
  } from "mdb-react-ui-kit";
import Footer from './Footer.js'
import { Link } from 'react-router-dom';
const Payment = () => {
  return (
    <MDBContainer
    className="py-5"
    fluid

  >
    <MDBRow className=" d-flex justify-content-center">
      <MDBCol md="10" lg="8" xl="5">
        <MDBCard className="rounded-3">
          <MDBCardBody className="p-4">
            <div className="text-center mb-4">
              <h3>Settings</h3>
              <h6>Payment</h6>
            </div>
            <p className="fw-bold mb-4 pb-2">Saved cards:</p>
            <div className="d-flex flex-row align-items-center mb-4 pb-1">
              <img
                className="img-fluid"
                src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
              alt="asdasfg"/>
              <div className="flex-fill mx-3">
                <div className="form-outline">
                  <MDBInput
                    label="Card Number"
                    id="form1"
                    type="text"
                    size="lg"
                  />
                </div>
              </div>
              <a href="#!">Remove card</a>
            </div>
            <div className="d-flex flex-row align-items-center mb-4 pb-1">
              <img
                className="img-fluid"
                src="https://img.icons8.com/color/48/000000/visa.png"
              alt="asavlkd"/>
              <div className="flex-fill mx-3">
                <div className="form-outline">
                  <MDBInput
                    label="Card Number"
                    id="form2"
                    type="text"
                    size="lg"
                  />
                </div>
              </div>
              <a href="#!">Remove card</a>
            </div>
            <p className="fw-bold mb-4">Add new card:</p>
            <MDBInput
              label="Cardholder's Name"
              id="form3"
              type="text"
              size="lg"
            />
            <MDBRow className="my-4">
              <MDBCol size="7">
                <MDBInput
                  label="Card Number"
                  id="form4"
                  type="text"
                  size="lg"
                />
              </MDBCol>
              <MDBCol size="3">
                <MDBInput
                  label="Expire"
                  id="form5"
                  type="password"
                  size="lg"
                  placeholder="MM/YYYY"
                />
              </MDBCol>
              <MDBCol size="2">
                <MDBInput
                  label="CVV"
                  id="form6"
                  type="password"
                  size="lg"
                  placeholder="CVV"
                />
              </MDBCol>
            <MDBCol size='6'>
            <Link to={'/'}>
            <button className="btn btn-danger lg">
              Cancel
            </button>
            </Link>
            </MDBCol>
            <MDBCol size='6' className="text-end">
            <button className="btn btn-success">
              Add card
            </button>
            </MDBCol>
            
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    <Footer/>
  </MDBContainer>
  )
}

export default Payment