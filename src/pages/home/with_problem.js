import React from 'react';
import {observer} from 'mobx-react';
import itemsModel from '~s/items';


// проблема с добавлением нового пункта. Решено в index, этот файл для фиксации проблемы.


@observer class Home extends React.Component {
  
  constructor() {
    super();
    this.state = {
      items: {},
      new: false
    };

    this.new_field = React.createRef();

    itemsModel.items.map(item => {
      this.state.items[item.id] = {
        text: item.text
      }
    }); 
      
  }

  // shouldComponentUpdate() {
  //   itemsModel.items.map(item => {
  //     this.state.items[item.id] = {
  //       text: item.text
  //     }
  //   }); 
  // }

  new() {
    this.setState({
      new: true
    })
  }

  addNew() {
    itemsModel.add(this.new_field.current.value);
    this.setState({
      new: false
    });
    this.new_field.current.value = null;
  }

  change(e, id) {
    let items = {...this.state.items};
    items[id].text = e.target.value
    this.setState({items});
  }

  save(id) {
    let new_text = this.state.items[id].text;
    itemsModel.save(id, new_text);
  }
  

  render() {      

    let emptyItem = 
      <div className={styles.item}>
        <div className={styles.item__wrap}>
          <span>{itemsModel.items.length + 1}.</span>
          <input ref={this.new_field}/>
        </div>
        <button className="btn" onClick={() => this.addNew()}>Save</button>
      </div>;

    let itemsList = itemsModel.items.map((it, i) => {

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
          <button className="btn" onClick={() => itemsModel.remove(it.id)}>Remove</button>
        </div>
      )
    });


    return (
      <div className="container">
        <h1>To do list</h1>

        <div className={styles.content}>

          <div className={styles.items}>

            {itemsList}

            {this.state.new ? emptyItem : null}
            
          
          </div>

          <div className={styles.controls}>
            <button className="btn" onClick={() => this.new()} disabled={this.state.new}>Add new</button>
            <button className="btn" onClick={() => itemsModel.removeAll()}>Remove all</button>
          </div>

        </div>
      </div>
    )

  }


}

export default Home;