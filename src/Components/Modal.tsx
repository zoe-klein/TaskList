import React from 'react';
import "./Modal.css";

function Modal ({closeModal}: any) {
    return (
        <div className="modal-background">
        <div className="modal-container">
            
            <div className="modal-content">
                Um, it's empty...
            </div>
            <div className="modal-btn-position">
                 <button className="modal-btn" onClick={() => {
                    closeModal(false);
                    }}
                    >Sorry</button>
            </div>
        </div>
        </div>
    );
}

export default Modal;