import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial176988Navigator from '../features/Tutorial176988/navigator';
import NotificationList176960Navigator from '../features/NotificationList176960/navigator';
import Settings176959Navigator from '../features/Settings176959/navigator';
import Settings176951Navigator from '../features/Settings176951/navigator';
import UserProfile176949Navigator from '../features/UserProfile176949/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial176988: { screen: Tutorial176988Navigator },
NotificationList176960: { screen: NotificationList176960Navigator },
Settings176959: { screen: Settings176959Navigator },
Settings176951: { screen: Settings176951Navigator },
UserProfile176949: { screen: UserProfile176949Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
