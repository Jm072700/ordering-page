import Modal from "react-bootstrap/Modal";
const Info = ({ show, onHide, info }) => {
  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h2>{info.name}</h2>
          <h3>₱{info.price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}</h3>
          <p>{info.text}</p>
        </Modal.Body>
        <Modal.Footer>
          <button
            className="btn btn-dark text-center rounded-pill text-light border-dark"
            onClick={onHide}
          >
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Info;
