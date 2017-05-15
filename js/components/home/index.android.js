'use strict';

import React, { Component }from 'react';
import { connect } from 'react-redux';

import {openDrawer} from '../../actions/drawer';
import {replaceRoute} from '../../actions/route';

import { Container, Header, Title, Content, Button, Icon, Text } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    render() {
        return (
            <Container theme={theme}>
                <Header>
                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name='ios-menu' />
                    </Button>

                    <Title>Home</Title>
                </Header>

                <Content padder foregroundColor='#000'>
                    <Text>
                        Android . . .
                    </Text>
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

export default connect(null, bindAction)(Home);
