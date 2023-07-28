import React, { useState } from 'react';

import { Toast } from 'react-bootstrap';

interface Props {
  activateElement: React.ReactNode;
  header: string;
  body: string;
}

const CustomToast = ({ activateElement, body, header }: Props) => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <div onClick={() => setShow(true)}>{activateElement}</div>

      {show && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '10px',
            zIndex: 9999
          }}
        >
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            className="w-100"
            autohide
          >
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">{header}</strong>
            </Toast.Header>
            <Toast.Body>{body}</Toast.Body>
          </Toast>
        </div>
      )}
    </div>
  );
};

export default CustomToast;
