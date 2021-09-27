import React from 'react';
import {navList, routesMap} from '~/router';
import withStore from '~/hocs/withStore';
import Languages from '~c/ui/language';
import { withRouter } from 'react-router';


class Header extends React.Component {

  constructor(props) {
    super(props);
    this.TEXT = this.props.stores.textsStore;

    console.log(this.props);
  }

  changeTheme(id) {
    this.options.changeTheme(id);
  }

  changeLang() {
    this.TEXT.change();
  }
  
  render() {
    
    return (
      <div className="header bg-success bg-gradient text-light pt-3 pb-3">
        <div className="container"> 
          <div className="header__inner d-flex justify-content-center align-items-center">     
            <div onClick={() => this.props.history.push(routesMap.home)} className="logo">{this.TEXT.siteName}</div>
            <nav className="nav">
              {navList}
            </nav>     
            <Languages/>   
          </div>
        </div>
      </div>
    )
  }
  
}

export default withStore(withRouter(Header));