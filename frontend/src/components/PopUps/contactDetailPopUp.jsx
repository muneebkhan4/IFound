import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col, Container } from 'react-bootstrap';

function ContactDetailPopUp(props) {

  const { founderName, details, phone, ownerEmail} = props;
  const attributes = [
    {
      "heading": "Post Uploaded By:",
      "data": founderName
    },
    {
      "heading": "Contact No:",
      "data": phone,
    },
    {
      "heading": "Description",
      "data": details
    },
  ];


  console.log("ContactPop got attributes: ", attributes)

  const uploaderPerson = "Saim Ayub";
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Contact Detail
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {
            attributes?.length && attributes.map((attribute, index) => {
              return (<Row key={index}>
                <Col>
                  <h6>{attribute.heading}</h6>
                </Col>
                <Col>
                  <p>{attribute.data}</p>
                </Col>
              </Row>);
            })
          }
          <Row className="border-bottom mb-1">
            <h5>Chat</h5>
          </Row>
          <Row>
            <Col>
              <p>Owner UserName:{ }</p>
            </Col>
            <Col>
              <p>{ownerEmail}</p>
            </Col>
          </Row>
          <Row>
            <p>In order to send message to the Owner, please Enter the Owner User Name to the IFound Chat</p>
            <a href="http://localhost:3001/login" target="_blank">IFound Chat App</a>
          </Row>
        </Container>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ContactDetailPopUp;