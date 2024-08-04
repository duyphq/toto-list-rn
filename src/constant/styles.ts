import {fontSize} from '../utils/scalingUtils';
import {PixelRatio} from 'react-native';

const sizeFont =
  PixelRatio.get() <= 1.5
    ? 13
    : PixelRatio.get() > 1.5 && PixelRatio.get() < 3
    ? 14
    : 15;

const Colors = {
  white: '#FFFFFF',
  black: '#000000',
  primaryColor: '#874CCC',
  red: '#FF4C4C',
  yellow: '#FCDC2A',
};

const text = {
  H0: {
    fontSize: fontSize(sizeFont) + 16,
    color: Colors.black,
  },
  H1: {
    fontSize: fontSize(sizeFont) + 8,
    color: Colors.black,
  },
  H2: {
    fontSize: fontSize(sizeFont) + 6,
    color: Colors.black,
  },
  H3: {
    fontSize: fontSize(sizeFont) + 4,
    color: Colors.black,
  },
  H4: {
    fontSize: fontSize(sizeFont) + 2,
    color: Colors.black,
  },
  BODY1: {
    fontSize: fontSize(sizeFont) + 0,
    color: Colors.black,
  },
  BODY2: {
    fontSize: fontSize(sizeFont) - 2,
    color: Colors.black,
  },
  SMALL1: {
    fontSize: fontSize(sizeFont) - 3,
    color: Colors.black,
  },
  SMALL2: {
    fontSize: fontSize(sizeFont) - 5,
    color: Colors.black,
  },
  BUTTON: {
    fontSize: fontSize(sizeFont) - 2,
    color: Colors.black,
  },
};

export {Colors, text};
