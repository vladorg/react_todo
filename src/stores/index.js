import itemsModel from './items';
import alertsModel from './alerts';

class Stores {
  constructor() {
    this.itemsStore = new itemsModel(this);
    this.alertsStore = new alertsModel(this);
  }
}

export default new Stores();