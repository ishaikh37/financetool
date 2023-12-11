import React, { useEffect, useReducer } from "react";
import Modal from "react-bootstrap/Modal";
import Cart from "./Cart";
import Widget from "./Widget";
import "./cart.css";
import "./widget.css";

const MainContainer = () => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      activeModal: "cart",
      showModal: true,
    }
  );

  useEffect(() => {
    const handleBodyClass = () => {
      if (state.activeModal) {
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
  }, [state.activeModal]);

  const clearModal = () => {
    // Close your modal logic goes here
    // setShow(false);
    // Send a message to the parent document
    window.parent.postMessage("closeIframe", "*");
  };

  const toggleModal = () => {
    setState({
      activeModal: "widget",
    });
  };

  const renderModal = () => {
    const modalToRender = {
      cart: <Cart toggleModal={toggleModal} />,
      widget: <Widget />,
    };
    return modalToRender[state.activeModal];
  };

  const closeModal = () => {
    clearModal();
    setState({
      showModal: false,
    });
  };

  return (
    <Modal
      show={state.showModal}
      onHide={closeModal}
      className={`main-cart-modal main-${state.activeModal}-container`}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>{renderModal()}</Modal.Body>
    </Modal>
  );
};

export default MainContainer;
