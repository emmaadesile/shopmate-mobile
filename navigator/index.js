import { createStackNavigator, createAppContainer } from "react-navigation";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ShoppingScreen from "../screens/ShoppingScreen";

const AppStack = createStackNavigator({
  Home: HomeScreen,
  Signup: SignupScreen,
  Login: LoginScreen,
  Shop: ShoppingScreen
});

export default (App = createAppContainer(AppStack));
