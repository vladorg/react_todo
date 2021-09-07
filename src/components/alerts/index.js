import React from 'react';
import {observer} from 'mobx-react';

@observer export default class extends React.Component {

  alertsModel = this.props.alerts;
  delay = this.alertsModel.delay;

  

  hide(e, name) {
    let alert = e.target.parentNode;
    let animate = alert.animate([
      { 
        opacity: 1,
        transform: 'translateX(0)'        
      },
      { 
        opacity: 0,
        transform: 'translateY(-50px)'        
      },
    ], {
      duration: 200
    });

    animate.addEventListener('finish', e => {
      this.alertsModel.hide(name);
    });
  }


  render() {
    let alerts = this.alertsModel.alerts.map((al, i) => {
      if (!al.active) {
        return
      }

      let class_name = 'alert';

      if (al.name == 'save') {
        class_name += ' alert--success';
      } else if (al.name == 'remove' || al.name == 'remove_all') {
        class_name += ' alert--warning';
      } else if (al.name == 'error') {
        class_name += ' alert--error';
      }

      setTimeout(() => {
        this.alertsModel.hide(al.name);
      }, this.delay);

      return (
        <div className={class_name} key={i}>
          <div className="icon">{al.icon}</div>          
          <button className="alert__close" onClick={e => this.hide(e, al.name)}>x</button>
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