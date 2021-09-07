import itemsModel from './items';
import alertsModel from './alerts';
import textsModel from './texts';
import verModel from './versions';
import iconsModel from './icons';

class Stores {
  constructor() {
    this.storage = localStorage;
    this.token = this.storage.getItem('accessToken'); 

    this.textsStore = new textsModel(this);
    this.versions = new verModel(this);       
    this.icons = new iconsModel(this);

    this.itemsStore = new itemsModel(this);
    this.alertsStore = new alertsModel(this);
  }
}

export default new Stores();