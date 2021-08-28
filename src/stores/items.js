import {observable, computed, action} from 'mobx';

class Items {

  // all items
  @observable items = [
    {
      id: 101,
      text: 'Create React App',
      active: false
    },
    {
      id: 102,
      text: 'Connect Mobx',
      active: false
    },
    {
      id: 103,
      text: 'Add React Router',
      active: false
    },
    {
      id: 104,
      text: 'Make a new component',
      active: false
    }
  ];

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

  
  // make item field writebble
  @action activate(id) {
    let i = this.index(id);
    this.items[i].active = true;
  }


  // update text content for item & set readonly status
  @action save(id, new_text) {
    let i = this.index(id);
    this.items[i].active = false;
    this.items[i].text = new_text;
  }


  // add new item
  @action add(txt) {
    this.items.push({
      id: this.maxId + 1,
      text: txt,
      active: false
    });
  }


  // remove item by id
  @action remove(id){
    let i = this.index(id);
    this.items.splice(i, 1);
  }

  // remove all items
  @action removeAll() {
    this.items = [];
  }


}


export default new Items();