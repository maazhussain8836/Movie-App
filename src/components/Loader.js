import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Loader = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/images/newloader.gif')}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    left: 0,
    height: windowHeight,
    width: windowWidth,
    alignItems: 'center',
    justifyContent: 'center',
    flex:1,
    
  },
  logo: {
    width: moderateScale(580, 0.1),
    height: moderateScale(588, 0.1),
  },
});