import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  PanResponder,
  TextInput,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BlurView} from '@react-native-community/blur';
import axios from 'axios';

const DATA = [
  {
    id: 1,
    name: 'Black Adam',
    imdb: '9.1',
    genre: 'Action',
    image: require('../assets/images/1a.jpg'),
  },
  {
    id: 2,
    name: 'Black Adam',
    imdb: '9.2',
    genre: 'Action',
    image: require('../assets/images/2.jpg'),
  },
  {
    id: 3,
    name: 'Black Adam',
    imdb: '9.3',
    genre: 'Action',
    image: require('../assets/images/3.jpg'),
  },
  {
    id: 4,
    name: 'Black Adam',
    imdb: '9.4',
    genre: 'Action',
    image: require('../assets/images/4.jpg'),
  },

  {
    id: 5,
    name: 'Black Adam',
    imdb: '9.5',
    genre: 'Action',
    image: require('../assets/images/5.jpg'),
  },
  {
    id: 6,
    name: 'Black Adam',
    imdb: '9.9',
    genre: 'Action',
    image: require('../assets/images/6.jpg'),
  },
  {
    id: 7,
    name: 'Black Adam',
    imdb: '9.10',
    genre: 'Action',
    image: require('../assets/images/7.jpg'),
  },
  {
    id: 8,
    name: 'Black Adam',
    imdb: '9.11',
    genre: 'Action',
    image: require('../assets/images/8.jpg'),
  },
  {
    id: 9,
    name: 'Black Adam',
    imdb: '9.12',
    genre: 'Action',
    image: require('../assets/images/9.jpg'),
  },
  {
    id: 10,
    name: 'Black Adam',
    imdb: '9.9',
    genre: 'Action',
    image: require('../assets/images/10.jpg'),
  },
  {
    id: 11,
    name: 'Black Adam',
    imdb: '9.6',
    genre: 'Action',
    image: require('../assets/images/11.jpg'),
  },
  {
    id: 12,
    name: 'Black Adam',
    imdb: '9.7',
    genre: 'Action',
    image: require('../assets/images/12.jpg'),
  },
  {
    id: 13,
    name: 'Black Adam',
    imdb: '9.8',
    genre: 'Action',
    image: require('../assets/images/13.jpg'),
  },
  {
    id: 14,
    name: 'Black Adam',
    imdb: '9.9',
    genre: 'Action',
    image: require('../assets/images/14.jpg'),
  },
  {
    id: 15,
    name: 'Black Adam',
    imdb: '9.10',
    genre: 'Action',
    image: require('../assets/images/15.jpg'),
  },
];
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

