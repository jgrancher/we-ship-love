/* eslint-disable no-useless-escape */
// Modules
import React from 'react';
import {
    Alert,
    Image,
    Linking,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from 'react-native';

// Data
import { items, socials, website } from '../data/menu';

// Styles
import styles from '../styles/components/menu';
import { brownDark } from '../config/colors';

// Images
import iconFacebook from '../images/icon-social-fb.png';
import iconTwitter from '../images/icon-social-twitter.png';
import iconInstagram from '../images/icon-social-insta.png';

const { func } = React.PropTypes;
const message = 'Impossible d\'ouvrir ce lien. Pardon. ¯\_(ツ)_/¯';

class Menu extends React.Component {

    static propTypes = {
        navigate: func.isRequired,
    };

    constructor(props) {
        super(props);
        this.openURL = this.openURL.bind(this);
        this.showScreen = this.showScreen.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    openURL(url) {
        Linking.canOpenURL(url).then((supported) => {
            if (!supported) {
                return Alert.alert('Une erreur est survenue.', message);
            }

            return Linking.openURL(url);
        });
    }

    showScreen(route) {
        this.props.navigate(route);
    }

    renderItem(item, i) {
        const onPress = () => this.showScreen(item);

        return (
            <TouchableHighlight
                key={i}
                onPress={onPress}
                underlayColor={brownDark}
            >
                <View style={styles.menuItem}>
                    <Image source={item.icon} style={styles.menuItemImage} />
                    <Text style={styles.menuItemText}>{item.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }

    renderSocials() {
        const openFacebook = () => this.openURL(socials.facebook);
        const openTwitter = () => this.openURL(socials.twitter);
        const openInstagram = () => this.openURL(socials.instagram);

        return (
            <View style={styles.socials}>
                <TouchableOpacity onPress={openTwitter}>
                    <Image source={iconTwitter} />
                </TouchableOpacity>
                <TouchableOpacity onPress={openFacebook}>
                    <Image source={iconFacebook} />
                </TouchableOpacity>
                <TouchableOpacity onPress={openInstagram}>
                    <Image source={iconInstagram} />
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        const openWebsite = () => this.openURL(website);

        return (
            <View style={styles.container}>
                <View style={styles.menu}>
                    {items.map((item, i) => this.renderItem(item, i))}
                </View>
                <View style={styles.links}>
                    {this.renderSocials()}
                    <TouchableOpacity onPress={openWebsite} style={styles.linkWebsite}>
                        <Text style={styles.menuItemText}>Voir le site</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Menu;
