import React from 'react';
import withStore from '~/hocs/withStore';
import styles from './about.scoped.css';



class About extends React.Component {

  constructor(props) {
    super(props);
    
    this.TEXT = this.props.stores.textsStore;
  }

  render() {
    return (
      <div className="container">
        <h1>{this.TEXT.about_title}</h1>

        <div className="content">
          <p>{this.TEXT.about_row1}</p>
          <p>{this.TEXT.about_authorTitle} <span>{this.TEXT.author}</span>.</p>
          <p>{this.TEXT.about_versionTitle} <span>{this.TEXT.version}</span>.</p>
          <div className="history">
          <h3>{this.TEXT.about_historyTitle}</h3>
            <table className={styles.table+' table'}>
              <thead>
                <tr>
                  <th>Version</th>
                  <th>Changes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>5.0 <br/>(current)</td>
                  <td>
                    <ul>
                      <li>- add 404 page</li>
                      <li>- update routing</li>
                      <li>- create texts store</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>4.0</td>
                  <td>
                    <ul>
                      <li>- add backend Api support</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>3.0</td>
                  <td>
                    <ul>
                      <li>- add actions alerts</li>
                      <li>- add withStore HOC</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>2.0</td>
                  <td>
                    <ul>
                      <li>- update webpack config. Added <strong>sass</strong> and <strong>postcss</strong> loaders. Added autoprefixer;</li>
                      <li>- all styles update on <strong>SASS</strong>;</li>
                      <li>- update <strong>About</strong> page: add versions table.</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>1.0</td>
                  <td>Release stable version.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}


export default withStore(About);