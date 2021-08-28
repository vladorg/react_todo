import React from 'react';
import {observer} from 'mobx-react';
import styles from './home.module.css';
import itemsModel from '~s/items';




@observer class Home extends React.Component {
  
  constructor() {
    super();

    this.state = {
      items: {},
      new: false
    };

    this.new_field = React.createRef(); // input for get value from him

    itemsModel.items.map(item => { // init items from model
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
    itemsModel.add(this.new_field.current.value);
    itemsModel.items.map(item => {
      updatedItems[item.id] = {
        text: item.text
      }
    }); 
    this.new_field.current.value = null;

    this.setState({
      items: updatedItems,
      new: false
    });
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
      itemsModel.save(id, 'Empty note...');
    } else {
      itemsModel.save(id, this.state.items[id].text);
    }
    
  }

  // remove one item. If items count will be 0 - show empty field for a add new item
  remove(id) {
    itemsModel.remove(id);
    itemsModel.isEmpty ? this.new() : null;
  }


  // remove items from model & show empty field for a add new item
  removeAll() {
    itemsModel.removeAll();
    this.new();
  }
  

  // render. logged it in console and showed current state
  render() {      

    console.log('render');
    console.log(this.state);

    let empty_text = itemsModel.isEmpty ? 'List is empty now... Please, add a new note.' : null;


    // generate empty field
    let emptyItem = 
      <div className={styles.item}>
        <div className={styles.item__wrap}>
          <span>{itemsModel.items.length + 1}.</span>
          <input ref={this.new_field}/>
        </div>
        <button className="btn" onClick={() => this.addNew()}>Save</button>
      </div>;

    // generate items list
    let itemsList = itemsModel.items.map((it, i) => {


      // button is a different in the active state
      let btn;
      if (it.active) {
        btn = <button className="btn" onClick={() => this.save(it.id)}>Save</button>;               
      } else {
        btn = <button className="btn" onClick={() => itemsModel.activate(it.id)}>Edit</button>;  
      }

      return (
        <div key={it.id} className={styles.item}>
          <div className={styles.item__wrap}>
            <span>{++i}.</span>
            <input 
              className={!it.active ? styles.disabled : null} 
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
        
        <div className={styles.emptyText}>
          {empty_text}
        </div>

        <div className={styles.content}>

          <div className={styles.items}>

            {itemsList}

            {this.state.new ? emptyItem : null}
            
          
          </div>

          <div className={styles.controls}>
            <button className="btn" onClick={() => this.new()} disabled={this.state.new}>Add new</button>
            <button className="btn" onClick={() => this.removeAll()} disabled={itemsModel.isEmpty}>Remove all</button>
          </div>


        </div>
      </div>
    )

  }


}

export default Home;