import React from 'react';
import './Toast.css';
const Toast = ({ message, removeToastMessage, index }) => {
  return (
    <div className="alert notify">
      <button className="button-alert" onClick={() => removeToastMessage(index)}>
        X
      </button>
      <p className="alert-text">{message}</p>
    </div>
  );
};

export default Toast;
