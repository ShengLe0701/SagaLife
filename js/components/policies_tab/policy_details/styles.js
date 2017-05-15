'use strict';

import theme from '../../../themes/base-theme';
import React, {Platform, Dimensions} from 'react-native';

var { StyleSheet } = React;

var bodyWidth = theme.deviceWidth;
var bodyHeight = theme.deviceHeight - theme.tabBarHeight - theme.toolbarHeight;
module.exports = StyleSheet.create({
    body:{
        marginTop: 0,
        width:bodyWidth,
        height:bodyHeight,
    },

    imageStyle1:{
        width: bodyWidth*2/10,
        height:bodyHeight*4/28,
    },

    imageStyle2:{
        margin:5,
        width: bodyWidth/12,
        height:bodyHeight*1.5/28,
    },

    buttonStyle1: {
        borderColor:theme.SegmentedControlTintColor,
        borderWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },

    textStyle1: {
        textAlign: 'center',
        color: "rgba(255, 205, 0, 1)",
        fontSize: 20,
    }

});
