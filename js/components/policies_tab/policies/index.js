'use strict';

import React, { Component }from 'react';
import { connect } from 'react-redux';

import {openDrawer} from '../../../actions/drawer';
import {replaceRoute} from '../../../actions/route';

import { Container, Header, Title, Content, Button, Icon, Text, View } from 'native-base';
import { TouchableOpacity } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import Details from '../details';

import theme from '../../../themes/base-theme';
import styles from './styles';

class Policies extends Component {

    constructor(props) {
        super(props);

        this.state = {
            segmentedControlTabValues: ['My Policies', 'Shared with me'],
            segmentedControlTabIndex: undefined
        };
    }

    componentDidMount() {
    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    onSegmentedControlTabIndexChanaged(index) {
        this.setState({segmentedControlTabIndex:index});
    }

    onClickAddPolicy() {

    }

    onClickTransferAll() {

    }

    render() {
        return (
            <Container theme={theme}>
                <Header>
                    <Title>Policies</Title>
                </Header>

                <Content scrollEnabled={false}>
                    <View style={[styles.body, {flex: 1, flexDirection: 'column'}]}>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                            <View style={{flex:1}}/>
                            <View style={{flex:15}}>
                                <SegmentedControlTab tabsContainerStyle={styles.tabsContainerStyle}
                                    tabStyle={styles.tabStyle}
                                    tabTextStyle={styles.tabTextStyle}
                                    activeTabStyle={styles.activeTabStyle}
                                    activeTabTextStyle={styles.activeTabTextStyle}
                                    selectedIndex={this.state.segmentedControlTabIndex}
                                    values={this.state.segmentedControlTabValues}
                                    onPress= {this.onSegmentedControlTabIndexChanaged.bind(this)} />
                            </View>
                            <View style={{flex:1}}/>
                        </View>
                        <View style={{flex: 5, flexDirection: 'column', alignItems:'center'}}>
                            <Details />
                        </View>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                            <TouchableOpacity style={[styles.buttonStyle1, {flex:1}]} onPress={this.onClickAddPolicy.bind(this)}>
                                <Text style={styles.textStyle1}>ADD POLICY</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.buttonStyle1, {flex:1}]} onPress={this.onClickTransferAll.bind(this)}>
                                <Text style={styles.textStyle1}>TRANSFER ALL</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        replaceRoute: (route) => dispatch(replaceRoute(route))
    }
}

export default Policies = connect(null, bindAction)(Policies);
