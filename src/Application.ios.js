// Modules
import React from 'react';
import { Image, Navigator, View } from 'react-native';
import NavigationBar from 'react-native-navbar';
import SideMenu from 'react-native-side-menu';
import { Provider } from 'react-redux';

// Screens & components
import NavbarButton from './components/NavbarButton';
import Menu from './components/Menu';

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

    constructor(props) {
        super(props);
        this.navigate = this.navigate.bind(this);
        this.openMenu = this.openMenu.bind(this);
        this.renderScene = this.renderScene.bind(this);
    }

    state = {
        isMenuOpen: false,
    };

    navigate(title, component) {
        // Toggle Menu
        this.setState({
            isMenuOpen: !this.state.isMenuOpen,
        });

        // Navigate to Screen
        this.refs.rootNavigator.replace({
            title,
            component,
            navigator: this.refs.rootNavigator,
        });
    }

    openMenu() {
        this.setState({ isMenuOpen: true });
    }

    renderScene(route, navigator) {
        // Determine which Icon component - hamburger or back?
        let leftButton = <NavbarButton image={iconHamburger} onPress={this.openMenu} />;

        if (route.index > 0) {
            leftButton = <NavbarButton image={iconBack} onPress={this.refs.rootNavigator.pop} />;
        }

        return (
            <View style={appStyles.scene}>
                <NavigationBar
                    leftButton={leftButton}
                    rightButton={<Image source={logo} />}
                    statusBar={{ style: 'light-content', tintColor: colors.brownDark }}
                    style={navStyles.navbar}
                    tintColor={colors.white}
                />
                <route.component navigator={navigator} route={route} />
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
                                    navigator: this.refs.rootNavigator,
                                }}
                                ref="rootNavigator"
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
