import React, { useContext } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import './index.scss';
import { ShepherdTourContext } from "react-shepherd";

const IntroModal = () => {
  const [modal, setModal] = useState(false);
  const tour = useContext(ShepherdTourContext)

  // Sets cookie with expiration of 3 days
  if (modal) {
    Cookies.set("Manny-Portfolio-firstvisit", "false", { expires: 3 });
  }

  // Checks for first cookies for first time visitor to show modal and set cookie
  useEffect(() => {
    if (!Cookies.get("Manny-Portfolio-firstvisit")) {
      setModal(true);
    }
  }, []);

  return (
    <Modal className="modalModal" isOpen={modal} toggle={() => setModal(!modal)} onClosed={tour.start}>
      <ModalHeader className="mHeader">Welcome</ModalHeader>
      <ModalBody className="mBody">
        <h2>
          Thank you for taking the time to visit my site.<br/><br/> Enjoy looking around!
        </h2>
      </ModalBody>
      <ModalFooter className="mFooter">
        <Button onClick={() => setModal(!modal)}>Start Tour</Button>
      </ModalFooter>
    </Modal>
  );
};

export default IntroModal;
