import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import stores from '~s';

import '~/sass/main.sass';

// stores.itemsStore.load().then(() => {
//   ReactDOM.render(<App/>, document.querySelector('#app'));
// }).catch(err => console.warn(err))

ReactDOM.render(<App/>, document.querySelector('#app'));

