import { ReactSVG } from "react-svg";

import logo from "../../asset/svg/logo-image.svg";
import info from "../../asset/svg/info-icon.svg";
import "./cart.css";

export default function Cart({ toggleModal }) {
  return (
    <>
      <div className="cart-modal">
        <div className="widget-box expanded-widget">
          <div className="accordion-item">
            <div className="widget-content">
              <div className="left-content">
                <img src={logo} alt="logo" />
              </div>
              <div className="right-content">
                Get in on Fianance from £30 per month
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
                      id="customProgressBar"
                      style={{ width: "25%" }}
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
                <div className="details-sub-div">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue="default"
                  >
                    <option value="default">Choose your finance option </option>
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
                  <button onClick={() => toggleModal("widget")}>
                    Add To Finance
                  </button>
                  <p className="bottom-content">
                    Values are for illustrative purposes only and the final
                    figure may be different
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
