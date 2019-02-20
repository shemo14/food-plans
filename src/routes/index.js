import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from '../components/Home';
import LoginAndRegister from "../components/LoginAndRegister";

const AppNavigator = createStackNavigator({
    loginAndRegister: {
        screen: LoginAndRegister,
        navigationOptions: {
            header: null
        }
    },
    home: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    }
});

export default createAppContainer(AppNavigator);