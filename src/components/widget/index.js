import { ReactSVG } from "react-svg";
import { useState, useEffect } from "react";

import logo from "../../asset/svg/logo-image.svg";
import info from "../../asset/svg/info-icon.svg";
import "./widget.css";
import axios from "axios";
export default function Widget({ toggleModal }) {
  const [cartItems, setCartItems] = useState([
    { id: 1, productName: "Selling Plans Ski Wax", quantity: 2, price: 100 },
    { id: 2, productName: "Gift Card", quantity: 1, price: 250 },
  ]);
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => setData(res.data));
  }, []);
  console.log("data:", data);
  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems[index] = {
      ...updatedCartItems[index],
      quantity: newQuantity,
    };
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
      <div className="cart-modal">
        <div className="col">
          <div className="widget-box subtotal-cart">
            <div className="accordion-item">
              <div className="widget-content">
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

                  <div className="coupon-form">
                    <form>
                      <input
                        type="text"
                        className="code form-control"
                        placeholder="Enter coupon code"
                      />
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        defaultValue="default"
                      >
                        <option value="default">
                          Choose Your shopping option
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Address"
                          />
                        </div>
                      </div>
                      <div className="row mb-3">
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Town"
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Post code"
                          />
                        </div>
                      </div>
                      <input
                        type="number"
                        className="form-control custom-space"
                        placeholder="Phone Number"
                      />
                      <input
                        type="email"
                        className="form-control custom-space"
                        placeholder="Email address"
                      />
                      <button type="button" className="btn btn-primary">
                        Apply Now
                      </button>
                      <button
                        onClick={() => toggleModal("cart")}
                        type="button"
                        className="btn back-button btn-primary"
                      >
                        Back
                      </button>
                    </form>
                  </div>
                  <p className="bottom-content">
                    You will be redirected to our lenders portal. Once a
                    decision has been made you will return to this site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
