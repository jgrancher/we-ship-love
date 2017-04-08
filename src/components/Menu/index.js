// Externals
import React, { PropTypes } from 'react';
import {
  Alert,
  Image,
  Linking,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

// Menu items
import items from './items';

// Images
import iconFacebook from './icon-facebook.png';
import iconInstagram from './icon-instagram.png';
import iconTwitter from './icon-twitter.png';

// Styles
import styles from '../../styles/components/menu';
import { brownDark } from '../../config/colors';

const message = 'Impossible d\'ouvrir ce lien. Pardon. 🎈';

class Menu extends React.Component {

  static propTypes = {
    navigate: PropTypes.func.isRequired,
  };

  openFacebook = () => {
    this.openURL('https://www.facebook.com/mieuxquedesfleurs/');
  }

  openInstagram = () => {
    this.openURL('https://www.instagram.com/mieuxquedesfleurs');
  }

  openTwitter = () => {
    this.openURL('https://twitter.com/faitesmieux');
  }

  openWebsite = () => {
    this.openURL('http://mieuxquedesfleurs.com/');
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
            onPress={this.openWebsite}
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
