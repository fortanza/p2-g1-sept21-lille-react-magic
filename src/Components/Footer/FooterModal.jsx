import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const FooterModal = ({ isShowing, hide, title }) =>
  isShowing &&
  ReactDOM.createPortal(
    <>
      <div className="modalOverlay">
        <div className="modalWrapper">
          <div className="modal">
            <div className="modalHeader">
              <h4>{title}</h4>
              <iframe
                width="700"
                height="500"
                src="https://www.youtube-nocookie.com/embed/RZyXU1L3JXk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button type="button" className="modalCloseButton" onClick={hide}>
                <span>&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
FooterModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default FooterModal;
