import {observable, computed, action, makeObservable} from 'mobx';

export default class {

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.texts = this.rootStore.textsStore;
    this.icons = this.rootStore.icons;
    this.delay = 5000;
    this.alerts = [
      {
        name: 'save',
        content: this.texts.alert_save,
        active: false,
        icon: this.icons.iconCompleted
      },
      {
        name: 'remove',
        content: this.texts.alert_remove,
        active: false,
        icon: this.icons.iconImportant
      },
      {
        name: 'remove_all',
        content: this.texts.alert_removeAll,
        active: false,
        icon: this.icons.iconImportant
      },
      {
        name: 'error',
        content: this.texts.alert_errorAction,
        active: false,
        icon: this.icons.iconError
      }
    ];

    makeObservable(this, {
      alerts: observable,
      index: computed,
      show: action,
      hide: action,
      remove: action
    });
  }


  get index() {
    return (name) => {
      return this.alerts.findIndex(alert => alert.name == name);
    }    
  } 

  show(name) {
    let i = this.index(name);
    this.alerts[i].active = true;
  }


  hide(name) {
    let i = this.index(name);
    this.alerts[i].active = false;
  }


  remove(name) {
    let i = this.index(name);
    this.alerts.splice(i, 1);
  }
  





}