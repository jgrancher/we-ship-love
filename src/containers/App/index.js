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

  constructor(props) {
    super(props);

    // Initial route
    const sections = Object.keys(routes);
    this.initialRoute = routes[sections[0]].scenes[0];
  }

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
      component: route.scenes[0].component,
      navigator: this.navigator,
      props: route.scenes[0].props,
    });
  }

  openMenu = () => {
    this.setState({ isMenuOpen: true });
  }

  renderScene = (route, navigator) => {
    // Determine which button component to get - hamburger or back?
    const leftButton = route.props && route.props.step && route.props.step.number > 1
      ? <NavbarBackButton onPress={navigator.pop} />
      : <NavbarMenuButton onPress={this.openMenu} />;

    // Action to push to next scene
    // TODO: This is working only for 'order' routes that have a step.number within its props...
    // We have to find a more generic way!
    const pushNextScene = () => {
      navigator.push(routes.order.scenes[route.props.step.number]);
    };

    return (
      <FlexView background={white}>
        <Navbar leftButton={leftButton} />
        <route.component
          {...route.props}
          navigator={navigator}
          pushNextScene={pushNextScene}
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
              initialRoute={this.initialRoute}
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
