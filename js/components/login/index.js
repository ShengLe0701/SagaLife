'use strict';

import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import { connect } from 'react-redux';

import { pushNewRoute, replaceRoute } from '../../actions/route';

import { Container, Content, Text, InputGroup, Input, Button, Icon, View } from 'native-base';

import login from './login-theme';
import styles from './styles';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            scroll: false
        };
    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

    render() {
        return (
            <Container>
                <Content theme={login} style={{backgroundColor: login.backgroundColor}} >
                    <Image source={require('../../../images/logo.png')} style={styles.shadow} />
                    <View style={styles.inputContainer}>
                        <View style={{marginBottom: 20}}>
                            <InputGroup>
                                <Icon name='ios-person' />
                                <Input
                                    placeholder='Email'
                                    onChangeText={(email) => this.setState({email})}
                                />
                            </InputGroup>
                        </View>

                        <View style={{marginBottom: 20}}>
                            <InputGroup >
                                <Icon name='ios-unlock-outline' />
                                <Input
                                    placeholder='Password'
                                    secureTextEntry={true}
                                    onChangeText={(password) => this.setState({password})}
                                />
                            </InputGroup>
                        </View>

                        <Button transparent style={styles.forgot} textStyle={{fontSize:14, textDecorationLine: 'underline'}}>
                                Forgot Login details?
                        </Button>
                        <Button style={styles.login} onPress={() => this.replaceRoute('home', {email: this.state.email, password: this.state.password})}>
                            Login
                        </Button>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 20}}>
                        <Button style={[styles.logoButton, {backgroundColor: '#3541A9'}]}>
                            <Icon name='logo-facebook' />
                        </Button>
                        <Button style={[styles.logoButton, {backgroundColor: '#b63a48'}]}>
                            <Icon name='logo-google' />
                        </Button>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <Text>Dont have an account? </Text>
                        <Button transparent style={styles.transparentButton} textStyle={{lineHeight: (Platform.OS==='ios') ? 15 : 24, textDecorationLine: 'underline'}}>
                            Sign up here
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}


function bindActions(dispatch){
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
        pushNewRoute:(route)=>dispatch(pushNewRoute(route))
    }
}

export default connect(null, bindActions)(Login);
