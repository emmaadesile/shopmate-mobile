import { createStackNavigator, createAppContainer } from "react-navigation";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Signup: SignupScreen,
  Login: LoginScreen
});

export default (App = createAppContainer(HomeStack));
