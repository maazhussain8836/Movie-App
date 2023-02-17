import React, {useEffect, useState} from 'react';
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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TabView, SceneMap} from 'react-native-tab-view';
import axios from 'axios';

// const DATA = [
//   {
//     id: 1,
//     name: 'Black Adam',
//     imdb: '9.1',
//     genre: 'Action',
//     image: require('../assets/images/1a.jpg'),
//   },
//   {
//     id: 2,
//     name: 'Black Adam',
//     imdb: '9.2',
//     genre: 'Action',
//     image: require('../assets/images/2.jpg'),
//   },
//   {
//     id: 3,
//     name: 'Black Adam',
//     imdb: '9.3',
//     genre: 'Action',
//     image: require('../assets/images/3.jpg'),
//   },
//   {
//     id: 4,
//     name: 'Black Adam',
//     imdb: '9.4',
//     genre: 'Action',
//     image: require('../assets/images/4.jpg'),
//   },

//   {
//     id: 5,
//     name: 'Black Adam',
//     imdb: '9.5',
//     genre: 'Action',
//     image: require('../assets/images/5.jpg'),
//   },
// ];
// const DATA2 = [
//   {
//     id: 6,
//     name: 'Black Adam',
//     imdb: '9.9',
//     genre: 'Action',
//     image: require('../assets/images/6.jpg'),
//   },
//   {
//     id: 7,
//     name: 'Black Adam',
//     imdb: '9.10',
//     genre: 'Action',
//     image: require('../assets/images/7.jpg'),
//   },
//   {
//     id: 8,
//     name: 'Black Adam',
//     imdb: '9.11',
//     genre: 'Action',
//     image: require('../assets/images/8.jpg'),
//   },
//   {
//     id: 9,
//     name: 'Black Adam',
//     imdb: '9.12',
//     genre: 'Action',
//     image: require('../assets/images/9.jpg'),
//   },
//   {
//     id: 10,
//     name: 'Black Adam',
//     imdb: '9.9',
//     genre: 'Action',
//     image: require('../assets/images/10.jpg'),
//   },
// ];
// const DATA3 = [
//   {
//     id: 11,
//     name: 'Black Adam',
//     imdb: '9.6',
//     genre: 'Action',
//     image: require('../assets/images/11.jpg'),
//   },
//   {
//     id: 12,
//     name: 'Black Adam',
//     imdb: '9.7',
//     genre: 'Action',
//     image: require('../assets/images/12.jpg'),
//   },
//   {
//     id: 13,
//     name: 'Black Adam',
//     imdb: '9.8',
//     genre: 'Action',
//     image: require('../assets/images/13.jpg'),
//   },
//   {
//     id: 14,
//     name: 'Black Adam',
//     imdb: '9.9',
//     genre: 'Action',
//     image: require('../assets/images/14.jpg'),
//   },
//   {
//     id: 15,
//     name: 'Black Adam',
//     imdb: '9.10',
//     genre: 'Action',
//     image: require('../assets/images/15.jpg'),
//   },
// ];

