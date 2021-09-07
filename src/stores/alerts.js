import {observable, computed, action} from 'mobx';

export default class {

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.texts = this.rootStore.textsStore;
    this.icons = this.rootStore.icons;
    this.delay = 5000;
  }

  @observable alerts = [
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