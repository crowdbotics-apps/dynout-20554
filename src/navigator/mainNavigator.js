import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item105384Navigator from '../features/Add-Item105384/navigator';
import Maps105380Navigator from '../features/Maps105380/navigator';
import UserProfile105376Navigator from '../features/UserProfile105376/navigator';
import Maps105336Navigator from '../features/Maps105336/navigator';
import Add-Item105335Navigator from '../features/Add-Item105335/navigator';
import Maps105331Navigator from '../features/Maps105331/navigator';
import UserProfile105327Navigator from '../features/UserProfile105327/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item105384: { screen: Add-Item105384Navigator },
Maps105380: { screen: Maps105380Navigator },
UserProfile105376: { screen: UserProfile105376Navigator },
Maps105336: { screen: Maps105336Navigator },
Add-Item105335: { screen: Add-Item105335Navigator },
Maps105331: { screen: Maps105331Navigator },
UserProfile105327: { screen: UserProfile105327Navigator },

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
