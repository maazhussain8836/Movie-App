import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Screen3 = ({navigation}) => {
  // const [freePing, setFreePing] = useState('Compliment your date');
  const [Bg, setBg] = useState('')
  const [data1, setData1] = useState([
    {
      id: 0,
      check: false,
      selected:false,
      display:true
    },
    {
      id: 1,
      check: false,
      selected:false,
      display:false
    },
    {
      id: 2,
      check: false,
      selected:false,
      display:false
    },
    {
      id: 3,
      check: false,
      selected:false,
      display:false
    },
    {
      id: 4,
      check: false,
      selected:false,
      display:false
    },
    {
      id: 5,
      check: false,
      selected:false,
      display:false
    },
    {
      id: 6,
      check: false,
      selected:false,
      display:false
    },
    {
      id: 7,
      check: false,
      selected:false,
      display:false
    },
    {
      id: 8,
      check: false,
      selected:false,
      display:false
    },
    {
      id: 9,
      check: false,
      selected:true,
      display:false
    },
    {
      id: 10,
      check: false,
      selected:true,
      display:false
    },
    {
      id: 11,
      check: false,
      selected:true,
      display:false
    },
    {
      id: 12,
      check: false,
      selected:false,
      display:false
    },
    {
      id: 13,
      check: false,
      selected:false,
      display:false
    },

    {
      id: 14,
      check: false,
      selected:false,
      display:false
    },
    {
      id: 15,
      check: false,
      selected:false,
      display:true
    },
    {
      id: 16,
      check: false,
      selected:false,
      display:false
    },
    {
      id: 17,
      check: false,
      selected:false,
      display:false
    },
  ]);

  const [data2, setData2] = useState([
    {
      id: 0,
      check: false,
      display:false
    },
    {
      id: 1,
      check: false,
      display:false
    },
    {
      id: 2,
      check: false,
      display:false
    },
    {
      id: 3,
      check: false,
      display:false
    },
    {
      id: 4,
      check: false,
      display:false
    },
    {
      id: 5,
      check: false,
      display:false
    },
    {
      id: 6,
      check: false,
      display:false
    },
    {
      id: 7,
      check: false,
      display:false
    },
    {
      id: 8,
      check: false,
      display:false
    },
    {
      id: 9,
      check: false,
      display:false
    },
    {
      id: 10,
      check: false,
      display:false
    },
    {
      id: 11,
      check: false,
      display:false
    },
    {
      id: 12,
      check: false,
      display:false
    },
    {
      id: 13,
      check: false,
      display:false
    },
    {
      id: 14,
      check: false,
      display:false
    },
    {
      id: 15,
      check: false,
      display:true
    },
    {
      id: 16,
      check: false,
      display:true
    },
    {
      id: 17,
      check: false,
      display:true
    },
  ]);
  const [data3, setData3] = useState([
    {
      id: 0,
      check: false,
      display:false
    },
    {
      id: 1,
      check: false,
      display:false
    },
    {
      id: 2,
      check: false,
      display:true
    },
    {
      id: 3,
      check: false,
      display:false
    },
    {
      id: 4,
      check: false,
      display:false
    },
    {
      id: 5,
      check: false,
      display:false
    },
    {
      id: 6,
      check: false,
      display:false
    },
    {
      id: 7,
      check: false,
      display:false
    },
    {
      id: 8,
      check: false,
      display:false
    },
    {
      id: 9,
      check: false,
      display:false
    },
    {
      id: 10,
      check: false,
      display:false
    },
    {
      id: 11,
      check: false,
      display:false
    },
    {
      id: 12,
      check: false,
      display:false
    },
    {
      id: 13,
      check: false,
      display:false
    },
    {
      id: 14,
      check: false,
      display:false
    },
    {
      id: 15,
      check: false,
      display:false
    },
    {
      id: 16,
      check: false,
      display:false
    },
    {
      id: 17,
      check: false,
      display:true
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
        {borderColor: item?.check ? '#30343F' : '#FFF' && item.selected ? '#FFD645' : '#FFF' && item?.display ? '#000' : '#FFF',
        marginLeft:3},
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
            {backgroundColor: item?.check ? '#30343F' : '#FFF' && item?.selected ? '#FFD645' : '#FFF' && item?.display ? '#000' : '#FFF'},
          ]}></TouchableOpacity>
      </View>
    );
  };
  const renderItem2 = ({item, index}) => {
    
    return (
      <View
        style={[
          styles.bottomBorder,
          {borderColor: item?.check ? '#30343F' : '#FFF' && item.selected ? '#FFD645' : '#FFF' && item?.display ? '#000' : '#FFF',
          marginLeft:3},
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
            {backgroundColor: item?.check ? '#30343F' : '#FFF'
            && item?.display ? '#000' : '#FFF'
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
          {borderColor: item?.check ? '#30343F' : '#FFF' && item.selected ? '#FFD645' : '#FFF' && item?.display ? '#000' : '#FFF',
          marginLeft:3},
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
            {backgroundColor: item?.check ? '#30343F' : '#FFF'
            && item?.display ? '#000' : '#FFF'}
          ]}></TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#000',padding: 10}}>
      
        <LinearGradient
          
          colors={['#bcced700', '#bcced700', '#bcced724']}>
          <View
            style={{
              alignItems: 'flex-start',
              marginHorizontal: 18,
              marginTop: 30,
            }}>
            <Ionicons size={25} name={'chevron-back'} color={'#FFF'} onPress={()=>navigation.navigate('Screen2')}/>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{...styles.text, fontWeight: '400'}}>Screen</Text>
          </View>
          <View
            style={{
              borderTopWidth: 5,
              borderLeftWidth: 5,
              borderRightWidth: 5,
              marginVertical: '9%',
              borderTopLeftRadius: 50,
              borderColor: '#FFF',
            }}></View>

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
            <View style={{marginRight:5}}>
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

            <View style={{marginRight:5}}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                // horizontal={false}
                numColumns={3}
                data={data2}
                keyExtractor={item => item.id}
                renderItem={renderItem2}
              />
            </View>

            <View >
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
              marginVertical: '10%',
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
              marginTop: '13%',
              marginBottom: '10%',
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
            <TouchableOpacity onPress={()=>navigation.navigate('Screen1')}>
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

  containerMid: {
    // backgroundColor: '#FFD645',
    width: 25,
    height: 25,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    paddingTop: 0,
  },
  bottomBorder:{
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
