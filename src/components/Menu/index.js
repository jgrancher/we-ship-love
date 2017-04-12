// Externals
import React, { PropTypes } from 'react';
import {
  Alert,
  Linking,
} from 'react-native';

// Components
import MenuItem from '../MenuItem';
import SocialIcon from '../SocialIcon';

// Menu items
import {
  sections,
  socials,
} from './items';

// Styles
import { StyledText } from '../MenuItem/styles';
import {
  StyledLink,
  StyledViewContainer,
  StyledViewItems,
  StyledViewLinks,
  StyledViewSocials,
} from './styles';

const message = 'Impossible d\'ouvrir ce lien. Pardon. 🎈';

class Menu extends React.Component {

  static propTypes = {
    navigate: PropTypes.func.isRequired,
  };

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

  render() {
    return (
      <StyledViewContainer>
        <StyledViewItems>
          {sections.map(item => (
            <MenuItem
              item={item}
              key={item.id}
              onPress={this.showScreen}
            />
          ))}
        </StyledViewItems>
        <StyledViewLinks>
          <StyledViewSocials>
            {socials.map(link => (
              <SocialIcon
                {...link}
                key={link.id}
                onPress={this.openURL}
              />
            ))}
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
