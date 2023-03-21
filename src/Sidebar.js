import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import web from '../src/images/menu.png';

export const Sidebar = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
        <Button className='toggle-icon' onClick={handleShow}>
    <img src={web} className="img-fluid " />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Side Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <ul>
            <li><a href="javascript:void(0)">Menu item 1</a></li>
            <li><a href="javascript:void(0)">Menu item 2</a></li>
            <li><a href="javascript:void(0)">Menu item 3</a></li>
            <li><a href="javascript:void(0)">Menu item 4</a></li>
            <li><a href="javascript:void(0)">Menu item 5</a></li>
            <li><a href="javascript:void(0)">Menu item 6</a></li>
            <li><a href="javascript:void(0)">Menu item 7</a></li>
            <li><a href="javascript:void(0)">Menu item 8</a></li>
            <li><a href="javascript:void(0)">Menu item 9</a></li>
         </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}
