'use strict';

import React, { Component }from 'react';
import { connect } from 'react-redux';

var { openDrawer, replaceRoute } = require('../../actions/drawer');
var { switchTab, Tab } = require('../../actions/navigation');

import Navigator from 'Navigator';
import { Container, Header, Title, Content, Button, Icon, Text, View } from 'native-base';
import {TabBarIOS} from 'react-native';

import Policies from '../policies_tab/policies';

import theme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {
    props: {
        tab: Tab,
        onTabSelect: (tab: Tab) => void,
        navigator: Navigator,
    }

    constructor(props) {
        super(props);

    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    onTabSelect(tab: Tab) {
        if (this.props.tab !== tab) {
            this.props.onTabSelect(tab);
        }
    }

    render() {
        return (
          <TabBarIOS>
              <TabBarIOS.Item
                title="Policies"
                selected={this.props.tab==='Policies'}
                onPress={this.onTabSelect.bind(this, 'Policies')}
                icon={require('../../../images/tabicons/policies/fileboard1801@3x.png')}>

                  <Policies navigator={this.props.navigator}/>

              </TabBarIOS.Item>

              <TabBarIOS.Item
                title="Coverage"
                selected={this.props.tab == 'Coverage'}
                onPress={this.onTabSelect.bind(this, 'Coverage')}
                icon={require('../../../images/tabicons/coverage/umbrellaRound773@3x.png')}>

                  <View>
                      <Text>Coverage Stage</Text>
                  </View>

              </TabBarIOS.Item>

              <TabBarIOS.Item
                title="Compare"
                selected={this.props.tab == 'Compare'}
                onPress={this.onTabSelect.bind(this, 'Compare')}
                icon={require('../../../images/tabicons/compare/cart1167@3x.png')}>

                  <View>
                      <Text>Compare Stage</Text>
                  </View>

              </TabBarIOS.Item>

              <TabBarIOS.Item
                title="You"
                selected={this.props.tab == 'You'}
                onPress={this.onTabSelect.bind(this, 'You')}
                icon={require('../../../images/tabicons/you/profileRound1342@3x.png')}>

                  <View>
                      <Text>You Stage</Text>
                  </View>

              </TabBarIOS.Item>

              <TabBarIOS.Item
                title="Notifications"
                selected={this.props.tab == 'Notifications'}
                onPress={this.onTabSelect.bind(this, 'Notifications')}
                icon={require('../../../images/tabicons/notifications/notificationBell1398@3x.png')}>

                  <View>
                      <Text>Notifications Stage</Text>
                  </View>

              </TabBarIOS.Item>


          </TabBarIOS>
        )
    }
}

function bindProps(store) {
  return {
    tab: store.navigation.tab,
  };
}


function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        replaceRoute: (route) => dispatch(replaceRoute(route)),
        onTabSelect: (tab) => dispatch(switchTab(tab)),
    }
}



export default connect(bindProps, bindAction)(Home);
