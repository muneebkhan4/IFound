import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ShowToast({position,headerText,bodyText,delay,show,setShow}) {
  position=position?position:'bottom-end';
  delay=delay?delay:3000;

  return (
    <>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="bg-dark position-relative"
        // style={{ minHeight: '240px' }}
      >
        <ToastContainer
          className="p-3"
          position={position}
          style={{ zIndex: 1 }}
        >
          <Toast onClose={() => setShow(false)} show={show} delay={delay} autohide>
            <Toast.Header >
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">{headerText}</strong>
              {/* <small>11 mins ago</small> */}
            </Toast.Header>
            <Toast.Body>{bodyText}</Toast.Body>
          </Toast>
        </ToastContainer>
      </div>
    </>
  );
}

export default ShowToast;