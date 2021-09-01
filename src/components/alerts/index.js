import React from 'react';
import {observer} from 'mobx-react';

@observer export default class extends React.Component {

  alertsModel = this.props.alerts;


  render() {

    let alerts = this.alertsModel.alerts.map((al, i) => {
      if (!al.active) {
        return
      }

      setTimeout(() => {
        this.alertsModel.hide(al.name);
        console.log(1);
      }, 3000);

      return (
        <div className="alert" key={i}>
          <button className="alert__close" onClick={() => this.alertsModel.hide(al.name)}>x</button>
          <div className="alert__text">{al.content}</div>          
        </div>
      );
    })

    return(
      <>
        <div className="alerts">
          {alerts}
        </div>
        
      </>
    )
  }





}