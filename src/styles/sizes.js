// Externals
import { Dimensions } from 'react-native';

// Heights
export const heightWindow = Dimensions.get('window').height;
export const heightStatusBar = 20;
export const heightNavigationBar = 73;
export const heightCTA = 81;
export const heightScene = heightWindow - heightStatusBar - heightNavigationBar;
export const heightContent = heightScene - heightCTA;

// Widths
export const widthWindow = Dimensions.get('window').width;
export const widthMenu = 260;

// Spaces
export const spaceSmall = 10;
export const spaceNormal = 20;
export const spaceBig = 40;
