import itemsModel from './items';
import alertsModel from './alerts';
import textsModel from './texts';

class Stores {
  constructor() {
    this.storage = localStorage;
    this.token = this.storage.getItem('accessToken');
    this.textsStore = new textsModel(this);
    

    this.itemsStore = new itemsModel(this);
    this.alertsStore = new alertsModel(this);
  }
}

export default new Stores();