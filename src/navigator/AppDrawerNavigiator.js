import { createDrawerNavigator, createStackNavigator } from "react-navigation";
import { Dimensions } from "react-native";
import TabNavigator from "./TabNavigator";
import CustomAppDrawer from "../screens/CustomAppDrawer";
import CustomerSupportScreen from "../screens/CustomerSupportScreen";
import CustomerSupportContact from "../screens/CustomerSupportContact";
import CustomerSupportSendQuestion from "../screens/CustomerSupportSendQuestion";
import CustomerServiceScreen from "../screens/CustomerServiceScreen";
import CustomerServiceScreen2 from "../screens/CustomerServiceScreen2";

const screenWidth = Dimensions.get("window").width;

const CustomerSupportStack = createStackNavigator({
  CustomerSupport: CustomerSupportScreen,
  CustomerSupportContact,
  SendQuestion: CustomerSupportSendQuestion
});

const CustomerServiceStack = createStackNavigator({
  CustomerService: CustomerServiceScreen,
  CustomerService2: CustomerServiceScreen2
});

const AppDrawerNavigator = createDrawerNavigator(
  {
    App: TabNavigator,
    CustomerSupportStack,
    CustomerServiceStack
  },
  {
    contentComponent: CustomAppDrawer,
    drawerWidth: screenWidth - 50
  }
);

export default AppDrawerNavigator;
