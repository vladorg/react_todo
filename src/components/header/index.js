import React from 'react';
import {navList} from '~/router';
import withStore from '~/hocs/withStore';


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.TEXT = this.props.stores.textsStore;
  }

  changeTheme(id) {
    this.options.changeTheme(id);
  }

  changeLang() {
    this.TEXT.change();
  }
  
  render() {
    
    return (
      <div className="container">
        <div className="header">
          <div className="logo">{this.TEXT.siteName}</div>
          <nav className="nav">
            {navList}
          </nav>        
        </div>
      </div>
    )
  }
  
}

export default withStore(Header);