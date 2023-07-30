import React, { FC, useState, useEffect } from 'react';

import { Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

interface Props {
  activateElement: React.ReactNode;
  title: string;
  body: React.ReactNode;
  buttonVariant?: string;
  position: 'start' | 'end';
}

const CustomOffCanvas: FC<Props> = ({
  activateElement,
  title,
  body,
  position
}) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Hide off canvas when url changes
  useEffect(() => {
    handleClose();
  }, [navigate]);

  return (
    <>
      <div onClick={handleShow}>{activateElement}</div>

      <Offcanvas show={show} placement={position} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <>{body}</>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomOffCanvas;
