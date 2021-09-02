import itemsModel from './items';
import alertsModel from './alerts';

class Stores {
  constructor() {
    this.storage = localStorage;
    this.token = this.storage.getItem('accessToken');
    

    this.itemsStore = new itemsModel(this);
    this.alertsStore = new alertsModel(this);
  }
}

export default new Stores();