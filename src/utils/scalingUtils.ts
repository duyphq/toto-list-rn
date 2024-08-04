import {Dimensions, PixelRatio} from 'react-native';
const fontScale = PixelRatio.getFontScale();
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
const window = Dimensions.get('window');

const [shortDimension, longDimension] =
  window.width < window.height
    ? [window.width, window.height]
    : [window.height, window.width];

export const scale = (size = 1) => (shortDimension / guidelineBaseWidth) * size;

export const widthScale = (size = 1) =>
  (shortDimension / guidelineBaseWidth) * size;

export const heightScale = (size = 1) =>
  (longDimension / guidelineBaseHeight) * size;

const getFontSize = (size: number) => size / fontScale;
const minScale = Math.min(widthScale(), heightScale());
export const fontSize = (size: number = 1) => getFontSize(size) * minScale;

export const HEIGHT = window.height;
export const WIDTH = window.width;
