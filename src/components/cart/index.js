import { ReactSVG } from "react-svg";
import { useState, useEffect } from "react";
import info from "../../asset/svg/info-icon.svg";
import "./cart.css";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import axios from "axios";

export default function Cart({ toggleModal }) {
  const [percentage, setPercentage] = useState(0);
  const [lenderData, setLenderData] = useState(null);
  const [loading, setLoading] = useState(true);
  // const [calculateLoader, setCalculateLoader] = useState(false);
  const [data, setData] = useState([]);
  const [selectedFinanceDetails, setSelectedFinanceDetails] = useState(null);

  const getOptions = () => {
    axios
      .get(
        "https://3l0nwm7d2k.execute-api.eu-west-2.amazonaws.com/Prod/api/finance/options"
      )

      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      });
  };

  const getLenderData = () => {
    axios
      .get(
        "https://3l0nwm7d2k.execute-api.eu-west-2.amazonaws.com/Prod/api/lender/init"
      )

      .then((res) => {
        setLenderData(res.data);
        setLoading(false);
      });
  };

  useEffect(() => {
    getLenderData();
    getOptions();
  }, []);

  const handleRangeChange = (e) => {
    const newValue = e.target.value;
    setPercentage(newValue);
  };
  const percentageLabelStyle = {
    left: `calc(${(percentage / 100) * 100}% + 10px)`,
  };
  const filledBackgroundStyle = {
    width: `${percentage}%`,
    height: "6px",
    backgroundColor: "#3164f4",
    position: "absolute",
    top: "9px",
    left: "0",
    borderRadius: "4px",
    zIndex: "1000",
  };

  const changeFinanceOption = (e) => {
    // setCalculateLoader(true);
    const decimalPercentage = parseFloat(percentage) / 100;
    const deposit = 1000 * decimalPercentage;
    console.log("deposit", deposit);
    const requestBody = {
      deposit,
      price: 1000,
      selectedRateCardId: e.target.value,
    };
    axios
      .post(
        "https://3l0nwm7d2k.execute-api.eu-west-2.amazonaws.com/Prod/api/finance/calculate",
        requestBody
      )
      .then((res) => {
        // setCalculateLoader(false);
        setSelectedFinanceDetails(res.data.loanDetails);
      });
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <>
      <div className="cart-modal">
        <div className="widget-box expanded-widget">
          <div className="accordion-item">
            <div className="widget-content">
              <div className="left-content">
                <img src={lenderData?.logo} alt="logo" />
              </div>
              <div className="right-content">
                {lenderData?.title}
                <span>
                  <ReactSVG src={info} />
                  {lenderData?.subtitle}
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
                    <span
                      className="progress-bar-percentage percentage-value"
                      style={percentageLabelStyle}
                      id="percentageDisplay"
                    >
                      {`${Math.round(percentage)}%`}
                    </span>
                    <div
                      className="filled-background"
                      style={filledBackgroundStyle}
                    ></div>

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
                    onChange={changeFinanceOption}
                  >
                    <option value="default" disabled>
                      Choose your finance option{" "}
                    </option>
                    {data &&
                      data.map((item, i) => (
                        <option key={i} value={item.Id}>
                          {item.FullName}
                        </option>
                      ))}
                  </select>
                  {selectedFinanceDetails && (
                    <div className="amount-section">
                      <div className="row">
                        <div className="col">
                          <ul className="amount-type">
                            <li>Product Amount</li>
                            <li>Loan Amount</li>
                            <li>Deposit Amount</li>
                            <li>Monthly Payment</li>
                            <li>Annual Interest Rate</li>
                            <li>Total Term</li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="price">
                            <li>£{selectedFinanceDetails?.Price}</li>
                            <li>£{selectedFinanceDetails?.LoanValue}</li>
                            <li>£{selectedFinanceDetails?.Deposit}</li>
                            <li>£{selectedFinanceDetails?.MonthlyPayment}</li>
                            <li>
                              {selectedFinanceDetails?.AnnualInterestRate}%
                            </li>
                            <li>{selectedFinanceDetails?.TotalTerm}</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
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
