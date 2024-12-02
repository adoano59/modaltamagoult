import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

export default function Modal({ header, body, footer,  isOpen, children }) {
 

  return (
    <>
      {children}

      <div
        className={`modal ${isOpen ? 'modal-visible' : ''}`}
    
      >
        <div className="modal-content">
          {header && <div className="modal-header">{header}</div>}
          <div className="modal-body">{body}</div>
          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  header: PropTypes.node,
  body: PropTypes.node.isRequired,
  footer: PropTypes.node,
  isOpen: PropTypes.bool,
};