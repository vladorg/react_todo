import React from 'react';
import withStore from '~/hocs/withStore';

function Footer(props) {
  const TEXT = props.stores.textsStore;
  return (
    <div className="footer container">
      <div className="copy">(c) {TEXT.copyright}</div>
    </div>
  )
}

export default withStore(Footer);