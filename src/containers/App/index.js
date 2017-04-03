// Externals
import React from 'react';
import NavigationBar from 'react-native-navbar';
import SideMenu from 'react-native-side-menu';
import {
  Image,
  Navigator,
  View,
} from 'react-native';

// Containers & components
import Menu from '../../components/Menu';
import NavbarButton from '../../components/NavbarButton';

// Data
import { orderRoutes } from '../../data/routes';

// Images
import logo from '../../images/logo.png';
import iconBack from '../../images/icon-back.png';
import iconHamburger from '../../images/icon-hamburger.png';

// Styles
import appStyles from '../../styles/base/application';
import navStyles from '../../styles/components/navbar';
import * as colors from '../../config/colors';
import { widthMenu } from '../../config/sizes';

class Application extends React.Component {

  state = {
    isMenuOpen: false,
  };

  navigate = (route) => {
    // Toggle Menu
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });

    // Navigate to Screen
    this.navigator.replace({
      component: route.component,
      navigator: this.navigator,
      title: route.title,
      ...route.props,
    });
  }

  openMenu = () => {
    this.setState({ isMenuOpen: true });
  }

  renderBackButton = navigator => (
    <NavbarButton
      image={iconBack}
      onPress={navigator.pop}
    />
  )

  renderMenuButton = () => (
    <NavbarButton
      image={iconHamburger}
      onPress={this.openMenu}
    />
  )

  renderScene = (route, navigator) => {
    // Determine which Icon component - hamburger or back?
    const leftButton = route.index > 0
      ? this.renderBackButton(navigator)
      : this.renderMenuButton();

    // Action to push to next scene
    const pushNextScene = () => {
      navigator.push(orderRoutes[route.index + 1]);
    };

    return (
      <View style={appStyles.scene}>
        <NavigationBar
          leftButton={leftButton}
          rightButton={<Image source={logo} />}
          statusBar={{ style: 'light-content', tintColor: colors.brownDark }}
          style={navStyles.navbar}
          tintColor={colors.white}
        />
        <route.component
          {...route.props}
          navigator={navigator}
          pushNextScene={pushNextScene}
          route={route}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={appStyles.appContainer}>
        <SideMenu
          isOpen={this.state.isMenuOpen}
          menu={<Menu navigate={this.navigate} />}
          openMenuOffset={widthMenu}
        >
          <View style={appStyles.appContainer}>
            <Navigator
              initialRoute={orderRoutes[0]}
              ref={(c) => { this.navigator = c; }}
              renderScene={this.renderScene}
            />
          </View>
        </SideMenu>
      </View>
    );
  }

}

export default Application;
