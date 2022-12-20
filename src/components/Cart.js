import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  MDBCardText,
} from "mdb-react-ui-kit";
import Footer from "./Footer.js";
import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import { useContext } from "react";

const Cart = () => {
  const cart = useContext(CartContext);
  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );
  return (
    <div>
      <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard
                className="card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <MDBCardBody className="p-0">
                  <MDBRow className="g-0">
                    <MDBCol lg="8">
                      <div className="p-5">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                          <MDBTypography
                            tag="h1"
                            className="fw-bold mb-0 text-black"
                          >
                            Shopping Cart
                          </MDBTypography>
                          <MDBTypography className="mb-0 text-muted">
                            {productsCount} items
                          </MDBTypography>
                        </div>

                        <hr className="my-4" />
                        {cart.items.map((item, idx) => (
                          <MDBRow
                            className="mb-4 d-flex justify-content-between align-items-center "
                            key={idx}
                          >
                            <MDBCol md="2" lg="2" xl="2">
                              <MDBCardImage
                                src={item.image}
                                fluid
                                className="rounded-3"
                                alt={item.name}
                              />
                            </MDBCol>
                            <MDBCol md="3" lg="3" xl="3">
                              <MDBTypography tag="h6" className="text-muted">
                                {item.name}
                              </MDBTypography>
                              <MDBTypography
                                tag="h6"
                                className="text-black mb-0"
                              >
                                Phone
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol
                              md="1"
                              lg="1"
                              xl="1"
                              className="d-flex align-items-center"
                            >
                              <button
                                onClick={() => cart.removeOneToCart(item.id)}
                              >
                                <MDBIcon fas icon="minus" />
                              </button>
                            </MDBCol>
                            <MDBCol
                              md="1"
                              lg="1"
                              xl="1"
                              className="d-flex align-items-center"
                            >
                              <MDBTypography tag="h6" className="mb-0">
                                {item.quantity}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol
                              md="1"
                              lg="1"
                              xl="1"
                              className="d-flex align-items-center"
                            >
                              <button
                                onClick={() => cart.addOneToCart(item.id)}
                              >
                                <MDBIcon fas icon="plus" />
                              </button>
                            </MDBCol>
                            <MDBCol md="3" lg="2" xl="2" className="text-end">
                              <MDBTypography tag="h6" className="mb-0">
                                ₱
                                {(item.quantity * item.price)
                                  .toFixed(2)
                                  .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                              </MDBTypography>
                            </MDBCol>
                            <MDBCol md="1" lg="1" xl="1" className="text-end">
                              <button
                                className="btn-outline-dark"
                                onClick={() => cart.deleteFromCart(item.id)}
                              >
                                <MDBIcon fas icon="times" />
                              </button>
                            </MDBCol>
                          </MDBRow>
                        ))}
                        <div className="pt-5">
                          <MDBTypography tag="h6" className="mb-0">
                            <Link to={"/"}>
                              <MDBCardText>
                                <MDBIcon fas icon="long-arrow-alt-left me-2" />{" "}
                                Back to shop
                              </MDBCardText>
                            </Link>
                          </MDBTypography>
                        </div>
                      </div>
                    </MDBCol>
                    <MDBCol lg="4" className="bg-grey">
                      <div className="p-5">
                        <MDBTypography
                          tag="h3"
                          className="fw-bold mb-5 mt-2 pt-1"
                        >
                          Summary
                        </MDBTypography>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-4">
                          <MDBTypography tag="h5" className="text-uppercase">
                            items {productsCount}
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            ₱{" "}
                            {cart
                              .getTotalCost()
                              .toFixed(2)
                              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                          </MDBTypography>
                        </div>

                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Shipping
                        </MDBTypography>

                        <div className="mb-4 pb-2">
                          <select
                            className="select p-2 rounded bg-grey"
                            style={{ width: "100%" }}
                          >
                            <option value="1">Standard-Delivery- ₱5.00</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                            <option value="4">Four</option>
                          </select>
                        </div>

                        <MDBTypography tag="h5" className="text-uppercase mb-3">
                          Give code
                        </MDBTypography>

                        <div className="mb-5">
                          <MDBInput size="lg" />
                        </div>

                        <hr className="my-4" />

                        <div className="d-flex justify-content-between mb-5">
                          <MDBTypography tag="h5" className="text-uppercase">
                            Total price
                          </MDBTypography>
                          <MDBTypography tag="h5">
                            ₱
                            {(cart.getTotalCost() + 5)
                              .toFixed(2)
                              .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                          </MDBTypography>
                        </div>
                        <Link to={"/payment"}>
                          <button className="btn btn-dark rounded-2">
                            CHECKOUT
                          </button>
                        </Link>
                      </div>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <Footer />
    </div>
  );
};

export default Cart;
