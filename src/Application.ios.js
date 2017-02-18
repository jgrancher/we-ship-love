// Externals
import React from 'react';
import NavigationBar from 'react-native-navbar';
import SideMenu from 'react-native-side-menu';
import { Provider } from 'react-redux';
import {
  Image,
  Navigator,
  View,
} from 'react-native';

// Containers & components
import Menu from './components/Menu';
import NavbarButton from './components/NavbarButton';

// Data
import createStore from './store';
import { items } from './data/menu';

// Styles
import appStyles from './styles/base/application';
import navStyles from './styles/components/navbar';
import * as colors from './config/colors';
import { widthMenu } from './config/sizes';

// Images
import logo from './images/logo.png';
import iconBack from './images/icon-back.png';
import iconHamburger from './images/icon-hamburger.png';

const store = createStore();

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

  renderScene = (route, navigator) => {
    // Determine which Icon component - hamburger or back?
    const leftButton = route.index > 0
      ? (
        <NavbarButton
          image={iconBack}
          onPress={navigator.pop}
        />
      ) : (
        <NavbarButton
          image={iconHamburger}
          onPress={this.openMenu}
        />
      );

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
          route={route}
        />
      </View>
    );
  }

  render() {
    return (
      <Provider store={store}>
        <View style={appStyles.appContainer}>
          <SideMenu
            isOpen={this.state.isMenuOpen}
            menu={<Menu navigate={this.navigate} />}
            openMenuOffset={widthMenu}
          >
            <View style={appStyles.appContainer}>
              <Navigator
                initialRoute={{
                  component: items[0].component,
                  index: 0,
                  navigator: this.navigator,
                }}
                ref={(c) => { this.navigator = c; }}
                renderScene={this.renderScene}
              />
            </View>
          </SideMenu>
        </View>
      </Provider>
    );
  }
}

export default Application;
