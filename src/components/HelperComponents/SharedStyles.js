import { StyleSheet } from 'react-native';
import { scale, moderateScale, verticalScale} from './ScaleFunctions';

// Shared styles
const sharedStyles = StyleSheet.create({
  headerLogo: {
    fontSize: scale(25),
    fontWeight: 'bold',
    color: 'white',
    padding: scale(3),
  },
  headerPicture: {width: scale(35), height: verticalScale(35)},
  bgContainer: {flexDirection: "row", flex: 1},
  item: {
    backgroundColor: '#f2f2f2',
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(18),
  },
  loadingSpinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // Home page styles
  homePageImage: {flex: 1, resizeMode: "stretch", width: null, height: null},
});

export default sharedStyles;
