import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors, text} from '../constant/styles';
import {useNavigation} from '@react-navigation/native';
import {heightScale, WIDTH, widthScale} from '../utils/scalingUtils';
import {ICON} from '../assets';
import {HEIGHT} from '../constant/constant';

interface FixedContainerProps {
  showLeftIcon?: boolean;
  onPressBack?: () => void;
  children: any;
  style?: any;
  onlyTitle?: boolean;
  textHeader?: string;
  styleTextHeader?: any;
}

const FixedContainer = ({
  showLeftIcon = true,
  onPressBack,
  children,
  style,
  onlyTitle = false,
  textHeader = '',
  styleTextHeader,
}: FixedContainerProps) => {
  const navigation = useNavigation();
  const onBack = () => {
    if (onPressBack) {
      onPressBack();
    } else navigation.goBack();
  };
  return (
    <SafeAreaView style={[styles.safeAreaView, style]}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          height: heightScale(60),
          backgroundColor: Colors.primaryColor,
        }}>
        <TouchableOpacity
          disabled={!showLeftIcon}
          onPress={onBack}
          style={[
            styles.containButton,
            {
              opacity: showLeftIcon ? 1 : 0,
            },
          ]}>
          {!onlyTitle && (
            <Image
              source={ICON.left_arrow}
              style={{
                width: widthScale(18),
                height: widthScale(18),
                tintColor: Colors.black,
              }}
              resizeMode="contain"
            />
          )}
        </TouchableOpacity>
        {!!textHeader && (
          <View
            style={{
              alignSelf: 'center',
              alignContent: 'center',
              alignItems: 'center',
              flex: 1,
            }}>
            <Text style={[styles.textHeader, styleTextHeader]}>
              {textHeader}
            </Text>
          </View>
        )}
      </View>
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  containButton: {
    borderRadius: widthScale(48),
    width: widthScale(48),
    height: widthScale(48),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    position: 'absolute',
  },
  textHeader: {
    ...text.H2,
    color: Colors.white,
  },
});

export default FixedContainer;