const Screen2 = ({navigation, route}) => {
  const [selectData, setSelectData] = useState();
  const routeData = route.params;

  useEffect(() => {
    axios
    .get('https://imdb-top-100-movies.p.rapidapi.com/', {
      headers: {
        'X-RapidAPI-Key':
          '13f129cac9msh7fc11041ecd8a1dp18a5d5jsn903021b1e346',
        'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
      },
    })
    .then(res => {
      let data = res?.data;
      console.log(data)
      data?.map(items => {
      items?.id == routeData?.id ? setSelectData(items) : null;
    });
    })
    .catch(err => {
      console.log(err);
    });
  }, [])
  
   
  
  //  Api data routing---------
  const FirstRoute = () => {
    return (
      <ScrollView style={{marginTop: 20}}>
        <Text
          style={{
            ...styles.text,
            fontWeight: '400',
            fontSize: 14,
            textAlign: 'left',
          }}>
          {selectData?.description}
        </Text>
      </ScrollView>
    );
  };

  const SecondRoute = () => (
    <ScrollView style={{marginTop: 20}}>
      <Text
        style={{
          ...styles.text,
          fontWeight: '400',
          fontSize: 14,
          textAlign: 'left',
        }}>
        Lorem ipsum dolor sit amet. Id magni rerum eum culpa galisum qui
        accusantium expedita non officia ipsam rem iusto fugiat. Aut quod labore
        aut reiciendis consequatur aut omnis maxime. Qui blanditiis sint et
        reprehenderit consequuntur sed galisum asperiores et voluptas voluptate.
        reprehenderit consequuntur sed galisum asperiores et voluptas voluptate.
      </Text>
    </ScrollView>
  );

  const ThirdRoute = () => (
    <ScrollView style={{marginTop: 20}}>
      <Text
        style={{
          ...styles.text,
          fontWeight: '400',
          fontSize: 14,
          textAlign: 'left',
        }}>
        Lorem ipsum dolor sit amet. Id magni rerum eum culpa galisum qui
        accusantium expedita non officia ipsam rem iusto fugiat. Aut quod labore
        aut reiciendis consequatur aut omnis maxime. Qui blanditiis sint et
        reprehenderit consequuntur sed galisum asperiores et voluptas voluptate.
        reprehenderit consequuntur sed galisum asperiores et voluptas voluptate.
      </Text>
    </ScrollView>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  // Fake Data Routing-----
  //  useEffect(() => {
  //   DATA?.map(items => {
  //     items?.id == routeData?.id ? setSelectData(items) : null;
  //   });
  //   DATA2?.map(items => {
  //     items?.id == routeData?.id ? setSelectData(items) : null;
  //   });
  //   DATA3?.map(items => {
  //     items?.id == routeData?.id ? setSelectData(items) : null;
  //   });
  // }, []);

  
  console.log(selectData, 'selectData');

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
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <LinearGradient
              colors={['#454548bd', '#454548bd', '#454548bd']}
              style={{
                width: '32.5%',
                padding: 10,
                borderRadius: 15,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 3,
              }}>
              <TouchableOpacity
                onPress={() => {
                  setIndex(i);
                  console.log(i, 'index');
                }}>
                <Animated.Text
                  style={{...styles.text, fontWeight: '400', fontSize: 14}}>
                  {route.title}
                </Animated.Text>
              </TouchableOpacity>
            </LinearGradient>
          );
        })}
      </View>
    );
  };
  return (
    <ImageBackground
      source={{uri: selectData?.image}}
      resizeMode={'stretch'}
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
      <LinearGradient
        colors={['#FFFFFF00', '#0e0e0dde', '#0e0e0df5']}
        style={styles.VText}>
        <View style={{marginHorizontal: 20}}>
          <LinearGradient
            colors={['#454548bd', '#454548bd', '#454548bd']}
            style={{
              width: '30%',
              padding: 10,
              borderRadius: 15,
              height: 50,
              alignItems: 'center',
              justifyContent: 'space-around',
              
            }}>
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                
              }}>
              <Ionicons
                size={14}
                name={'notifications-outline'}
                color={'#FFF'}
              />
              <Text
                style={{
                  ...styles.text,
                  fontWeight: '400',
                  fontSize: 14,
                  marginLeft: 15,
                }}>
                {selectData?.genre[0]}
              </Text>
            </View>
          </LinearGradient>

          <View style={{marginVertical: 10}}>
            <Text style={{...styles.text, fontSize: 32, textAlign: 'left'}}>
              {selectData?.title}
            </Text>
          </View>
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
                IMDB {selectData?.rating}
              </Text>
            </View>
            <View>
              <AntDesign size={15} name={'clockcircle'} color={'#454548bd'} />
            </View>
            <View>
              <Text style={{...styles.text, fontWeight: '400', fontSize: 14}}>
                2h 4m
              </Text>
            </View>
            <View>
              <Ionicons size={15} name={'calendar'} color={'#454548bd'} />
            </View>
            <View>
              <Text style={{...styles.text, fontWeight: '400', fontSize: 14}}>
                October 21,2022
              </Text>
            </View>
          </View>

          <View style={{position: 'relative'}}>
            <TabView
              style={{
                position: 'absolute',
                // borderWidth: 1,
                // borderColor: '#FFF',
                height: 200,
                overflow: 'hidden',
              }}
              navigationState={{index, routes}}
              renderScene={renderScene}
              onIndexChange={handleIndexChange}
              renderTabBar={renderTabBar}
            />
          </View>
          <TouchableOpacity
            style={{position: 'absolute', width: '100%', bottom: -260}}
            onPress={() => navigation.navigate('Screen3')}>
            <LinearGradient
              colors={['#454548bd', '#454548bd', '#454548bd']}
              style={{
                width: '100%',
                height: 70,
                borderRadius: 15,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
              }}>
              <Text style={{...styles.text, fontWeight: '500', fontSize: 18}}>
                Get Reservation
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
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
  tabBar: {
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    justifyContent: 'center',
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
