import React, { useEffect, useReducer } from "react";
import Modal from "react-bootstrap/Modal";
import Cart from "./cart/index";
import Widget from "./widget/index";

import "./cart/cart.css";
import "./widget/widget.css";

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

    handleBodyClass();

    return () => {
      document.body.classList.remove("modal-open-after");
    };
  }, [state.activeModal]);

  const clearModal = () => {
    window.parent.postMessage("closeIframe", "*");
  };

  const toggleModal = (type) => {
    setState({
      activeModal: type,
    });
  };

  const renderModal = () => {
    const modalToRender = {
      cart: <Cart toggleModal={toggleModal} />,
      widget: <Widget toggleModal={toggleModal} />,
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
      backdrop="static"
      className={`main-cart-modal main-${state.activeModal}-container`}
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>{renderModal()}</Modal.Body>
    </Modal>
  );
};

export default MainContainer;
