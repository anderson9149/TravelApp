import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => Math.trunc(width / guidelineBaseWidth * size);
const verticalScale = size => Math.trunc(height / guidelineBaseHeight * size);
const moderateScale = (size, factor = 0.5) => Math.trunc(size + ( scale(size) - size ) * factor);
const DeviceWidth = () =>  width;
const DeviceHeight = () =>  height;

export {scale, verticalScale, moderateScale, DeviceWidth, DeviceHeight};
