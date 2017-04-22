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
import { widthMenu } from '../../styles/sizes';
import {
  brownDark,
  white,
} from '../../styles/colors';

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

  renderLeftButton = (route, navigator) => {
    if (!route.props || !route.props.step || route.props.step.number === 1) {
      return <NavbarMenuButton onPress={this.openMenu} />;
    }

    if (routes.order.scenes.length > 1 && route.props.step.number) {
      return <NavbarBackButton onPress={navigator.pop} />;
    }

    return null;
  }

  renderScene = (route, navigator) => {
    // Action to pop to the first scene
    const popFirstScene = () => navigator.popToTop();

    // Action to push to next scene
    // TODO: This is working only for 'order' routes that have a step.number within its props...
    // We have to find a more generic way!
    const pushNextScene = () => {
      navigator.push(routes.order.scenes[route.props.step.number]);
    };

    return (
      <FlexView background={white}>
        <Navbar leftButton={this.renderLeftButton(route, navigator)} />
        <route.component
          {...route.props}
          popFirstScene={popFirstScene}
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
