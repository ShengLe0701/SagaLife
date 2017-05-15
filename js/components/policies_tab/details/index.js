'use strict';

import React, { Component }from 'react';
import { connect } from 'react-redux';

import {openDrawer} from '../../../actions/drawer';
import {replaceRoute} from '../../../actions/route';

import { Container, Header, Title, Content, Button, Icon, Text, View } from 'native-base';
import { TouchableOpacity, Image } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

import theme from '../../../themes/base-theme';
import styles from './styles';

class Details extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    onClickDetails() {

    }

    render() {
        return (
              <View style={[styles.body,
                  { flexDirection: 'column',
                    borderColor:'rgb(151, 151, 151)',
                    borderRadius:10,
                    borderWidth:1}]}>

                  <View style={{flex: 3,
                      flexDirection: 'row',
                      borderColor:'rgb(230, 230, 230)',
                      borderBottomWidth:1}}>

                      <View style={{flex: 2,
                          flexDirection: 'row',
                          justifyContent:'center',
                          alignItems:'center',
                          borderColor:'rgb(230, 230, 230)',
                          borderRightWidth:1}}>
                          <Image style={styles.imageStyle1} resizeMode={Image.resizeMode.stretch} source={require('../../../../images/images/NTUC.jpg')}/>
                      </View>

                      <View style={{flex: 1}}>
                      </View>

                      <View style={{flex: 6,
                          flexDirection: 'column',
                          }}>

                          <View style={{flex: 0.5,
                              flexDirection: 'column'}}>
                          </View>
                          <View style={{flex: 2,
                              flexDirection: 'column',
                              justifyContent:'center'}}>
                              <Text style={{fontSize:12, color:'rgb(74, 74, 74)'}}> NTUC Income iTerm  [Term Life] </Text>
                          </View>
                          <View style={{flex: 2,
                              flexDirection: 'column',
                              justifyContent:'center'}}>
                              <Text style={{fontSize:11, color:theme.SegmentedControlTintColor}}> Critical Illness Rider </Text>
                          </View>
                          <View style={{flex: 2,
                              flexDirection: 'column',
                              justifyContent:'center'}}>
                              <Text style={{fontSize:11, color:theme.SegmentedControlTintColor}}> Total Permanent Disability Rider </Text>
                          </View>
                          <View style={{flex: 1,
                              flexDirection: 'column'}}>
                          </View>

                      </View>

                  </View>

                  <View style={{flex: 4,
                    flexDirection: 'row',
                    borderColor:'rgb(230, 230, 230)',
                    borderBottomWidth:1}}>

                    <View style={{flex: 1,
                        flexDirection: 'row',
                        justifyContent:'center',
                        alignItems:'center'}}>
                        <Image style={styles.imageStyle2} resizeMode={Image.resizeMode.contain} source={require('../../../../images/tabicons/policies/details_item.png')}/>
                    </View>

                    <View style={{flex: 7,
                        flexDirection: 'column'}}>

                        <View style={{flex: 1,
                            flexDirection: 'row',
                            borderColor:'rgb(230, 230, 230)',
                            borderBottomWidth:1,
                            justifyContent:'space-between',
                            alignItems:'center'}}>
                            <Text style={{fontSize:11, color:'rgb( 21, 41, 53 )'}}> Sum Assured </Text>
                            <Text style={{fontSize:11, color:theme.SegmentedControlTintColor}}> $500,000 </Text>
                        </View>

                        <View style={{flex: 1,
                            flexDirection: 'row',
                            borderColor:'rgb(230, 230, 230)',
                            borderBottomWidth:1,
                            justifyContent:'space-between',
                            alignItems:'center'}}>
                            <Text style={{fontSize:11, color:'rgb( 21, 41, 53 )'}}> Coverage Term </Text>
                            <Text style={{fontSize:11, color:theme.SegmentedControlTintColor}}> Until 65 </Text>
                        </View>

                        <View style={{flex: 1,
                            flexDirection: 'row',
                            justifyContent:'space-between',
                            alignItems:'center'}}>
                            <Text style={{fontSize:11, color:'rgb( 21, 41, 53 )'}}> Premium </Text>
                            <Text style={{fontSize:11, color:theme.SegmentedControlTintColor}}> $565 </Text>
                        </View>

                    </View>

                    <View style={{flex: 0.2,
                        flexDirection: 'row',
                        borderColor:'rgb(230, 230, 230)',
                        borderRightWidth:1}}>
                    </View>

                  </View>

                  <View style={{flex: 2,
                    flexDirection: 'row'}}>

                      <View style={{flex: 2,
                          flexDirection: 'column',
                          borderColor:'rgb(230, 230, 230)',
                          borderRightWidth:1,
                          justifyContent:'center',
                          alignItems:'center'}}>
                          <Text style={{fontSize:11, color:'rgb( 21, 41, 53 )'}}> Entry Date </Text>
                          <Text style={{fontSize:11, color:theme.SegmentedControlTintColor}}> Jun 2011 </Text>
                      </View>

                      <View style={{flex: 3.5,
                          flexDirection: 'column',
                          borderColor:'rgb(230, 230, 230)',
                          borderRightWidth:1,
                          justifyContent:'center',
                          alignItems:'center'}}>
                          <Text style={{fontSize:11, color:'rgb( 21, 41, 53 )'}}> Payment Term </Text>
                          <Text style={{fontSize:11, color:theme.SegmentedControlTintColor}}> 20 years </Text>
                      </View>

                      <View style={{flex: 3.5,
                          flexDirection: 'column',
                          justifyContent:'center',
                          alignItems:'center' }}>
                          <TouchableOpacity style={styles.buttonStyle1} onPress={this.onClickDetails.bind(this)}>
                              <Text style={styles.textStyle1}>DETAILS</Text>
                          </TouchableOpacity>
                      </View>

                  </View>

              </View>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        replaceRoute: (route) => dispatch(replaceRoute(route))
    }
}

export default Details = connect(null, bindAction)(Details);
