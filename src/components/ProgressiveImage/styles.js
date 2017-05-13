// Styles
import {
  heightContent,
  widthWindow,
} from '../../styles/sizes';

export const getStyles = props => ({
  alignSelf: 'flex-start',
  flexGrow: props.height === 0 ? 1 : 0,
  height: props.height,
  width: props.width,
});

export const height = heightContent;

export const width = widthWindow;
