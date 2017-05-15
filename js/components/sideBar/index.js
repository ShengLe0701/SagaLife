'use strict';

import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';

import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';

import { View, Text, Icon, List, ListItem, Content } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './style';

class SideBar extends Component {
    
    navigateTo(route) {
        this.props.closeDrawer();
        this.props.replaceOrPushRoute(route);
    }

    render(){
        return (
            <Content theme={theme} style={{backgroundColor: '#fff'}} >
                <Image style={styles.image} source={require('../../../images/cover-default.png')} >
                    <Image style={styles.thumbnail} source={require('../../../images/profile-default.png')}/>
                    <Text style={[styles.name, {top: 120}]}>John Doe </Text>
                    <Text style={[styles.name, {top: 140}]}>$ 500, Strap Sale Credit </Text>
                </Image>

                <Text style={{color: '#000', fontSize: 16, margin: 20, fontWeight: '500', marginBottom: 10}}>
                    Shop by Category
                </Text>
                <List foregroundColor={'#000'} style={styles.list}>
                    <ListItem button onPress={() => this.navigateTo('home')} iconLeft style={styles.links} >
                        <View style={styles.sidebarList}>
                            <View style={[ styles.sidebarIconView, {backgroundColor: '#00afc1', paddingLeft: 11}] }>
                                <Icon name='ios-phone-portrait' style={styles.sidebarIcon} />
                            </View>
                            <Text style={styles.linkText} >Home</Text>
                        </View>
                    </ListItem>
                    <ListItem button onPress={() => this.navigateTo('blankPage')} iconLeft style={styles.links} >
                        <View style={styles.sidebarList}>
                            <View style={[ styles.sidebarIconView, {backgroundColor: '#00afc1', paddingLeft: 11}] }>
                                <Icon name='ios-copy' style={styles.sidebarIcon} />
                            </View>
                            <Text style={styles.linkText} >Blank Page</Text>
                        </View>
                    </ListItem>
                </List>
            </Content>
        );
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: ()=>dispatch(closeDrawer()),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route))
    }
}

export default connect(null, bindAction)(SideBar);
