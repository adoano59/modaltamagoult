import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';
/**
 * @param {node} header - Le contenu de l'en-tête de la modale.
 * @param {node} body - Le contenu principal de la modale.
 * @param {node} footer - Le contenu du pied de page de la modale.
 * @param {bool} isOpen - Un booléen indiquant si la modale est visible.
 */
export default function Modal({ header, body, footer, isOpen }) {
  return (
    <>
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