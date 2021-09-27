import React from 'react';
import withStore from '~/hocs/withStore';

function important(props) {
  let {disabled, callback} = props;
  let ICONS = props.stores.icons;
  let TEXT = props.stores.textsStore;
  
  return (
    <button 
      className="btn btn-warning"
      onClick={() => callback()} 
      disabled={disabled} 
      title={TEXT.btn_imp}
    >
        {ICONS.iconImportant}
    </button>
  );

}

export default withStore(important);