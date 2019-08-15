import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import * as Icon from "@expo/vector-icons";
import InspirationScreen from "../screens/InspirationScreen";
import StoresScreen from "../screens/StoresScreen";
import ShoppingScreen from "../screens/ShoppingScreen";
import MenShopScreen from "../screens/MenShopScreen";
import WomenShopScreen from "../screens/WomenShopScreen";
import MoreScreen from "../screens/MoreScreen";
import BagScreen from "../screens/BagScreen";
import ProductDetailsScreen from "../screens/ProductDetailScreen";
import EditShoppingCartScreen from "../screens/EditShoppingCartScreen";
import AddressScreen from "../screens/AddressScreen";
import PaymentScreen from "../screens/PaymentScreen";
import CompleteScreen from "../screens/CompleteScreen";
import ShopIcon from "../components/ShopIcon";
import InspirationIcon from "../components/InspirationIcon";
import StoresIcon from "../components/StoresIcon";
import Bag from "../components/Bag";

const colors = {
  activeColor: "#454545",
  inActiveColor: "#C4C4C4"
};

const tabBarOptions = {
  activeTintColor: colors.activeColor,
  inactiveTintColor: colors.inActiveColor,
  keyboardHidesTabBar: true
};

const ShoppingStack = createStackNavigator({
  Shop: ShoppingScreen,
  MenShop: MenShopScreen,
  WomenShop: WomenShopScreen,
  Product: ProductDetailsScreen
});

ShoppingStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName === "Product") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    tabBarLabel: "Shop",
    tabBarOptions,
    // eslint-disable-next-line react/display-name
    tabBarIcon: ({ focused }) => (
      <ShopIcon
        strokeColor={focused ? colors.activeColor : colors.inActiveColor}
        fillColor={focused ? colors.activeColor : "#fff"}
      />
    )
  };
};

const InspirationStack = createStackNavigator({
  Inspiration: InspirationScreen
});

InspirationStack.navigationOptions = {
  tabBarLabel: "Inspiration",
  tabBarOptions,
  // eslint-disable-next-line react/display-name
  tabBarIcon: ({ focused }) => (
    <InspirationIcon fillColor={focused ? colors.activeColor : "#fff"} />
  )
};

const StoresStack = createStackNavigator({
  Stores: StoresScreen
});

StoresStack.navigationOptions = {
  tabBarLabel: "Stores",
  tabBarOptions,
  // eslint-disable-next-line react/display-name
  tabBarIcon: ({ focused }) => (
    <StoresIcon
      fillColor={focused ? colors.activeColor : colors.inActiveColor}
      innerCircle={focused ? colors.activeColor : "#fff"}
    />
  )
};

const MoreStack = createStackNavigator({
  More: MoreScreen
});

MoreStack.navigationOptions = {
  tabBarLabel: "More",
  tabBarOptions,
  // eslint-disable-next-line react/display-name
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-more"
      color={focused ? colors.activeColor : colors.inActiveColor}
      size={30}
    />
  )
};

const BagStack = createStackNavigator({
  Bag: BagScreen,
  EditProduct: EditShoppingCartScreen,
  Address: AddressScreen,
  Payment: PaymentScreen,
  Complete: CompleteScreen
});

BagStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName === "Address") {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
    // eslint-disable-next-line react/display-name
    tabBarIcon: ({ focused }) => (
      <Bag
        strokeColor={focused ? colors.activeColor : colors.inActiveColor}
        fillColor={focused ? colors.activeColor : colors.inActiveColor}
        innerStrokeColor={focused ? colors.activeColor : "#fff"}
        innerFillColor={focused ? colors.activeColor : "#fff"}
      />
    ),
    tabBarLabel: ".",
    tabBarOptions
  };
};

export default createBottomTabNavigator({
  ShoppingStack,
  InspirationStack,
  BagStack,
  StoresStack,
  MoreStack
});
