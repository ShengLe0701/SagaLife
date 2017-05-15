'use strict';

import { combineReducers } from 'redux';

import drawer from './drawer';
import route from './route';
import navigation from './navigation'

export default combineReducers({

		drawer,
  	route,
		navigation,
		
})
