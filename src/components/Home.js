import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Container, Content, Icon  } from 'native-base';

class Home extends Component {
    render() {
        return (
            <Container>
                <Content>
                    {/* if file is local : source={require('/path')} ||  if file is online: source={{ uri:'url' }} */}
                    <Image source={require('../../assets/images/logo.png')} style={{ widget: 200, height: 200 }}/>
                </Content>
            </Container>
        );
    }
}


export default Home;