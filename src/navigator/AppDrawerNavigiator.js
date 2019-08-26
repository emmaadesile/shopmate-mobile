import { createDrawerNavigator, DrawerItems } from "react-navigation";
import { Dimensions } from "react-native";
import TabNavigator from "./TabNavigator";
import CustomAppDrawer from "../screens/CustomAppDrawer";

const screenWidth = Dimensions.get("window").width;

const AppDrawerNavigator = createDrawerNavigator(
  {
    App: TabNavigator
  },
  {
    contentComponent: CustomAppDrawer,
    drawerWidth: screenWidth - 50
    // drawerType: "slide"
  }
);

export default AppDrawerNavigator;
