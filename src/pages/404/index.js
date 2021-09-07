import React from 'react';
import withStore from '~/hocs/withStore';
import styles from './404.scoped.css';

class Error404 extends React.Component {

  constructor(props) {
    super(props);

    this.TEXT = this.props.stores.textsStore;
  }
  render() {
    return (
      <div className="container">
        <h1>{this.TEXT.e404_title}</h1>

        <div className={styles.content+' content'}>
          <p>{this.TEXT.e404_subTitle}</p>
        </div>
      </div>
    )
  }
}

export default withStore(Error404);