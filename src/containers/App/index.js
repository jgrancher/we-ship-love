// Externals
import React from 'react';
import SideMenu from 'react-native-side-menu';
import { Navigator } from 'react-native';

// Components
import FlexView from '../../components/FlexView';
import Menu from '../../components/Menu';
import Navbar from '../../components/Navbar';
import NavbarBackButton from '../../components/NavbarBackButton';
import NavbarMenuButton from '../../components/NavbarMenuButton';

// Utils
import routes from '../../utils/routes';

// Styles
import { widthMenu } from '../../shared/sizes';
import {
  brownDark,
  white,
} from '../../shared/colors';

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
      ? <NavbarBackButton onPress={navigator.pop} />
      : <NavbarMenuButton onPress={this.openMenu} />;

    // Action to push to next scene
    const pushNextScene = () => {
      navigator.push(routes.order[route.index + 1]);
    };

    return (
      <FlexView background={white}>
        <Navbar leftButton={leftButton} />
        <route.component
          {...route.props}
          navigator={navigator}
          pushNextScene={pushNextScene}
          route={route}
        />
      </FlexView>
    );
  }

  render() {
    return (
      <FlexView background={brownDark}>
        <SideMenu
          isOpen={this.state.isMenuOpen}
          menu={<Menu navigate={this.navigate} />}
          openMenuOffset={widthMenu}
        >
          <FlexView background={brownDark}>
            <Navigator
              initialRoute={routes.order[0]}
              ref={(c) => { this.navigator = c; }}
              renderScene={this.renderScene}
            />
          </FlexView>
        </SideMenu>
      </FlexView>
    );
  }

}

export default Application;
