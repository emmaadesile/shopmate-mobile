import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import AppIntroScreen from "../screens/AppIntroScreen";
import ShoppingScreen from "../screens/ShoppingScreen";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen
});

const AppIntroStack = createStackNavigator({
  AppIntro: AppIntroScreen
});

const AppStack = createStackNavigator({
  Shop: ShoppingScreen
});

const App = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      AppIntro: AppIntroStack,
      Auth: AuthStack,
      App: AppStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

export default App;
