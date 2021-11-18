import React from 'react';
import PropTypes from 'prop-types';

function FooterModal({ closeFooterModal }) {
  return (
    <div className="footerModalBackground">
      <div className="footerModalContainer">
        <div className="titleModal">
          <iframe
            src="https://www.youtube-nocookie.com/embed/RZyXU1L3JXk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <button
            className="cross"
            type="button"
            onClick={() => closeFooterModal(false)}
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}

FooterModal.propTypes = {
  closeFooterModal: PropTypes.string,
};

FooterModal.defaultProps = {
  closeFooterModal: 'X',
};

export default FooterModal;
