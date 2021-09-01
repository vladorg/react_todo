import React from 'react';
import {observer, inject} from 'mobx-react';

export default (Component) => inject('stores')(observer(Component));