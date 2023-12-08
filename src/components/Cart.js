import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../components/cart.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {useState} from 'react';
import logo from '../images/logo-image.svg';
import info from '../images/info-icon.svg';
import { ReactSVG } from 'react-svg';
import expand from '../images/Icon-expand.svg'
import Widget from './Widget';
export default function Cart() {
    const [show, setShow] = useState(true);
    const [showComponent, setShowComponent] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toggleComponent = () => {
    console.log("yesss")
    setShowComponent(!showComponent);
    // setShow(false)
  };
    return (
        
          <>
          {
            
            show ? 
            <>
            <Modal show={!showComponent} onHide={handleClose} className='main-cart-modal'>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='cart-modal'>
                                        <div className="widget-box expanded-widget">
                                <div className="accordion-item">
                                    <div className="widget-content">
                                    <div className="expand-svg">
                                        <img src={expand} alt="expand-svg"/>
                                    </div>
                                        {/* <i className="fa-solid fa-xmark"></i> */}
                                        <div className="left-content">
                                        <img src={logo} alt="logo"/>
                                        </div>
                                    <div className="right-content">
                                        Get in on Fianance from £30 per month
                                        <span>
                                        <ReactSVG src={info}  />
                                        Instant decisions - 96% Approval Rate</span>
                                    </div>
                                    </div>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                        
                                        <h5>Choose Your deposit</h5>
                                        <div className="custom-progress">
                                        <div className="progress" role="progressbar" aria-label="Success example" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar " id="customProgressBar" style={{width: "25%"}}>
                                            <span className="progress-bar-percentage" id="percentageDisplay">5%</span>
                                            </div>
                                        </div>
                                        </div>
                                        <div className='details-sub-div'>
                                        <select className="form-select" aria-label="Default select example">
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
                                        <button onClick={()=>setShowComponent(!showComponent)}>Add To Finance</button>
                                        <p>Values are for illustrative purposes only and the final figure may be different</p>
                                        </div>
                                    </div>
                                   
                                </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
                <Widget showComponent={showComponent}  toggleComponent={toggleComponent}/> 
                </>
                : null

          }
                
          </>
      );
}
