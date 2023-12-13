import { ReactSVG } from "react-svg";
import { useState } from "react";
import logo from "../../asset/svg/logo-image.svg";
import info from "../../asset/svg/info-icon.svg";
import "./cart.css";
import Form from 'react-bootstrap/Form';

export default function Cart({ toggleModal }) {
  const [percentage, setPercentage] = useState(0);

  const handleRangeChange = (e) => {
    const newValue = e.target.value;
    setPercentage(newValue);
  };

  const percentageLabelStyle = {
    left: `calc(${(percentage / 100) * 100}% + 10px)`,
  };
  const filledBackgroundStyle = {
    width: `${percentage}%`,
    height: '6px',
    backgroundColor: '#3164f4',
    position: 'absolute',
    top: '9px',
    left: '0',
    borderRadius: '4px',
    zIndex: '1000', 
  };
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
                 
                  <div className="form-range-div">
                    <span className="progress-bar-percentage percentage-value" style={percentageLabelStyle} id="percentageDisplay">
                      {`${Math.round(percentage)}%`}
                    </span>
                    <div className="filled-background" style={filledBackgroundStyle}></div>

                    <Form.Range
                      value={percentage}
                      onChange={handleRangeChange}
                    />
                  </div>
                </div>
                <div className="details-sub-div">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue="default"
                  >
                    <option value="default" disabled>Choose your finance option </option>
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
