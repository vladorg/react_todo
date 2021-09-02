import React from 'react';
import styles from './about.scoped.css';



export default class extends React.Component {

  render() {
    return (
      <div className="container">
        <h1>About</h1>

        <div className="content">
          <p>This is a my first react application.</p>
          <p>Author: <span>Vladislav Pshenichniy</span>.</p>
          <p>Current version: <span>4.0</span>.</p>
          <div className="history">
          <h3>Versions history:</h3>
            <table className={styles.table+' table'}>
              <thead>
                <tr>
                  <th>Version</th>
                  <th>Changes</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <td>4.0 <br/>(current)</td>
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