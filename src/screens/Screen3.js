import React, {useEffect, useState, useCallback, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
  TextInput,
  ScrollView,
  Alert,
  ToastAndroid,
  // Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RBSheet from 'react-native-raw-bottom-sheet';
import YoutubePlayer from 'react-native-youtube-iframe';
// import Loader from '../components/Loader';

export const SLIDER_WIDTH = Dimensions.get('window').width + 0;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.9);

const Screen3 = ({navigation, route}) => {
  useEffect(() => {
    setLoading(true);
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 5000);
  const routeData = route.params;

  console.log(routeData, 'Trailer Key');
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(true);
      // Alert.alert('video has finished playing!');
    }
  }, []);

  const [Bg, setBg] = useState('');
  const [data1, setData1] = useState([
    {
      id: 0,
      check: false,
      selected: false,
      display: true,
    },
    {
      id: 1,
      check: false,
      selected: false,
      display: false,
    },
    {
      id: 2,
      check: false,
      selected: false,
      display: false,
    },
    {
      id: 3,
      check: false,
      selected: false,
      display: false,
    },
    {
      id: 4,
      check: false,
      selected: false,
      display: false,
    },
    {
      id: 5,
      check: false,
      selected: false,
      display: false,
    },
    {
      id: 6,
      check: false,
      selected: false,
      display: false,
    },
    {
      id: 7,
      check: false,
      selected: false,
      display: false,
    },
    {
      id: 8,
      check: false,
      selected: false,
      display: false,
    },
    {
      id: 9,
      check: false,
      selected: true,
      display: false,
    },
    {
      id: 10,
      check: false,
      selected: true,
      display: false,
    },
    {
      id: 11,
      check: false,
      selected: true,
      display: false,
    },
    {
      id: 12,
      check: false,
      selected: false,
      display: false,
    },
    {
      id: 13,
      check: false,
      selected: false,
      display: false,
    },

    {
      id: 14,
      check: false,
      selected: false,
      display: false,
    },
    {
      id: 15,
      check: false,
      selected: false,
      display: true,
    },
    {
      id: 16,
      check: false,
      selected: false,
      display: false,
    },
    {
      id: 17,
      check: false,
      selected: false,
      display: false,
    },
  ]);

  const [data2, setData2] = useState([
    {
      id: 0,
      check: false,
      display: false,
    },
    {
      id: 1,
      check: false,
      display: false,
    },
    {
      id: 2,
      check: false,
      display: false,
    },
    {
      id: 3,
      check: false,
      display: false,
    },
    {
      id: 4,
      check: false,
      display: false,
    },
    {
      id: 5,
      check: false,
      display: false,
    },
    {
      id: 6,
      check: false,
      display: false,
    },
    {
      id: 7,
      check: false,
      display: false,
    },
    {
      id: 8,
      check: false,
      display: false,
    },
    {
      id: 9,
      check: false,
      display: false,
    },
    {
      id: 10,
      check: false,
      display: false,
    },
    {
      id: 11,
      check: false,
      display: false,
    },
    {
      id: 12,
      check: false,
      display: false,
    },
    {
      id: 13,
      check: false,
      display: false,
    },
    {
      id: 14,
      check: false,
      display: false,
    },
    {
      id: 15,
      check: false,
      display: true,
    },
    {
      id: 16,
      check: false,
      display: true,
    },
    {
      id: 17,
      check: false,
      display: true,
    },
  ]);
  const [data3, setData3] = useState([
    {
      id: 0,
      check: false,
      display: false,
    },
    {
      id: 1,
      check: false,
      display: false,
    },
    {
      id: 2,
      check: false,
      display: true,
    },
    {
      id: 3,
      check: false,
      display: false,
    },
    {
      id: 4,
      check: false,
      display: false,
    },
    {
      id: 5,
      check: false,
      display: false,
    },
    {
      id: 6,
      check: false,
      display: false,
    },
    {
      id: 7,
      check: false,
      display: false,
    },
    {
      id: 8,
      check: false,
      display: false,
    },
    {
      id: 9,
      check: false,
      display: false,
    },
    {
      id: 10,
      check: false,
      display: false,
    },
    {
      id: 11,
      check: false,
      display: false,
    },
    {
      id: 12,
      check: false,
      display: false,
    },
    {
      id: 13,
      check: false,
      display: false,
    },
    {
      id: 14,
      check: false,
      display: false,
    },
    {
      id: 15,
      check: false,
      display: false,
    },
    {
      id: 16,
      check: false,
      display: false,
    },
    {
      id: 17,
      check: false,
      display: true,
    },
  ]);

  const renderItem1 = ({item, index}) => {
    // if(res.selected==true){
    //   setBg('#000')
    // }
    return (
      <View
        style={[
          styles.bottomBorder,
          {
            borderColor: item?.check
              ? '#30343F'
              : '#FFF' && item.selected
              ? '#FFD645'
              : '#FFF' && item?.display
              ? '#000'
              : '#FFF',
            marginLeft: 3,
          },
        ]}>
        <TouchableOpacity
          onPress={() => {
            item['check'] = !item['check'];
            setData1([...data1]);
            console.log(item?.check);
          }}
          disabled={item?.selected}
          style={[
            styles.container,
            {
              backgroundColor: item?.check
                ? '#30343F'
                : '#FFF' && item?.selected
                ? '#FFD645'
                : '#FFF' && item?.display
                ? '#000'
                : '#FFF',
            },
          ]}></TouchableOpacity>
      </View>
    );
  };
  const renderItem2 = ({item, index}) => {
    return (
      <View
        style={[
          styles.bottomBorder,
          {
            borderColor: item?.check
              ? '#30343F'
              : '#FFF' && item.selected
              ? '#FFD645'
              : '#FFF' && item?.display
              ? '#000'
              : '#FFF',
            marginLeft: 3,
          },
        ]}>
        <TouchableOpacity
          onPress={() => {
            item['check'] = !item['check'];
            setData2([...data2]);
            console.log(item?.check);
          }}
          disabled={item?.display}
          style={[
            styles.containerMid,
            {
              backgroundColor: item?.check
                ? '#30343F'
                : '#FFF' && item?.display
                ? '#000'
                : '#FFF',
            },
          ]}></TouchableOpacity>
      </View>
    );
  };
  const renderItem3 = ({item, index}) => {
    return (
      <View
        style={[
          styles.bottomBorder,
          {
            borderColor: item?.check
              ? '#30343F'
              : '#FFF' && item.selected
              ? '#FFD645'
              : '#FFF' && item?.display
              ? '#000'
              : '#FFF',
            marginLeft: 3,
          },
        ]}>
        <TouchableOpacity
          onPress={() => {
            item['check'] = !item['check'];
            setData3([...data3]);
            console.log(item?.check);
          }}
          disabled={item?.display}
          style={[
            styles.containerMid,
            {
              backgroundColor: item?.check
                ? '#30343F'
                : '#FFF' && item?.display
                ? '#000'
                : '#FFF',
            },
          ]}></TouchableOpacity>
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
    const [cardHName, setCardHName] = useState(null);
    const [CNum, setCNum] = useState(null);
    const [cvv, setCvv] = useState(null);

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, width: '100%'}}>
        <View>
          <Text style={{...styles.btntext}}>Choose Your Payment Method</Text>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            paddingTop: 10,
            marginHorizontal: 15,
          }}>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/Visa.png')}
              resizeMode="contain"
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/Master.png')}
              resizeMode="contain"
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require('../assets/images/payPal.png')}
              resizeMode="contain"
              style={{width: 40, height: 40}}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            marginVertical: '5%',

            height: 50,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: '13%',
            backgroundColor: '#FFD645',
            // borderWidth: 1,
            // borderColor: 'red',
            display: 'flex',
            flexDirection: 'row',
          }}
          onPress={() => {
            ToastAndroid.show(
              'Payement Method is not available right Now',
              ToastAndroid.LONG,
            );
            // closeRBsheet();
          }}>
          <MaterialCommunityIcons
            name={'line-scan'}
            size={19}
            color={'#000'}
            style={{position: 'absolute', zIndex: 1, left: 85, top: 15}}
          />
          <Text
            style={{
              ...styles.text,
              fontWeight: '500',
              fontSize: 18,
              color: '#000',
            }}>
            Scan Card
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={{...styles.btntext, textAlign: 'left'}}>
            Card Details
          </Text>
        </View>
        <View>
          <LinearGradient
            colors={['#454548bd', '#454548bd', '#454548bd']}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              height: 60,
              borderRadius: 50,
              width: '100%',
              marginTop: 15,
              marginBottom: 10,
            }}>
            <TextInput
              style={{
                padding: 13,
                color: '#FFF',
                height: 60,
                borderRadius: 50,
              }}
              placeholder={'Card holder name'}
              placeholderTextColor={'#FFF'}
              value={cardHName}
              onChangeText={setCardHName}
            />
          </LinearGradient>
          <LinearGradient
            colors={['#454548bd', '#454548bd', '#454548bd']}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
              height: 60,
              borderRadius: 50,
              width: '100%',
              marginVertical: 10,
            }}>
            <TextInput
              style={{
                padding: 13,
                color: '#FFF',
                height: 60,
                borderRadius: 50,
              }}
              placeholder={'Card number'}
              placeholderTextColor={'#FFF'}
              keyboardType={'numeric'}
              value={CNum}
              onChangeText={setCNum}
            />
          </LinearGradient>

       
        </View>
        <TouchableOpacity onPress={closeRBsheet}>
          <LinearGradient
            colors={['#FFD645', '#FFD645', '#FFD645']}
            style={{
              width: '100%',
              height: 55,
              borderRadius: 30,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: '13%',
              marginTop: 10,
            }}>
            <Text
              style={{
                ...styles.text,
                fontWeight: '500',
                fontSize: 18,
                color: '#000',
              }}>
              Check Out
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000', padding: 10}}>
      <LinearGradient colors={['#bcced700', '#bcced700', '#bcced724']}>
        {/* <View style={{marginBottom: 10}}>
          <Image
            source={require('../assets/images/cropScreen.png')}
            style={{width: '100%', height: 150}}
            resizeMode="contain"
          />
        </View> */}

        {loading ? (
          <View
            style={{
              // borderWidth: 1,
              // borderColor: 'red',
              width: '95%',
              height: '27%',
              // backgroundColor:'#FFF',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: 10,
            }}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={require('../assets/images/newloader.gif')}
              resizeMode={'contain'}
            />
          </View>
        )  : (
          <View
            style={{
              // flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              // backgroundColor: 'white',
              // borderWidth: 1,
              // borderColor: 'red',
              width: '95%',
              height: '27%',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: 10,
              paddingHorizontal: 10,
              transform: [
                {perspective: -300},
                // {translateX: 20 * 0.20},
                {translateY: 20 * 0.2},

                {rotateX: '-2deg'},
                // {rotateY: '0deg'},
              ],
            }}>
            <YoutubePlayer
              width={350}
              height={220}
              play={playing}
              videoId={routeData}
              onChangeState={onStateChange}
            />
          </View>
        )}
        {/* -----Loader View---------------- */}

        {/* -----------Youtube Video View---------------- */}

        <View
          style={{
            borderColor: '#000',
            borderWidth: 1,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // margin: 10,
            // backgroundColor: '#000',
          }}>
          <View style={{marginRight: 5}}>
            <FlatList
              // contentContainerStyle={{borderColor:'blue',borderWidth:5}}

              showsHorizontalScrollIndicator={false}
              // horizontal={false}
              numColumns={3}
              data={data1}
              keyExtractor={item => item.id}
              renderItem={renderItem1}
            />
          </View>

          <View style={{marginRight: 5}}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              // horizontal={false}
              numColumns={3}
              data={data2}
              keyExtractor={item => item.id}
              renderItem={renderItem2}
            />
          </View>

          <View>
            <FlatList
              // contentContainerStyle={{borderColor:'blue',borderWidth:5}}
              showsHorizontalScrollIndicator={false}
              // horizontal={false}
              numColumns={3}
              data={data3}
              keyExtractor={item => item.id}
              renderItem={renderItem3}
            />
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginHorizontal: '10%',
            marginVertical: '7%',
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <View
              style={{
                ...styles.container,
                backgroundColor: '#FFF',
                marginBottom: 15,
                borderColor: '#FFF',
              }}></View>
            <View>
              <Text style={styles.text}>Available</Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
            }}>
            <View
              style={{
                ...styles.container,
                backgroundColor: '#222632',
                marginBottom: 15,
                borderColor: '#222632',
              }}></View>
            <View>
              <Text style={styles.text}>Reserved</Text>
            </View>
          </View>

          <View
            style={{
              alignItems: 'center',
            }}>
            <View
              style={{
                ...styles.container,
                backgroundColor: '#FFD645',
                marginBottom: 15,
                borderColor: '#FFD645',
              }}></View>
            <View>
              <Text style={styles.text}>Selected</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 0,
          }}>
          <LinearGradient
            colors={['#454548bd', '#454548bd', '#454548bd']}
            style={{
              width: '49%',
              height: 80,
              borderRadius: 15,
              // alignItems: 'center',
              justifyContent: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                ...styles.text,
                fontWeight: '400',
                fontSize: 14,
                textAlign: 'left',
                marginLeft: 7,
              }}>
              Oct 21, 2022
            </Text>
            <Text
              style={{
                ...styles.text,
                fontWeight: '500',
                fontSize: 18,
                textAlign: 'left',
                marginLeft: 7,
              }}>
              14:45
            </Text>
          </LinearGradient>
          <LinearGradient
            colors={['#454548bd', '#454548bd', '#454548bd']}
            style={{
              width: '49%',
              height: 80,
              borderRadius: 15,
              // alignItems: 'center',
              marginLeft: 5,
              justifyContent: 'center',
              padding: 10,
            }}>
            <Text
              style={{
                ...styles.text,
                fontWeight: '400',
                fontSize: 14,
                textAlign: 'left',
                marginLeft: 7,
              }}>
              Seats
            </Text>
            <Text
              style={{
                ...styles.text,
                fontWeight: '500',
                fontSize: 18,
                textAlign: 'left',
                marginLeft: 7,
              }}>
              E1,E2,E3
            </Text>
          </LinearGradient>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '7%',
            marginBottom: '7%',
            // marginLeft:'5%'
          }}>
          <View>
            <Text
              style={{
                ...styles.text,
                fontWeight: '400',
                fontSize: 14,
                textAlign: 'left',
                marginLeft: 7,
                shadowColor: '#FFF',
                shadowOffset: {
                  width: 0,
                  height: 12,
                },
                shadowOpacity: 0.58,
                shadowRadius: 16.0,

                elevation: 24,
              }}>
              Total
            </Text>
            <Text
              style={{
                ...styles.text,
                fontWeight: 'bold',
                fontSize: 28,
                // textAlign: 'left',
                marginLeft: 7,
              }}>
              $45.00
            </Text>
          </View>

          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={true}
            customStyles={{
              wrapper: {
                backgroundColor: '#000000e0',
              },
              draggableIcon: {
                backgroundColor: '#8F8F8F',
                width: 70,
              },
              container: {
                backgroundColor: '#454548bd',
                alignItems: 'center',
                height: '60%',
                paddingHorizontal: '10%',
                marginTop: 10,
                // borderWidth:1,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            }}>
            <RBSheetData />
          </RBSheet>

          <TouchableOpacity onPress={openRBsheet}>
            <LinearGradient
              colors={['#FFD645', '#FFD645', '#FFD645']}
              style={{
                // width: '100%',
                height: 80,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: '17%',
              }}>
              <Text
                style={{
                  ...styles.text,
                  fontWeight: '500',
                  fontSize: 18,
                  color: '#000',
                }}>
                Buy Ticket
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // backgroundColor: '#FFD645',
    width: 25,
    height: 25,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    paddingTop: 0,
  },

  curvedContainer: {
    width: 'auto',
    height: 'auto',
    borderWidth: 1,
    borderColor: '#FFF',
    // backgroundColor: 'white',
    borderRadius: 30,
    // overflow: 'hidden',
  },
  btntext: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
  containerMid: {
    // backgroundColor: '#FFD645',
    width: 25,
    height: 25,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    paddingTop: 0,
  },
  bottomBorder: {
    borderBottomWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    marginTop: '5%',
    marginRight: '1%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    borderRadius: 40,
  },
  VText: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '60%',
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

  btnV: {
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 25,
    padding: 10,
    backgroundColor: '#292F33',
  },
});

export default Screen3;
