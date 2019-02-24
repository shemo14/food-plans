import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from '../components/Login';
import Register from '../components/Register';
import LoginAndRegister from "../components/LoginAndRegister";

const AppNavigator = createStackNavigator({
    loginAndRegister: {
        screen: LoginAndRegister,
        navigationOptions: {
            header: null
        }
    },
    login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    register: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    }
});

export default createAppContainer(AppNavigator);