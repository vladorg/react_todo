import React from 'react';
import withStore from '~/hocs/withStore';


class Language extends React.Component {

  constructor(props) {
    super(props);
    this.storage = this.props.stores.storage;
  }

  setLang(code) {
    this.storage.setItem('siteLang', code);
    window.location.reload();
  }
  
  render() {
    
    return (
      <div className="language">
        <button onClick={() => this.setLang('en')}>
          <img src="./images/eng.svg" alt="en" />
        </button>
        <button onClick={() => this.setLang('ua')}>
          <img src="./images/ukr.svg" alt="ua" />
        </button>
        <button onClick={() => this.setLang('ru')}>
          <img src="./images/rus.svg" alt="ru" />
        </button>
      </div>
    )
  }
  
}

export default withStore(Language);