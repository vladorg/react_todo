import {observable, computed, action} from 'mobx';
import * as api from '~/api/items';

export default class {

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.TEXT = this.rootStore.textsStore;
    this.TOKEN = this.rootStore.token;
    this.loaded = false;
  }

  // all items
  @observable items = [];



  /* *** COMPUTED *** */

  // get max id of items
  @computed get maxId() {
    let max = 0;
    this.items.map(item => item.id > max ? max = item.id : null);
    return max;
  }

  // get item index in array from his id
  @computed get index() {
    return (id) => {
      return this.items.findIndex(item => item.id == id);
    }    
  } 
  
  // detect a empty items list
  @computed get isEmpty() {
    return !this.items.length
  }

  @computed get isLoaded() {
    return this.loaded
  }



  /* *** ACTIONS *** */
  
  @action change(id, text) {
    let i = this.index(id);
    this.items[i].text = text;
  }

  // make item field writebble
  @action activate(id) {
    let i = this.index(id);
    this.items[i].active = true;
  }



  /* *** API BACK *** */

  // load items from --back--
  // if TOKEN need update - set new token in LS
  @action load() {
    return new Promise((resolve, reject) => {
      return api.load(this.TOKEN).then(data => {
        if (data) {
          this.items = data.items;
          if (data.needUpdate) {
            this.TOKEN = data.token;
            this.rootStore.storage.setItem('accessToken', data.token);
          }
          resolve();
        } else {
          reject('items is not loaded..');
        }
        
      });
    });
    
  }
  

  // update text content for item on --back-- & set readonly status for item
  @action save(id) {
    return new Promise((resolve, reject) => {
      let i = this.index(id);
      let txt = this.items[i].text == '' ? this.TEXT.home_emptyField : this.items[i].text;
      return api.change(this.TOKEN, id, txt).then(res => {
        if (res) {
          this.items[i].text = txt;
          this.items[i].active = false;
          resolve();
        } else {
          reject();
        }
        console.log(`save: ${res}`);
      });
    });      
  }


  // add new item on --back-- && show this on front
  @action add(txt) {
    return new Promise((resolve, reject) => {
      let id = this.maxId + 1;
      txt == '' ? txt = this.TEXT.home_emptyField : null;
      return api.add(this.TOKEN, id, txt).then(res => {
        if (res) {
          this.items.push({
            id: id,
            text: txt,
            active: false,
            completed: false,
            important: false
          });
          resolve();
        } else {
          reject();
        }
        console.log(`add: ${res}`);
      })
    })
    
    
    
  }


  // remove item by id on --back-- && show this on front
  @action remove(id){
    return new Promise((resolve, reject) => {
      let i = this.index(id);
      return api.remove(this.TOKEN, id).then(res => {
        if (res) {
          this.items.splice(i, 1);
          resolve();
        } else {
          reject();
        }
        console.log(`remove: ${res}`);
      }); 
    });  
  }


  // remove all items
  @action removeAll() {
    return new Promise((resolve, reject) => {
      return api.clean(this.TOKEN).then(res => {
        if (res) {
          this.items = [];
          resolve();
        } else {
          reject();
        }
        console.log(`clean: ${res}`);
      });
    })
    
  }


  // make item important on --back--
  @action important(id, flag) {
    return new Promise((resolve, reject) => {
      let i = this.index(id);
      return api.important(this.TOKEN, id, flag).then(res => {
        if (res) {
          this.items[i].important = flag;
          resolve();
        } else {
          reject();
        }
        console.log(`make important: ${res}`);
      });
    });
  }


  // make item completed on --back--
  @action completed(id, flag) {
    return new Promise((resolve, reject) => {
      let i = this.index(id);
      return api.completed(this.TOKEN, id, flag).then(res => {
        if (res) {
          this.items[i].completed = flag;
          resolve();
        } else {
          reject();
        }
        console.log(`make completed: ${res}`);
      });
    });
  }

}