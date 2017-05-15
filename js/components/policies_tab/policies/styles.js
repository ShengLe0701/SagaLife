'use strict';

import theme from '../../../themes/base-theme';
import React, {Platform, Dimensions} from 'react-native';

var { StyleSheet } = React;

var bodyWidth = theme.deviceWidth;
var bodyHeight = theme.deviceHeight - theme.tabBarHeight - theme.toolbarHeight;
module.exports = StyleSheet.create({
    body:{
        marginTop: theme.contextMarginTop,
        width:bodyWidth,
        height:bodyHeight,
    },
    row: {
    	flex: 1,
    	alignItems: 'center'
    },
    text: {
        fontSize: 15,
        color: "#000",
        marginBottom: 10
    },
    tabsContainerStyle: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
    },
    tabStyle: {
        paddingVertical: 5,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: theme.SegmentedControlTintColor,
        borderWidth: 1,
        backgroundColor: 'white',
    },
    activeTabStyle: {
        backgroundColor: theme.SegmentedControlTintColor
    },
    tabTextStyle: {
        color: theme.SegmentedControlTintColor
    },
    activeTabTextStyle: {
        color: 'white'
    },

    buttonStyle1: {
        height:(Platform.OS==='ios') ? bodyHeight/7.2 : bodyHeight/7.2,
        borderColor:theme.SegmentedControlTintColor,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },

    textStyle1: {
        textAlign: 'center',
        color: "rgba(255, 205, 0, 1)",
        fontSize: 15,
    }

});
