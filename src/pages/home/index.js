import React from 'react';
import withStore from '~/hocs/withStore';
import Alerts from '~c/alerts';
import EmptyField from '~c/ui/emptyField';
import Loader from '~c/loaders/default';
import ErrorLoad from '~c/errors/load';

import ButtonSaveEdit from '~c/buttons/saveEdit';
import ButtonDelCancel from '~c/buttons/delCancel';
import ButtonImportant from '~c/buttons/important';
import ButtonCompleted from '~c/buttons/completed';

class Home extends React.Component {
  
  constructor(props) {
    super(props);

    this.itemsModel = this.props.stores.itemsStore;
    this.alertsModel = this.props.stores.alertsStore;
    this.TEXT = this.props.stores.textsStore;
    this.ICONS = this.props.stores.icons;
    this.new_field = React.createRef(); // input in a new empty item for get value from him
    this.state = {
      new: this.itemsModel.isEmpty,
      loaded: false,
      error: false
    };    
  }


  componentDidMount() {
    if (!this.itemsModel.isLoaded) {
      this.itemsModel.load().then(() => {
        this.setState({loaded: true, new: this.itemsModel.isEmpty});
        this.itemsModel.loaded = true;
      }).catch(err => {
        this.setState({loaded: true, error: true});
        console.warn(err);
      });
    } else {
      this.setState({loaded: true, new: this.itemsModel.isEmpty});
    }
  }
  

  // activate empty field for add new item
  new() {
    this.setState({
      new: true
    })
  }


  // disable empty field
  cancel(id) {
    this.itemsModel.cancel(id);
  }


  // save new item on back & front
  // clear field value, hide field, show alert
  addNew() {
    this.itemsModel.add(this.new_field.current.value).then(() => {
      this.new_field.current.value = null;  
      this.setState({new: false});
      this.alertsModel.show('save');
    }).catch(e => {
      this.alertsModel.show('error');
    });       
  }


  cancelNew() {
    this.setState({new: false});
    this.new_field.current.value = null;
  }


  // change item text value in store
  change(e, id) {
    this.itemsModel.change(id, e.target.value)
  }


  // after change item value, when we click on "Save" - update item text on --back-- & show alert
  save(id) {
    this.itemsModel.save(id).then(() => {
      this.alertsModel.show('save');  
    }).catch(e => {
      this.alertsModel.show('error');
    });   
  }


  // remove one item from --back-- & front. If items count will be 0 - show empty field for a add new item & show alert
  remove(id) {
    let accept = confirm(this.TEXT.alert_confirm_del);

    if (accept) {
      this.itemsModel.remove(id).then(() => {
        this.itemsModel.isEmpty ? this.new() : null;
        this.alertsModel.show('remove');
      }).catch(e => {
        this.alertsModel.show('error');
      });    
    }
  }


  // remove items from --back-- & remove items from store & show empty field for a add new item & show alert
  removeAll() {
    let accept = confirm(this.TEXT.alert_confirm_delAll);

    if (accept) {
      this.itemsModel.removeAll().then(() => {
        this.new();
        this.alertsModel.show('remove_all');
      }).catch(e => {
        this.alertsModel.show('error');
      }); 
    }       
  }


  // add / remove important status for item
  important(id, flag) {
    if (flag !== true && flag !== false) {
      console.log('Error in make important... Params must be: (int, bool)'); 
      return
    }
    this.itemsModel.important(id, flag);
  }

  // add / remove completed status for item
  completed(id, flag) {
    if (flag !== true && flag !== false) {
      console.log('Error in make completed... Params must be: (int, bool)'); 
      return
    }
    this.itemsModel.completed(id, flag);
  }
  









  // render
  render() {   

    console.log('render...');
           
    if (!this.state.loaded) {
      return <Loader/>
    } else if (this.state.error) {
      return <ErrorLoad text={this.TEXT.home_errorLoad}/>
    }

    let emptyTxt = this.itemsModel.isEmpty ? this.TEXT.home_emptyItems : null;

    // generate items list
    let itemsList = this.itemsModel.items.map((it, i) => {

      let class_name = 'item ';
      if (it.important) {
        class_name += 'item--important ';
      } else if (it.completed) {
        class_name += 'item--completed ';
      } else if (it.active) {
        class_name += 'item--active ';
      }


      return (
        <div key={it.id} className={class_name}>
          <div className="item__wrap">
            <span>{++i}.</span>
            <input 
              className={!it.active ? "disabled" : null} 
              onChange={e => this.change(e, it.id)}
              value={it.text} 
              readOnly={!it.active}
            />
          </div>

          {!it.active ? <ButtonImportant disabled={it.completed} callback={() => this.important(it.id, !it.important)}/> : null}
          {!it.active ? <ButtonCompleted disabled={it.important} callback={() => this.completed(it.id, !it.completed)}/> : null}
          <ButtonSaveEdit active={it.active}  completed={it.completed} save={() => this.save(it.id)}  activate={() => this.itemsModel.activate(it.id)}/>
          <ButtonDelCancel active={it.active} cancel={() => this.cancel(it.id)} remove={() => this.remove(it.id)} />
        </div>
      )
    });





    return (
      <div className="container">
        <h1>{this.TEXT.home_title}</h1>        
        <div className="emptyText">
          {emptyTxt}
        </div>
        <div className="content">
          <div className="items">
            {itemsList}
            {this.state.new ? 
              <EmptyField 
                order={this.itemsModel.items.length + 1} 
                textSave={this.TEXT.btn_save}
                iconSave={this.ICONS.iconSave}
                textCancel={this.TEXT.btn_cancel}
                iconCancel={this.ICONS.iconCancel}
                item={this.new_field} 
                save={() => this.addNew()} 
                cancel={() => this.cancelNew()}
              /> 
              : null}          
          </div>
          <div className="controls">
            <button className="btn" onClick={() => this.new()} disabled={this.state.new}>{this.TEXT.btn_addNew} {this.ICONS.iconAdd}</button>
            <button className="btn" onClick={() => this.removeAll()} disabled={this.itemsModel.isEmpty}>{this.TEXT.btn_removeAll} {this.ICONS.iconRemove}</button>
          </div>

          <Alerts alerts={this.props.stores.alertsStore}/>
        </div>
      </div>
    )
  }
}

export default withStore(Home);