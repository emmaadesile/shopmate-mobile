import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import SignupScreen from "../screens/SignupScreen";
import LoginScreen from "../screens/LoginScreen";
import AppIntroScreen from "../screens/AppIntroScreen";
import AuthLoadingScreen from "../screens/AuthLoadingScreen";
import TabNavigator from "../navigator/TabNavigator";

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen
});

const AppIntroStack = createStackNavigator({
  AppIntro: AppIntroScreen
});

const App = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      AppIntro: AppIntroStack,
      Auth: AuthStack,
      App: TabNavigator
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);

export default App;
