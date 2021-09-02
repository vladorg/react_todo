import {observable, computed, action} from 'mobx';

export default class {

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable alerts = [
    {
      name: 'save',
      content: 'Saved successfull!',
      active: false
    },
    {
      name: 'remove',
      content: 'Removed successfull!',
      active: false
    },
    {
      name: 'remove_all',
      content: 'All items has been removed!',
      active: false
    },
    {
      name: 'error',
      content: 'Something went wrong... Try again!',
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