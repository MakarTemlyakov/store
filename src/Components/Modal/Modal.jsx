import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ isOpen, children, close }) => {
  console.log('componentt');
  if (!isOpen) return null;
  React.useEffect(() => {
    console.log('componentt1');
    window.addEventListener('click', (e) => {
      if (e.target.matches('.modal')) {
        close(false);
      }
    });
    return () => {
      window.removeEventListener('click');
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="modal">
      {console.log('componentt2')}
      <div className="modal-content">{children}</div>
    </div>,
    document.querySelector('.app'),
  );
};

export default Modal;
