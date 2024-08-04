import {Dimensions, Platform} from 'react-native';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
export const BASE_WIDTH = 375;
export const BASE_HEIGHT = 812;
export const {width, height} = Dimensions.get('screen');
export const WIDTH = width;
export const HEIGHT = height;
export const WIDTH_SCALE = WIDTH / BASE_WIDTH;
export const HEIGHT_SCALE = HEIGHT / BASE_HEIGHT;

export const ROUTE_KEY = {
  Splash: 'Splash',
  Home: 'Home',
  DetailTask: 'DetailTask',
};
