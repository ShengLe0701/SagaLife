'use strict';

import React, { Component }from 'react';
import { connect } from 'react-redux';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

import { Container, Header, Title, Content, Button, Icon, Text } from 'native-base';

import theme from '../../themes/base-theme';

class BlankPage extends Component {

    popRoute() {
        this.props.popRoute();
    }

    render() {
        return (
            <Container theme={theme}>
                <Header>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name="ios-arrow-back" />
                    </Button>

                    <Title>BlankPage</Title>

                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name="ios-menu" />
                    </Button>
                </Header>

                <Content padder foregroundColor='#000'>
                    
                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute:()=>dispatch(popRoute())
    }
}

export default connect(null, bindAction)(BlankPage);
