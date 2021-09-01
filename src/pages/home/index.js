import React from 'react';
import withStore from '~/hocs/withStore';
import Alerts from '~c/alerts';

class Home extends React.Component {
  
  constructor(props) {
    super(props);
    let stores = this.props.stores;

    this.itemsModel = stores.itemsStore;
    this.alertsModel = stores.alertsStore;

    this.state = {
      items: {},
      new: false
    };

    this.new_field = React.createRef(); // input for get value from him

    this.itemsModel.items.map(item => { // init items from model
      this.state.items[item.id] = {
        text: item.text
      }
    }); 

    console.log('constructor...');
      
  }
  

  // activate empty field for add new item
  new() {
    this.setState({
      new: true
    })
  }


  // save new item. send value to model and initialize items state again like in constructor
  // clear field value, hide field
  addNew() {
    if (this.new_field.current.value == '') {
      this.new_field.current.value = 'Empty note...';
    }
    let updatedItems = {};
    this.itemsModel.add(this.new_field.current.value);
    this.itemsModel.items.map(item => {
      updatedItems[item.id] = {
        text: item.text
      }
    }); 
    this.new_field.current.value = null;

    this.setState({
      items: updatedItems,
      new: false
    });

    this.alertsModel.show('save');
  }


  // change inner state item
  // Note. item value state must be inner for a correct change
  change(e, id) {
    let items = {...this.state.items};
    items[id].text = e.target.value
    this.setState({items});
  }


  // after change item value, when we click on "Save" - 
  // - call a model action "@save" for a synchronization with it
  save(id) {
    if (this.state.items[id].text == '') {
      let items = {...this.state.items};
      items[id].text = 'Empty note...';
      this.setState({items});
      this.itemsModel.save(id, 'Empty note...');
    } else {
      this.itemsModel.save(id, this.state.items[id].text);
    }

    this.alertsModel.show('save');
    
  }

  // remove one item. If items count will be 0 - show empty field for a add new item
  remove(id) {
    this.itemsModel.remove(id);
    this.itemsModel.isEmpty ? this.new() : null;
    this.alertsModel.show('remove');
  }


  // remove items from model & show empty field for a add new item
  removeAll() {
    this.itemsModel.removeAll();
    this.new();
    this.alertsModel.show('remove_all');
  }
  

  // render. logged it in console
  render() {      

    console.log('render');

    let empty_text = this.itemsModel.isEmpty ? 'List is empty now... Please, add a new note.' : null;


    // generate empty field
    let emptyItem = 
      <div className="item">
        <div className="item__wrap">
          <span>{this.itemsModel.items.length + 1}.</span>
          <input ref={this.new_field}/>
        </div>
        <button className="btn" onClick={() => this.addNew()}>Save</button>
      </div>;

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
              value={this.state.items[it.id].text} 
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
          {empty_text}
        </div>

        <div className="content">

          <div className="items">

            {itemsList}

            {this.state.new ? emptyItem : null}
            
          
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