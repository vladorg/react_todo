import React from 'react';
import withStore from '~/hocs/withStore';

function Footer(props) {
  const TEXT = props.stores.textsStore;
  return (
    <div className="footer bg-success bg-gradient text-light">
      <div className="container">
        <div className="copy">© {TEXT.copyright}</div>
      </div>
    </div>
  )
}

export default withStore(Footer);