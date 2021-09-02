import React from 'react';
import withStore from '~/hocs/withStore';
import Alerts from '~c/alerts';
import EmptyField from './emptyField';
import Loader from '~c/loaders/default';
import ErrorLoad from '~c/errors/load';

class Home extends React.Component {
  
  constructor(props) {
    super(props);

    this.itemsModel = this.props.stores.itemsStore;
    this.alertsModel = this.props.stores.alertsStore;
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
    this.itemsModel.remove(id).then(() => {
      this.itemsModel.isEmpty ? this.new() : null;
      this.alertsModel.show('remove');
    }).catch(e => {
      this.alertsModel.show('error');
    });    
  }


  // remove items from --back-- & remove items from store & show empty field for a add new item & show alert
  removeAll() {
    this.itemsModel.removeAll().then(() => {
      this.new();
      this.alertsModel.show('remove_all');
    }).catch(e => {
      this.alertsModel.show('error');
    });    
  }
  









  // render
  render() {   
           
    if (!this.state.loaded) {
      return <Loader/>
    } else if (this.state.error) {
      return <ErrorLoad/>
    }

    let emptyTxt = this.itemsModel.isEmpty ? 'List is empty now... Please, add a new note.' : null;

    // generate items list
    let itemsList = this.itemsModel.items.map((it, i) => {

      // button is a different in the active state
      let btn;
      if (it.active) {
        btn = <button className="btn" onClick={() => this.save(it.id)}>Save</button>;               
      } else {
        btn = <button className="btn" onClick={() => this.itemsModel.activate(it.id)}>Edit</button>;  
      }

      return (
        <div key={it.id} className="item">
          <div className="item__wrap">
            <span>{++i}.</span>
            <input 
              className={!it.active ? "disabled" : null} 
              onChange={e => this.change(e, it.id)}
              value={it.text} 
              readOnly={!it.active}
            />
          </div>        
          {btn}
          <button className="btn" onClick={() => this.remove(it.id)}>Remove</button>
        </div>
      )
    });





    return (
      <div className="container">
        <h1>To do list</h1>        
        <div className="emptyText">
          {emptyTxt}
        </div>
        <div className="content">
          <div className="items">
            {itemsList}
            {this.state.new ? 
              <EmptyField order={this.itemsModel.items.length + 1} item={this.new_field} save={() => this.addNew()} /> 
              : null}          
          </div>
          <div className="controls">
            <button className="btn" onClick={() => this.new()} disabled={this.state.new}>Add new</button>
            <button className="btn" onClick={() => this.removeAll()} disabled={this.itemsModel.isEmpty}>Remove all</button>
          </div>

          <Alerts alerts={this.props.stores.alertsStore}/>
        </div>
      </div>
    )
  }
}

export default withStore(Home);