const Screen1 = ({navigation}) => {
  const [data, setData] = useState('Movie Name');
  const [searchQuery, setSearchQuery] = useState(searchQuery);
  const [movieData, setMovieData] = useState();
  const [allMovie, setAllMovie] = useState();
  const [actionMovie, setActionMovie] = useState();
  const [dramaMovie, setDramaMovie] = useState();
  const [crimeMovie, setCrimeMovie] = useState();
  const handleSearch = text => {
    setSearchQuery(text);
    // handle search logic here
  };

  // const panResponder = useRef(
  //   PanResponder.create({
  //     onMoveShouldSetPanResponder: () => true,
  //     onPanResponderMove: (event, gestureState) => {
  //       const {dy} = gestureState;
  //       selectedItem.current.setNativeProps({
  //         style: {
  //           transform: [{translateY: dy}],
  //         },
  //       });
  //     },
  //     onPanResponderRelease: () => {
  //       selectedItem.current.setNativeProps({
  //         style: {
  //           transform: [{translateY: 0}],
  //         },
  //       });
  //     },
  //   }),
  // ).current;

  // const selectedItem = useRef();
  const renderItem = ({index, item}) => {
    return (
      <View
        style={{
          // aspectRatio: 1,
          // margin:index % 2 !== 0 ? 10 : 30,
          // marginRight: index % 2 !== 0 ? 10 : 30,
          // padding:index % 2 !== 0 ? 50 : 5,
          padding: 5,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Screen2', item)}
          style={{
            height: moderateScale(320),
            width: moderateScale(240),
            overflow: 'hidden',
            borderRadius: 30,
            // flex:1
            // borderWidth:1,
            // borderColor:'#FFF'
          }}>
          <Image
            source={{uri: item?.image}}
            resizeMode="cover"
            style={styles.ImageV}></Image>
          <View
            style={{
              // width: '20%',
              paddingVertical: 7,
              paddingHorizontal: 10,
              borderRadius: 9,
              // height: 25,
              backgroundColor: '#FFD645',
              alignItems: 'center',
              position: 'absolute',
              left: 20,
              top: 20,
            }}>
            <Text
              style={{
                ...styles.text,
                fontWeight: 'bold',
                fontSize: 12,
                color: '#000',
                marginLeft: 0,
              }}>
              IMDB {item?.rating}
            </Text>
          </View>
          <LinearGradient
            colors={['#FFFFFF00', '#000000c9', '#000000c9']}
            // start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            style={styles.VText}>
            <Text style={{...styles.text, marginTop: 20}}>{item.title} </Text>
            <Text
              style={{
                ...styles.text,
                fontSize: 13,
                marginTop: 5,
                fontWeight: '500',
              }}>
              {item.genre.map(res => {
                return (
                  <Text
                    style={{
                      ...styles.text,
                      fontSize: 13,
                      marginTop: 5,
                      fontWeight: '500',
                    }}>
                    {' '}
                    {res}{' '}
                  </Text>
                );
              })}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };
  // const renderItem2 = ({index, item}) => {
  //   return (
  //     <View
  //       style={{
  //         // aspectRatio: 1,
  //         // margin:index % 2 !== 0 ? 10 : 30,
  //         // marginRight: index % 2 !== 0 ? 10 : 30,
  //         // padding:index % 2 !== 0 ? 50 : 5,
  //         padding: 5,
  //       }}>
  //       <TouchableOpacity
  //       onPress={()=>navigation.navigate('Screen2',item)}
  //         style={{
  //           height: moderateScale(320),
  //           width: moderateScale(240),
  //           overflow: 'hidden',
  //           borderRadius: 30,
  //           // flex:1
  //           // borderWidth:1,
  //           // borderColor:'#FFF'
  //         }}>
  //         <Image
  //           source={item.image}
  //           resizeMode="cover"
  //           style={styles.ImageV}></Image>

  //         <LinearGradient
  //           colors={['#FFFFFF00', '#000000c9', '#000000c9']}
  //           // start={{x: 0, y: 0}} end={{x: 1, y: 0}}
  //           style={styles.VText}>
  //           <Text style={{...styles.text, marginTop: 20}}>{item.name} </Text>
  //           <Text
  //             style={{
  //               ...styles.text,
  //               fontSize: 13,
  //               marginTop: 5,
  //               fontWeight: '500',
  //             }}>
  //             {item.genre}
  //           </Text>
  //         </LinearGradient>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };
  // const renderItem3 = ({index, item}) => {
  //   return (
  //     <View
  //       style={{
  //         // aspectRatio: 1,
  //         // margin:index % 2 !== 0 ? 10 : 30,
  //         // marginRight: index % 2 !== 0 ? 10 : 30,
  //         // padding:index % 2 !== 0 ? 50 : 5,
  //         padding: 5,
  //       }}>
  //       <TouchableOpacity
  //       onPress={()=>navigation.navigate('Screen2',item)}
  //         style={{
  //           height: moderateScale(320),
  //           width: moderateScale(240),
  //           overflow: 'hidden',
  //           borderRadius: 30,
  //           // flex:1
  //           // borderWidth:1,
  //           // borderColor:'#FFF'
  //         }}>
  //         <Image
  //           source={item.image}
  //           resizeMode="cover"
  //           style={styles.ImageV}></Image>

  //         <LinearGradient
  //           colors={['#FFFFFF00', '#000000c9', '#000000c9']}
  //           // start={{x: 0, y: 0}} end={{x: 1, y: 0}}
  //           style={styles.VText}>
  //           <Text style={{...styles.text, marginTop: 20}}>{item.name} </Text>
  //           <Text
  //             style={{
  //               ...styles.text,
  //               fontSize: 13,
  //               marginTop: 5,
  //               fontWeight: '500',
  //             }}>
  //             {item.genre}
  //           </Text>
  //         </LinearGradient>
  //       </TouchableOpacity>
  //     </View>
  //   );
  // };

  // const flatListRef = useRef(null);
  // const flatListRef2 = useRef(null);
  // const flatListRef3 = useRef(null);

  // const scrollY = new Animated.Value(0);

  // const onHandlerStateChange = event => {
  //   if (event.nativeEvent.oldState === State.ACTIVE) {
  //     flatListRef.current
  //       .getNode()
  //       .scrollTo({y: scrollY._value, animated: true});
  //     scrollY.setValue(0);
  //   }
  // };

  // useEffect(() => {
  //   let index = 0;
  //   setInterval(() => {
  //     flatListRef.current.scrollToIndex({ index, animated: true,animationDuration: 10000 });
  //     index = index === DATA.length - 1 ? 0 : index + 1;

  //   }, 3000);
  // }, []);

  // useEffect(() => {
  //   let index = DATA2.length - 1;
  //   setInterval(() => {
  //     flatListRef2.current.scrollToIndex({ index, animated: true,animationDuration: 10000 });
  //     index = index === 0 ? DATA2.length - 1 : index - 1;
  //   }, 3000);
  // }, []);

  // useEffect(() => {
  //   let index = 0;
  //   setInterval(() => {
  //     flatListRef3.current.scrollToIndex({ index, animated: true,animationDuration: 10000 });
  //     index = index === DATA3.length - 1 ? 0 : index + 1;
  //   }, 3000);
  // }, []);

  const NavbarTop = () => {
    return (
      <View
        style={{
          borderRadius: 50,
          overflow: 'hidden',
          // flex: 1,
          width: '95%',
          backgroundColor: 'transparent',
          position: 'absolute',
          zIndex: 1,
          top: 80,
          left: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <BlurView
          blurType="light"
          blurAmount={1}
          blurRadius={5}
          style={[
            {
              width: '100%',
              height: 70,
              backgroundColor: 'rgba(37,42,54,0.25)',
            },
          ]}>
          <View
            style={{
              // bottom: 30,
              height: 70,
              // zIndex: 1,
              width: '95%',
              // borderRadius: 30,
              justifyContent: 'space-between',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
              padding: 20,
              // borderWidth: 1,
              // borderColor: '#FFF',
            }}>
            <TouchableOpacity onPress={typeAll}>
              <Text style={{...styles.text, fontSize: 14, fontWeight: '500'}}>
                All
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={typeAction}>
              <Text style={{...styles.text, fontSize: 14, fontWeight: '500'}}>
                Action
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={typeDrama}>
              <Text style={{...styles.text, fontSize: 14, fontWeight: '500'}}>
                Drama
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={typeCrime}>
              <Text style={{...styles.text, fontSize: 14, fontWeight: '500'}}>
                Crime
              </Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </View>
    );
  };

  const NavbarBottom = () => {
    return (
      <View
        style={{
          borderRadius: 50,
          overflow: 'hidden',
          // flex: 1,
          width: '70%',
          backgroundColor: 'transparent',
          position: 'absolute',
          zIndex: 1,
          bottom: 40,
          left: 60,
          alignItems: 'center',
          justifyContent: 'center',
          // padding:10,
          // marginHorizontal:10
        }}>
        <BlurView
          blurType="light"
          blurAmount={1}
          blurRadius={5}
          style={[
            {
              width: '100%',
              height: 70,
              backgroundColor: 'rgba(37,42,54,0.25)',
            },
          ]}>
          <View
            style={{
              // bottom: 30,
              height: 70,
              // zIndex: 1,
              width: '100%',
              // borderRadius: 30,
              justifyContent: 'space-around',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
              padding: 10,

              // borderWidth: 1,
              // borderColor: '#FFF',
            }}>
            <Ionicons size={25} name={'color-fill'} color={'#FFD645'} />
            <Ionicons size={20} name={'calendar-sharp'} color={'#FFF'} />
            <Ionicons size={20} name={'calculator'} color={'#FFF'} />
            <Ionicons
              size={25}
              name={'md-person-circle-outline'}
              color={'#FFF'}
            />
          </View>
        </BlurView>
      </View>
    );
  };
  const searchMovie = () => {
    axios
      .get(`https://imdb-movies-web-series-etc-search.p.rapidapi.com/${searchQuery}.json`, {
        headers: {
          'X-RapidAPI-Key':
            '13f129cac9msh7fc11041ecd8a1dp18a5d5jsn903021b1e346',
          'X-RapidAPI-Host': 'imdb-movies-web-series-etc-search.p.rapidapi.com',
        },
      })
      .then(res => {
        // let arr=[];
        let data = res?.data?.d;
        // data.map(item => {
        //   console.log(item);
        // });
        // console.log(data);
        data.map((item)=>{
          console.log(item?.l)
          setSearchQuery(null);
        })
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    renderTopMovies();
  }, []);

  const renderTopMovies = () => {
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
        console.log(data);
        setMovieData(data);

        const allGenre = data.filter(item => {
          return (
            item?.genre.includes('Adventure') ||
            item?.genre.includes('Sci-Fi') ||
            item?.genre.includes('Mystery') ||
            item?.genre.includes('Horror') ||
            item?.genre.includes('Thriller') 
          );
        });
        setAllMovie(allGenre);

        const drama = data.filter(item => {
          return item?.genre.includes('Drama');
        });
        setDramaMovie(drama);

        const action = data.filter(item => {
          return item?.genre.includes('Action');
        });
        setActionMovie(action);

        const crime = data.filter(item => {
          return item?.genre.includes('Crime');
        });
        setCrimeMovie(crime);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const typeAll = () => {
    setMovieData(allMovie);
    console.log(allMovie, 'Mystery');
  };

  const typeDrama = () => {
    setMovieData(dramaMovie);
    console.log(dramaMovie, 'Drama');
  };

  const typeAction = () => {
    setMovieData(actionMovie);
    console.log(actionMovie, 'Action');
  };

  const typeCrime = () => {
    setMovieData(crimeMovie);
    console.log(crimeMovie, 'Crime');
  };
  return (
    <View style={{backgroundColor: '#151618', flex: 1}}>
      <View style={styles.topNav}>
        <Ionicons
          size={30}
          name={'notifications-outline'}
          color={'#FFF'}
          style={{bottom: 10}}
        />
        <View
          style={{
            borderRadius: 50,
            overflow: 'hidden',
            // flex: 1,
            width: '80%',
            backgroundColor: 'transparent',
            position: 'absolute',
            zIndex: 1,
            bottom: 5,
            left: 35,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <BlurView
            blurType="light"
            blurAmount={1}
            blurRadius={5}
            style={[
              {
                width: '100%',
                height: 45,
                backgroundColor: 'rgba(37,42,54,0.25)',
              },
            ]}>
            <TextInput
              style={{
                height: 20,
                borderColor: 'rgba(37,42,54,0.25)',
                borderWidth: 1,
                width: 300,
                color: '#FFF',
                paddingLeft: 20,
              }}
              onChangeText={handleSearch}
              value={searchQuery}
              placeholder="Search Movie Here"
              placeholderTextColor={'#FFF'}
            />
          </BlurView>
        </View>
        <Ionicons
          size={30}
          name={'search'}
          color={'#FFF'}
          style={{bottom: 10}}
          onPress={searchMovie}
        />
      </View>

      {/* --------------------Top NavBar------------------ */}

      <NavbarTop />

      {/* --------------------Bottom NavBar------------------ */}

      <NavbarBottom />

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {/* <PanGestureHandler
          onGestureEvent={Animated.event([{nativeEvent: {y: scrollY}}])}
          onHandlerStateChange={onHandlerStateChange}>
          <Animated.View style={{flex: 1}}> */}
        <FlatList
          scrollEnabled={true}
          horizontal={false}
          numColumns={3}
          data={movieData}
          renderItem={renderItem}
          // ref={flatListRef}
          keyExtractor={item => item.id}
        />
        {/* </Animated.View>
        </PanGestureHandler> */}
        {/* <FlatList
          scrollEnabled={true}
          horizontal={false}
          numColumns={1}
          data={DATA2}
          renderItem={renderItem2}
          // ref={flatListRef2}
          keyExtractor={item => item.id}
        />
        <FlatList
          scrollEnabled={true}
          horizontal={false}
          numColumns={1}
          data={DATA3}
          renderItem={renderItem3}
          // ref={flatListRef3}
          keyExtractor={item => item.id}
        /> */}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 25,
    // borderWidth: 1,
    // borderColor: '#FFF',
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
    // borderWidth: 1,
    // borderColor: '#FFF',
    // marginLeft: 25,
    position: 'absolute',
    bottom: 0,
    // backgroundColor:'#00000000',
    width: '100%',
    height: '30%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    // borderBottomLeftRadius: 30,
    // borderBottomRightRadius:30,
  },
  ImageV: {
    height: '100%',
    width: '100%',

    // borderRadius: 30,
    // borderWidth:1,
    // borderColor:'#FFF'
    //   position: 'absolute',
    //   right: 200,
    //   bottom: 0,
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
});
export default Screen1;
