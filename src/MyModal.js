import React, { useState } from "react";
import { Modal } from "reactstrap";
import Image from "./asset/Image.png";
import ExpandIcon from "./asset/expandicon.png";
import InfoIcon from "./asset/infoicon.png";
import "./widget.css";

const CustomUI = () => {
  const [modal, setModal] = useState(true);

  const closeModal = () => {
    // Close your modal logic goes here

    // Dispatch the custom event to notify the parent document
    var event = new Event("iframeModalClosed");
    window.parent.dispatchEvent(event);
  };

  const toggle = () => {
    closeModal();
    setModal(!modal);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <div
        className="container widget-container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="row main-row">
          <div className="col">
            <div className="widget-box expanded-widget">
              <div className="accordion-item">
                <div className="widget-content">
                  <div className="expand-svg">
                    <img src={ExpandIcon} alt="ExpandIcon" />
                  </div>
                  <i className="fa-solid fa-xmark"></i>
                  <div className="left-content">
                    <img src={Image} alt="Logo" />
                  </div>
                  <div className="right-content">
                    Get in on Fianance from £30 per month
                    <span>
                      <img src={InfoIcon} alt="info-icon" />
                      Instant decisions ~ 96% Approval Rate
                    </span>
                  </div>
                </div>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <h5>Choose Your deposit</h5>
                    <div className="custom-progress">
                      <div
                        className="progress"
                        role="progressbar"
                        aria-label="Success example"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <div
                          className="progress-bar "
                          style={{ width: "40%" }}
                          id="customProgressBar"
                        >
                          <span
                            className="progress-bar-percentage"
                            id="percentageDisplay"
                          >
                            5%
                          </span>
                        </div>
                      </div>
                    </div>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Choose your finance option </option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <div className="amount-section">
                      <div className="row">
                        <div className="col">
                          <ul className="amount-type">
                            <li>Loan Amount</li>
                            <li>Deposit Amount</li>
                            <li>Loan Amount</li>
                            <li>Deposit Amount</li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="price">
                            <li>£1000.00</li>
                            <li>£100.00</li>
                            <li>£1000.00</li>
                            <li>£100.00</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <button type="button" className="btn btn-primary">
                      Add To Finance
                    </button>
                    <p>
                      Values are for illustrative purposes only and the final
                      figure may be different
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CustomUI;
