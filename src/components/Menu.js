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

// Images
import iconFacebook from '../images/icon-social-fb.png';
import iconTwitter from '../images/icon-social-twitter.png';
import iconInstagram from '../images/icon-social-insta.png';

// Styles
import styles from '../styles/components/menu';
import { brownDark } from '../config/colors';

const message = `Impossible d'ouvrir ce lien. Pardon. ¯\_(ツ)_/¯`; // eslint-disable-line quotes

class Menu extends React.Component {

    static propTypes = {
        navigate: React.PropTypes.func.isRequired,
    };

    openFacebook = () => {
        this.openURL(socials.facebook);
    }

    openInstagram = () => {
        this.openURL(socials.instagram);
    }

    openTwitter = () => {
        this.openURL(socials.twitter);
    }

    openURL = (url) => {
        Linking.canOpenURL(url).then((supported) => {
            if (!supported) {
                return Alert.alert('Une erreur est survenue.', message);
            }

            return Linking.openURL(url);
        });
    }

    showScreen = (route) => {
        this.props.navigate(route);
    }

    renderItem = (item, i) => {
        const onPress = () => this.showScreen(item);

        return (
            <TouchableHighlight
                key={i}
                onPress={onPress}
                underlayColor={brownDark}
            >
                <View style={styles.menuItem}>
                    <Image
                        source={item.icon}
                        style={styles.menuItemImage}
                    />
                    <Text style={styles.menuItemText}>
                        {item.title}
                    </Text>
                </View>
            </TouchableHighlight>
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
                    <View style={styles.socials}>
                        <TouchableOpacity onPress={this.openTwitter}>
                            <Image source={iconTwitter} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.openFacebook}>
                            <Image source={iconFacebook} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.openInstagram}>
                            <Image source={iconInstagram} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={openWebsite}
                        style={styles.linkWebsite}
                    >
                        <Text style={styles.menuItemText}>
                            Voir le site
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Menu;
