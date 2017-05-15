'use strict';

import type {Action} from '../actions/types';
import { SWITCH_TAB, LOGGED_OUT, Tab } from '../actions/navigation';

type State = {
  tab: Tab;
};

const initialState: State = { tab: 'Policies' };

function navigation(state: State = initialState, action: Action): State {
  if (action.type === 'SWITCH_TAB') {
    return {...state, tab: action.tab};
  }
  if (action.type === 'LOGGED_OUT') {
    return initialState;
  }
  return state;
}

module.exports = navigation;
