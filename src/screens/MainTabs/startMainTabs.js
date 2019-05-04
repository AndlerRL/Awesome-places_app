import { Navigation } from 'react-native-navigation';
import { Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const findIcon = Platform.select({
  ios: Icon.getImageSource("ios-map", 32),
  android: Icon.getImageSource("md-map", 32)
});
const shareIcon = Platform.select({
  ios: Icon.getImageSource("ios-share-alt", 32),
  android: Icon.getImageSource("md-share-alt", 32)
});
const menuIcon = Platform.select({
  ios: Icon.getImageSource("ios-menu", 32),
  android: Icon.getImageSource("md-menu", 32)
});

const startTabs = () => {
  Promise.all([
    findIcon,
    shareIcon,
    menuIcon
  ]).then(sources => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: "awesome-places.FindPlaceScreen",
          label: "Find Place",
          title: "Find Place",
          icon: sources[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: "awesome-places.SharePlaceScreen",
          label: "Share Place",
          title: "Share Place",
          icon: sources[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: sources[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        }
      ],
      drawer: {
        left: {
          screen: "awesome-places.SideDrawerScreen",
        }
      }
    });
  });
};

export default startTabs;