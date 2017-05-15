'use strict';

import type { Action } from './types';

export const SWITCH_TAB = "SWITCH_TAB";
export const LOGGED_OUT = "LOGGED_OUT";

export type Tab = 'Policies' | 'Coverage' | 'Compare' | 'You' | 'Notifications';

module.exports = {
    switchTab: (tab: Tab): Action => ({
      type: SWITCH_TAB,
      tab,
    }),
};
