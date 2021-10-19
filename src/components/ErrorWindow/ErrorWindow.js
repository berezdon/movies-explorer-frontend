import React from "react";
import './ErrorWindow.css';

function ErrorWindow ({ isOpen,
                        onClose,
                        errors,
                      }) {
  let timer = 0;
  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setTimeout(onClose, 4000 );
    document.addEventListener('mousedown', handleClickInside);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickInside);
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(timer);
    }
  },[isOpen]);

  function handleClickInside(event) {
    if (event.target.className === 'popup-error__error' || event.target.className === 'popup-error__text') {
      document.removeEventListener('mousedown', handleClickInside);
      clearTimeout(timer);
    }
  }

  function handleClickOutside(event) {
    if (event.target.className !== 'popup-error__error' && event.target.className !== 'popup-error__text') {
      document.removeEventListener('mousedown', handleClickInside);
      document.removeEventListener('mousedown', handleClickOutside);
      clearTimeout(timer);
      onClose();
    }
  }

  return (
    <section className={`popup-error ${isOpen && 'popup-error_opened'}`}>
      <div className={`popup-error__error`}>
        <p className='popup-error__text'>{errors}</p>
      </div>
    </section>
  )
}

export default ErrorWindow
