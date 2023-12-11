import React, { useEffect } from "react";
import "../components/widget.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "../images/logo-image.svg";
import info from "../images/info-icon.svg";
import { ReactSVG } from "react-svg";
// import expand from "../images/Icon-expand.svg";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import "../components/Cart";
// import Cart from '../components/Cart';
export default function Widget(props) {
  console.log("props", props);
  const [show, setShow] = useState(true);
  const [cartItems, setCartItems] = useState([
    { id: 1, productName: "Selling Plans Ski Wax", quantity: 2, price: 100 },
    { id: 2, productName: "Gift Card", quantity: 1, price: 250 },
  ]);

  useEffect(() => {
    const handleBodyClass = () => {
      if (show) {
        document.body.classList.add("modal-open-after");
      } else {
        document.body.classList.remove("modal-open-after");
      }
    };

    handleBodyClass(); // Set initial class

    return () => {
      // Clean up and remove the class when the component unmounts
      document.body.classList.remove("modal-open-after");
    };
  }, [show]);

  // const closeModal = () => {
  //   // Close your modal logic goes here

  //   // Send a message to the parent document
  //   window.parent.postMessage("closeIframe", "*");
  // };

  const handleClose = () => {
    // closeModal();
    props.toggleComponent();
  };
  // const handleClose = () => {
  //   closeModal();
  //   setShow(false);
  // };

  // const [showModal, setShowModal] = useState(true)
  // const handleShow = () => setShow(true);

  const handleQuantityChange = (index, newQuantity) => {
    // Create a copy of the cartItems array
    const updatedCartItems = [...cartItems];

    // Update the quantity for the specific item
    updatedCartItems[index] = {
      ...updatedCartItems[index],
      quantity: newQuantity,
    };

    // Update the state with the new cartItems array
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  return (
    <>
      {show ? (
        <Modal
          style={{}}
          show={props?.showComponent}
          onHide={handleClose}
          className="main-cart-modal"
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="cart-modal">
              <div className="col">
                <div className="widget-box subtotal-cart">
                  <div className="accordion-item">
                    <div className="widget-content">
                      {/* <div className="expand-svg">
                        <img src={expand} alt="expand-svg" />
                      </div> */}
                      {/* <i className="fa-solid fa-xmark"></i> */}
                      <div className="left-content">
                        <img src={logo} alt="logo" />
                      </div>
                      <div className="right-content">
                        Add more products or apply now
                        <span>
                          <ReactSVG src={info} />
                          Instant decisions - 96% Approval Rate
                        </span>
                      </div>
                    </div>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <h5>Your Cart</h5>
                        <div className="your-cart">
                          {cartItems?.map((item, i) => (
                            <div key={i} className="product-table">
                              <div className="col-6">
                                <p>
                                  <i className="fa-solid fa-trash"></i>
                                  {item.productName}
                                </p>
                              </div>
                              <div className="col-3">
                                <div className="input-group">
                                  <input
                                    type="number"
                                    className="form-control text-center"
                                    id="quantity"
                                    min="1"
                                    value={item.quantity}
                                    defaultValue={1}
                                    onChange={(e) =>
                                      handleQuantityChange(
                                        i,
                                        parseInt(e.target.value, 10)
                                      )
                                    }
                                  />
                                </div>
                              </div>
                              <div className="col-3 price">
                                <span className="bold-price">
                                  £{item.price * item.quantity}
                                </span>
                              </div>
                            </div>
                          ))}
                          {/* <div className="product-table">
                            <div className="col-6">
                              <p>
                                <i className="fa-solid fa-trash"></i>Product
                                Name
                              </p>
                            </div>
                            <div className="col-3">
                              <div className="input-group">
                                <input
                                  type="number"
                                  className="form-control text-center"
                                  id="quantity"
                                  min="1"
                                  defaultValue={1}
                                />
                              </div>
                            </div>
                            <div className="col-3 price">
                              <span className="bold-price">£400</span>
                            </div>
                          </div>
                          <div className="product-table">
                            <div className="col-6">
                              <p>
                                <i className="fa-solid fa-trash"></i>Product
                                Name
                              </p>
                            </div>
                            <div className="col-3">
                              <div className="input-group">
                                <input
                                  type="number"
                                  className="form-control text-center"
                                  min="1"
                                  defaultValue={1}
                                />
                              </div>
                            </div>
                            <div className="col-3 price">
                              <span className="bold-price">£400</span>
                            </div>
                          </div> */}
                          <div className="subtotal">
                            <div className="row">
                              <div className="col-6">Subtotal</div>
                              <div className="col-6 price">
                                <span className="colored-text">
                                  £{calculateTotalPrice()}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Choose Your shopping option</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </select>
                        <div class="coupon-form">
                          <form>
                            <input
                              type="text"
                              class="code form-control"
                              placeholder="Enter coupon code"
                            />
                            <div class="row mb-3">
                              <div class="col-md-6">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Name"
                                />
                              </div>
                              <div class="col-md-6">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Address"
                                />
                              </div>
                            </div>
                            <div class="row mb-3">
                              <div class="col-md-6">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Town"
                                />
                              </div>
                              <div class="col-md-6">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="Post code"
                                />
                              </div>
                            </div>
                            <input
                              type="number"
                              class="form-control"
                              placeholder="Phone Number"
                            />
                            <input
                              type="email"
                              class="form-control"
                              placeholder="Email address"
                            />

                            <button type="button" class="btn btn-primary">
                              Apply Now
                            </button>
                          </form>
                        </div>
                        <p>
                          You will be redirected to our lenders portal. Once a
                          decision has been made you will return to this site.,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      ) : null}
    </>
  );
}
