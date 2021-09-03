import React from 'react';
import withStore from '~/hocs/withStore';

class Error404 extends React.Component {

  constructor(props) {
    super(props);

    this.TEXT = this.props.stores.textsStore;
  }
  render() {
    return (
      <div className="container">
        <h1>{this.TEXT.e404_title}</h1>

        <div className="content">
          <p>{this.TEXT.e404_subTitle}</p>
        </div>
      </div>
    )
  }
}

export default withStore(Error404);