import React from 'react';
import withStore from '~/hocs/withStore';
import styles from './about.scoped.css';



class About extends React.Component {

  constructor(props) {
    super(props);    
    this.TEXT = this.props.stores.textsStore;
    this.versions = this.props.stores.versions;
  }

  render() {

    let versionsRows = this.versions.versions.map((ver, i) => {
      let changes = ver.changes.map((change, index) => <li key={index}>- {change}</li>);
      let verTitle = () => {
        if (ver.current) {
          return <td> {ver.ver} <br/> {this.TEXT.versions_current}</td>
        }
        return <td>{ver.ver}</td>
      }

      return (
        <tr key={i}>
          {verTitle()}
          <td>
            <ul>
              {changes}
            </ul>
          </td>
        </tr>
      );

    });


    return (
      <div className="container">
        <h1>{this.TEXT.about_title}</h1>

        <div className={styles.content+' content'}>
          <p>{this.TEXT.about_row1}</p>
          <p>{this.TEXT.about_authorTitle} <span>{this.TEXT.author}</span>.</p>
          <p>{this.TEXT.about_versionTitle} <span>{this.TEXT.version}</span>.</p>
          <div className="history">
          <h3>{this.TEXT.about_historyTitle}</h3>
            <table className={styles.table+' table'}>
              <thead>
                <tr>
                  <th>{this.TEXT.versions_title}</th>
                  <th>{this.TEXT.versions_changes}</th>
                </tr>
              </thead>
              <tbody>
                {versionsRows}  
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}


export default withStore(About);