import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial177059Navigator from '../features/Tutorial177059/navigator';
import NotificationList177031Navigator from '../features/NotificationList177031/navigator';
import Settings177030Navigator from '../features/Settings177030/navigator';
import Settings177022Navigator from '../features/Settings177022/navigator';
import UserProfile177020Navigator from '../features/UserProfile177020/navigator';
import UserProfile176989Navigator from '../features/UserProfile176989/navigator';
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
Tutorial177059: { screen: Tutorial177059Navigator },
NotificationList177031: { screen: NotificationList177031Navigator },
Settings177030: { screen: Settings177030Navigator },
Settings177022: { screen: Settings177022Navigator },
UserProfile177020: { screen: UserProfile177020Navigator },
UserProfile176989: { screen: UserProfile176989Navigator },
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
