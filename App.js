import React from 'react';
import { View } from "react-native";
import AppNavigator from './src/routes';
import {Font} from "expo";

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.loadFontAsync();
        this.state = {
            fontLoaded: false
        };
    }
    async loadFontAsync() {
        try {
            await Font.loadAsync({ RegularFont: require("./assets/fonts/DINNextLTW23-Regular.ttf") });
            await Font.loadAsync({ BoldFont: require("./assets/fonts/DINNextLTW23-Bold.ttf") });
            this.setState({ fontLoaded: true });
        } catch (e) {
            console.log(e);
        }
    }
  render() {

      if (!this.state.fontLoaded) {
          return <View />;
      }

    return (
      <AppNavigator />
    );
  }
}
