// Externals
import React, { PropTypes } from 'react';
import {
  Alert,
  Linking,
} from 'react-native';

// Components
import MenuItem from '../MenuItem';
import SocialIcon from '../SocialIcon';

// Styles
import { StyledText } from '../MenuItem/styles';
import {
  StyledLink,
  StyledViewContainer,
  StyledViewItems,
  StyledViewLinks,
  StyledViewSocials,
} from './styles';

// Images
import iconFacebook from './icon-facebook.png';
import iconInstagram from './icon-instagram.png';
import iconTwitter from './icon-twitter.png';

// Utils
import routes from '../../utils/routes';
import {
  URL_TWITTER,
  URL_FACEBOOK,
  URL_INSTAGRAM,
  URL_WEBSITE,
} from '../../utils/constants';

const message = 'Impossible d\'ouvrir ce lien. Pardon. 🎈';

class Menu extends React.Component {

  static propTypes = {
    navigate: PropTypes.func.isRequired,
  };

  open = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (!supported) {
        return Alert.alert('Une erreur est survenue.', message);
      }

      return Linking.openURL(url);
    });
  }

  openFacebook = () => this.open(URL_FACEBOOK)

  openInstagram = () => this.open(URL_INSTAGRAM)

  openTwitter = () => this.open(URL_TWITTER)

  openWebsite = () => this.open(URL_WEBSITE)

  showScreen = (route) => {
    this.props.navigate(route);
  }

  render() {
    return (
      <StyledViewContainer>
        <StyledViewItems>
          {Object.keys(routes).map(section => (
            <MenuItem
              key={section}
              route={routes[section]}
              onPress={this.showScreen}
            />
          ))}
        </StyledViewItems>
        <StyledViewLinks>
          <StyledViewSocials>
            <SocialIcon
              icon={iconTwitter}
              onPress={this.openTwitter}
              url={URL_TWITTER}
            />
            <SocialIcon
              icon={iconFacebook}
              onPress={this.openFacebook}
              url={URL_FACEBOOK}
            />
            <SocialIcon
              icon={iconInstagram}
              onPress={this.openInstagram}
              url={URL_INSTAGRAM}
            />
          </StyledViewSocials>
          <StyledLink onPress={this.openWebsite}>
            <StyledText>
              Voir le site
            </StyledText>
          </StyledLink>
        </StyledViewLinks>
      </StyledViewContainer>
    );
  }

}

export default Menu;
