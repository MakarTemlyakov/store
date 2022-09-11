import React, { useState } from 'react';
import Toast from './Toast/Toast';
import './ToastList.css';

export const ToastList = ({ toastList, setToastList }) => {
  React.useEffect(() => {
    if (toastList.length > 0) {
      const timeId = setTimeout(() => {
        removeToastMessage(toastList.length - 1);
      }, 1500);
      return () => {
        clearInterval(timeId);
      };
    }
  }, [toastList, removeToastMessage]);

  const removeToastMessage = (removeIndex) => {
    const updatedToastList = toastList.filter((x, index) => index !== removeIndex);
    setToastList(updatedToastList);
  };

  return (
    <>
      {toastList.length > 0 && (
        <div className="taost-wrapper">
          {toastList.map((message, index) => {
            return (
              <Toast
                message={message}
                key={index}
                removeToastMessage={removeToastMessage}
                index={index}
              />
            );
          })}
        </div>
      )}
    </>
  );
};
