import React from 'react';
import withStore from '~/hocs/withStore';


class Language extends React.Component {

  constructor(props) {
    super(props);
    this.storage = this.props.stores.storage;
    this.languages = this.props.stores.languages;
  }

  setLang(code) {
    this.storage.setItem('siteLang', code);
    window.location.reload();
  }
  
  render() {

    let langs = this.languages.map((lang, i) => {
      return (
        <button key={i} disabled={this.storage.siteLang == lang} className="btn btn-dark" onClick={() => this.setLang(lang)}>
          {lang}
        </button>
      )
    })
    
    return (
      <div className="languages">
        {langs}
      </div>
    )
  }
  
}

export default withStore(Language);