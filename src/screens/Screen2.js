import React, {
  useContext,
  useEffect,
  useState,
  useRef,
  useCallback,
} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Pressable,
  Animated,
  useWindowDimensions,
  ScrollView,
  StatusBar,
  Button,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TabView, SceneMap} from 'react-native-tab-view';
import axiosConfig from '../provider/axios';
import RBSheet from 'react-native-raw-bottom-sheet';


const Screen2 = ({navigation, route}) => {
  const [videoData, setVideoData] = useState();
  const routeData = route.params;

  console.log(routeData);

  //  Api data routing---------
  const FirstRoute = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          flex: 1,
          //  borderWidth: 2, borderColor: '#000'
        }}>
        <Text
          style={{
            ...styles.text,
            fontWeight: '400',
            fontSize: 14,
            textAlign: 'left',
          }}>
          {routeData?.overview}
        </Text>
      </ScrollView>
    );
  };

  const SecondRoute = () => (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <Text
        style={{
          ...styles.text,
          fontWeight: '400',
          fontSize: 14,
          textAlign: 'left',
        }}>
        {routeData?.overview}
      </Text>
    </ScrollView>
  );

  const ThirdRoute = () => (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <Text
        style={{
          ...styles.text,
          fontWeight: '400',
          fontSize: 14,
          textAlign: 'left',
        }}>
        {routeData?.overview}
      </Text>
    </ScrollView>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  console.log(routeData, 'routeData');

  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'About'},
    {key: 'second', title: 'Top Cast'},
    {key: 'third', title: 'Photos'},
  ]);

  const handleIndexChange = index => {
    setIndex(index);
  };

  //  Tab bar styling.................
  const renderTabBar = props => {
    return (
      <View
        style={{
          ...styles.tabBar,
          // borderColor: '#FFF', borderWidth: 2
        }}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              style={{
                flex: 1,
                height: 70,
                borderRadius: 15,
                // borderWidth:1,borderColor:'#000',
                marginRight: 5,
              }}
              onPress={() => {
                setIndex(i);
                console.log(i, 'index');
              }}>
              <LinearGradient
                colors={['#454548bd', '#454548bd', '#454548bd']}
                style={{
                  height: 70,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 15,
                  padding: 20,
                  width: 'auto',
                  // borderWidth:1,borderColor:'#FFF'
                }}>
                <Animated.Text
                  style={{...styles.text, fontWeight: '400', fontSize: 14}}>
                  {route.title}
                </Animated.Text>
              </LinearGradient>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  // RB sheet
  const refRBSheet = useRef();

  const openRBsheet = () => {
    refRBSheet.current.open();
    console.log('open RBSheet');
  };
  const closeRBsheet = () => {
    refRBSheet.current.close();
    console.log('close RBSheet');
  };

  const RBSheetData = () => {
    return (
      <View activeOpacity={1} style={{flex: 1}}>
        <TabView
          style={
            {
              // flex: 1,
              // position: 'absolute',
              // height:200,
              // overflow: 'hidden',
            }
          }
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={handleIndexChange}
          renderTabBar={renderTabBar}
        />
        <TouchableOpacity
          style={{
            width: '100%',
            // borderWidth: 1,
            // borderColor: '#FFF',
            height: 'auto',
            height: 70,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            marginTop: 20,
            marginBottom: 10,
          }}
          onPress={() => {
            closeRBsheet();
            navigation.navigate('Screen3',videoData);
          }}>
          <LinearGradient
            colors={['#FFD645', '#FFD645', '#FFD645']}
            style={{
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 15,
              padding: 20,
              width: '100%',
            }}>
            <Text
              style={{
                ...styles.text,
                fontWeight: '500',
                fontSize: 18,
                color: '#000',
              }}>
              Book Your Ticket Now
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };
  //  -------Play Movie  Trailer ----------
  useEffect(() => {
    axiosConfig
      .get(`/movie/${routeData?.id}/videos`, {
        params: {
          api_key: 'fb833fc3d7c0adf1c587ae2b5736fc6b',
          language: 'en-US',
        },
      })
      .then(res => {
        let data = res?.data?.results;
        console.log(data, 'video Api response');
        const result = data.filter(item => item?.type === 'Trailer');
        console.log(result,'trailer')
        // console.log(result[0], 'trailer');
        setVideoData(result[0]?.key);
      })
      .catch(err => {
        console.log(err);
      });
  }, [])
  

// console.log(videoData,'trailer')
  return (
    <View>
      {routeData?.poster_path === null ? (
        <Image
          source={require('../assets/images/404.jpg')}
          resizeMode="cover"
          style={styles.ImageV}></Image>
      ) : (
        <ImageBackground
          source={{
            uri: `https://image.tmdb.org/t/p/w500${routeData?.poster_path}`,
          }}
          resizeMode={'cover'}
          style={{width: '100%', height: '100%'}}>
        

          <View style={styles.topNav}>
            <Ionicons
              size={25}
              name={'chevron-back'}
              color={'#FFF'}
              onPress={() => navigation.navigate('Screen1')}
            />

            <Ionicons size={30} name={'heart-outline'} color={'#FFF'} />
          </View>

          {/* <Trailer/> */}

          <LinearGradient
            colors={['#FFFFFF00', '#0e0e0dde', '#0e0e0df5']}
            style={{
              width: '100%',
              height: '31%',
              position: 'absolute',
              bottom: 0,
            }}>
            <View
              style={{
                marginHorizontal: 20,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
                // borderWidth: 1,
                // borderColor: '#FFF',
                flex: 1,
              }}>
              {/* ----------Title ------------ */}
              <View>
                <Text style={{...styles.text, fontSize: 32, textAlign: 'left'}}>
                  {routeData?.title}
                </Text>
              </View>
              {/* ---------mid View------------ */}
              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                }}>
                <View
                  style={{
                    // width: '20%',
                    paddingVertical: 7,
                    paddingHorizontal: 10,
                    borderRadius: 9,
                    // height: 25,
                    backgroundColor: '#FFD645',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      ...styles.text,
                      fontWeight: '400',
                      fontSize: 12,
                      color: '#000',
                    }}>
                    IMDB {routeData?.vote_average}
                  </Text>
                </View>
                <View>
                  <AntDesign size={15} name={'clockcircle'} color={'#FFF'} />
                </View>
                <View>
                  <Text
                    style={{...styles.text, fontWeight: '400', fontSize: 14}}>
                    2h 4m
                  </Text>
                </View>
                <View>
                  <Ionicons size={15} name={'calendar'} color={'#FFF'} />
                </View>
                <View>
                  <Text
                    style={{...styles.text, fontWeight: '400', fontSize: 14}}>
                    {routeData?.release_date}
                  </Text>
                </View>
              </View>

              {/*  ------bottom Button View------- */}

              <View
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  width: '100%',
                  // borderWidth: 1,
                  // borderColor: '#000',
                  // position: 'absolute',
                  // bottom: -100,
                  // height: 70,
                }}>
                <TouchableOpacity
                  style={{
                    width: 'auto',
                    // borderWidth: 1,
                    // borderColor: '#FFF',
                    height: 'auto',
                    height: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 15,
                  }}
                  onPress={() => navigation.navigate('Screen3',videoData)}>
                  <LinearGradient
                    colors={['#FFC907', '#FBB034', '#FFC907']}
                    style={{
                      height: 70,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 15,
                      padding: 20,
                    }}>
                    <Text
                      style={{
                        ...styles.text,
                        fontWeight: '500',
                        fontSize: 18,
                        color:'#000'
                      }}>
                      Get Reservation
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    width: 'auto',

                    // borderWidth: 1,
                    // borderColor: '#FFF',
                    height: 'auto',
                    height: 70,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 15,
                  }}
                  onPress={openRBsheet}>
                  <LinearGradient
                    colors={['#FBB034', '#FFC907', '#FBB034']}
                    style={{
                      height: 70,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 15,
                      padding: 20,
                      paddingHorizontal: 40,
                    }}>
                    <Text
                      style={{
                        ...styles.text,
                        fontWeight: '500',
                        fontSize: 18,
                        color:'#000'
                      }}>
                      Description
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
            {/* -------RBSheet------------ */}

            {/* /* <Button title="OPEN BOTTOM SHEET"/>  */}
            <RBSheet
              ref={refRBSheet}
              closeOnDragDown={false}
              closeOnPressMask={true}
              customStyles={{
                wrapper: {
                  backgroundColor: '#0e0e0dde',
                },
                draggableIcon: {
                  backgroundColor: '#FFF',
                  width: 70,
                },
                container: {
                  flex: 1,
                  backgroundColor: '#454548bd',
                  // alignItems: 'center',
                  // height: '70%',
                  // paddingHorizontal: '10%',
                  marginTop: 10,
                  // borderWidth:1,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                  padding: 10,
                },
              }}>
              <RBSheetData />
            </RBSheet>
          </LinearGradient>
        </ImageBackground>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  VText: {
    // position: 'absolute',
    bottom: 0,
    width: '100%',
    // height: '42%',
  },
  ImageV: {
    height: '100%',
    width: '100%',
  },
  topNav: {
    display: 'flex',
    // alignItems:'center',
    justifyContent: 'space-between',
    // backgroundColor:'#000',
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1,
    width: '90%',
    top: 30,
    left: 20,
    right: 0,
  },
  blurNav: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    zIndex: 1,
    width: '90%',
    height: '10%',
  },
  tabBar: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 10,
    // paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnV: {
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 25,
    padding: 10,
    backgroundColor: '#292F33',
  },
});
export default Screen2;
