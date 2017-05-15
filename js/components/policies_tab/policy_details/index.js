'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import {openDrawer} from '../../../actions/drawer';
import {replaceRoute} from '../../../actions/route';

import { Container, Title, Header, Content, Button, Icon, View } from 'native-base';
import { TouchableOpacity, Platform,  Image, Text, Alert, TextInput } from 'react-native';

import theme from '../../../themes/base-theme';
import styles from './styles';

class PolicyDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shareAlertOpened: false,
        }
    }

    componentDidMount() {
    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    onClickShare() {
        this.setState({
          shareAlertOpened:true,
        });

        Alert.alert(
          'Alert Title',
          'My Alert Msg',
          [
            {textInput: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]
        );

    }

    onShareConfirm() {

    }


    render() {
        console.log("Test");
        return (
            <Container theme={theme}>
                <Header>
                    <Button transparent onPress={this.props.openDrawer} >
                        <Icon name="ios-arrow-back"></Icon>
                        <Text > Policies </Text>
                    </Button>

                    <Title>Policy Details</Title>

                    <Button transparent onPress={this.props.openDrawer} >
                        <Text style={{fontSize:18, color:'white'}}> Edit </Text>
                    </Button>
                </Header>

                <Content scrollEnabled={false}>
                    <View style={[styles.body, {flex: 1, flexDirection: 'column'}]}>
                        <View style={{flex: 25, flexDirection: 'row', justifyContent:'center', alignItems:'center',}}>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems:'center',}}>
                            </View>
                            <View style={{flex: 15, flexDirection: 'column',}}>

                                <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems:'center',}}>
                                </View>
                                <View style={{flex: 4, flexDirection: 'row',}}>

                                    <View style={{flex: 2,
                                        flexDirection: 'row',
                                        justifyContent:'center',
                                        alignItems:'center',}}>
                                        <Image style={styles.imageStyle1} resizeMode={Image.resizeMode.stretch} source={require('../../../../images/images/NTUC.jpg')}/>
                                    </View>

                                    <View style={{flex: 0.5}}>
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
                                            <Text style={{fontSize:14, color:'rgb(74, 74, 74)'}}> NTUC Income iTerm  [Term Life] </Text>
                                        </View>
                                        <View style={{flex: 2,
                                            flexDirection: 'column',
                                            justifyContent:'center'}}>
                                            <Text style={{fontSize:14, color:theme.SegmentedControlTintColor}}> Critical Illness Rider </Text>
                                        </View>
                                        <View style={{flex: 2,
                                            flexDirection: 'column',
                                            justifyContent:'center'}}>
                                            <Text style={{fontSize:14, color:theme.SegmentedControlTintColor}}> Total Permanent Disability Rider </Text>
                                        </View>
                                        <View style={{flex: 1,
                                            flexDirection: 'column'}}>
                                        </View>

                                    </View>

                                </View>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems:'center',}}>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', alignItems:'center',}}>
                                    <Text style={{fontSize:12, color:'rgb( 21, 41, 53 )'}}> Sum Assured </Text>
                                    <Text style={{fontSize:12, color:theme.SegmentedControlTintColor}}> $500,000 </Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', alignItems:'center',}}>
                                    <Text style={{fontSize:12, color:'rgb( 21, 41, 53 )'}}> Coverage Term </Text>
                                    <Text style={{fontSize:12, color:theme.SegmentedControlTintColor}}> Until 65 </Text>
                                </View>
                                <View style={{flex: 2, flexDirection: 'row', justifyContent:'center', alignItems:'center',}}>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', alignItems:'center',}}>
                                    <Text style={{fontSize:12, color:'rgb( 21, 41, 53 )'}}> Entry Date </Text>
                                    <Text style={{fontSize:12, color:theme.SegmentedControlTintColor}}> Jun 2011 </Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', alignItems:'center',}}>
                                    <Text style={{fontSize:12, color:'rgb( 21, 41, 53 )'}}> Payment Term </Text>
                                    <Text style={{fontSize:12, color:theme.SegmentedControlTintColor}}> 20 years </Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between', alignItems:'center',}}>
                                    <Text style={{fontSize:12, color:'rgb( 21, 41, 53 )'}}> Premium </Text>
                                    <Text style={{fontSize:12, color:theme.SegmentedControlTintColor}}> $565 </Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems:'center',}}>
                                </View>
                                <View style={{flex: 9, flexDirection: 'row', justifyContent:'center', alignItems:'center',}}>
                                    <Text style={{flex:1, fontSize:12, color:'rgb( 21, 41, 53 )'}}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at mauris auctor, molestie neque non, vulputate risus. Aenean hendrerit libero quis odio scelerisque iaculis. Donec facilisis lectus nec orci mollis efficitur. Duis varius euismod euismod. Nam consectetur odio sed nisl imperdiet rhoncus. Praesent nec enim egestas, egestas metus vitae, consectetur mi. Sed euismod ornare nibh in iaculis. Nam vel mauris sagittis, rutrum massa tincidunt, ultricies nisi. Curabitur eu nisl volutpat, tempus elit quis, ullamcorper massa. Duis consequat rutrum lorem, et pulvinar enim ornare scelerisque. Sed ullamcorper elementum quam vel scelerisque. Phasellus erat quam, porta id mi non, imperdiet  </Text>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems:'center',}}>
                                </View>

                            </View>
                            <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems:'center',}}>
                            </View>
                        </View>

                        <View style={{flex: 3, flexDirection: 'row', justifyContent:'center', alignItems:'center',}}>
                            <TouchableOpacity style={[styles.buttonStyle1, {flex:1, flexDirection: 'row'}]} onPress={this.onClickShare.bind(this)}>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems:'center',}}>
                                    <Image style={styles.imageStyle2} resizeMode={Image.resizeMode.stretch} source={require('../../../../images/policies/profileRound1342@3x.png')}/>
                                    <Image style={styles.imageStyle2} resizeMode={Image.resizeMode.stretch} source={require('../../../../images/policies/profileRound1342@3x.png')}/>
                                    <Image style={styles.imageStyle2} resizeMode={Image.resizeMode.stretch} source={require('../../../../images/policies/profileRound1342@3x.png')}/>
                                </View>
                                <View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems:'center',}}>
                                    <Text style={styles.textStyle1}>SHARE</Text>
                                </View>
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

export default PolicyDetails = connect(null, bindAction)(PolicyDetails);
