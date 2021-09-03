import {observable, computed, action} from 'mobx';

export default class {

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.texts = this.rootStore.textsStore;
  }

  @observable alerts = [
    {
      name: 'save',
      content: this.texts.alert_save,
      active: false
    },
    {
      name: 'remove',
      content: this.texts.alert_remove,
      active: false
    },
    {
      name: 'remove_all',
      content: this.texts.alert_removeAll,
      active: false
    },
    {
      name: 'error',
      content: this.texts.alert_errorAction,
      active: false
    }
  ];

  @computed get index() {
    return (name) => {
      return this.alerts.findIndex(alert => alert.name == name);
    }    
  } 

  @action show(name) {
    let i = this.index(name);
    this.alerts[i].active = true;
  }


  @action hide(name) {
    let i = this.index(name);
    this.alerts[i].active = false;
  }


  @action remove(name) {
    let i = this.index(name);
    this.alerts.splice(i, 1);
  }
  





}