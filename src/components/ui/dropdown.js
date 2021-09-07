// import React from 'react';

// export default class extends React.Component {

//   constructor(props) {
//     super(props);

//     this.title = this.props.title;
//     this.items = this.props.items;
//     this.onChange = this.props.onChange || function(){};

//     this.state = {
//       status: false
//     }
//   } 

//   render() {

//     let rows = this.items.map((item, i) => {
//       let class_name = item.active ? 'dropdown__item active' : 'dropdown__item';

//       return (
//         <button 
//           key={i} 
//           data-item={item.id} 
//           className={class_name}
//           onClick={() => this.onChange(item.id)}
//           disabled={item.active}
//         >
//           {item.placeholder}
//         </button>
//       )
//     });

//     let class_name = this.state.status ? 'dropdown active' : 'dropdown';
    
//     return (
//       <div className={class_name}>
//         <button className="dropdown__title" onClick={() => this.setState({status: !this.state.status})}>{this.title}</button>
//         <div className="dropdown__inner">
//           {rows}
//         </div>
//       </div>
//     )
//   }
// }