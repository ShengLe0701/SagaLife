'use strict';

import theme from '../../../themes/base-theme';
import React, {Platform, Dimensions} from 'react-native';

var { StyleSheet } = React;

var bodyWidth = theme.deviceWidth * 15/17;
var bodyHeight = (theme.deviceHeight - theme.tabBarHeight - theme.toolbarHeight) * 2/5;
module.exports = StyleSheet.create({
    body:{
        marginTop: 0,
        width:bodyWidth,
        height:bodyHeight,
    },

    imageStyle1:{
        width: bodyWidth*2/10,
        height:bodyHeight*3/10,
    },

    imageStyle2:{
        width: bodyWidth*1/13,
    },

    buttonStyle1: {
        height:(Platform.OS==='ios') ? bodyHeight * 2/15 : bodyHeight * 215,
        width:(Platform.OS==='ios') ? bodyWidth * 3.5/12 : bodyHeight * 3.5/12,
        backgroundColor:theme.SegmentedControlTintColor,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },

    textStyle1: {
        textAlign: 'center',
        fontSize: 13,
    }
});
