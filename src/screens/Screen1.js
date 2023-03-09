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
  Button,
  Alert,
  ToastAndroid,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useRef, useState, useEffect, useContext} from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BlurView} from '@react-native-community/blur';
import AppContext from '../components/AppContext';
import axiosConfig from '../provider/axios';
import Loader from '../components/Loader';

const Screen1 = ({navigation}) => {
  const flatListRef = useRef();
  const scrollViewRef = useRef();

  const handleScrollToTop = () => {
    flatListRef.current.scrollToOffset({offset: 0, animated: true});
    scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
  };
  // ------- render Data of Flatlist------
  const [movieData, setMovieData] = useState([]);
  
  // -------Lodading pages for Popular Movies
  const [currentPage, setCurrentPage] = useState(1);
  // --------context is using for search bar to search movie from anywhere (If later is required)
  const context = useContext(AppContext);
  // --------------set tab status by Highlighting it-------
  const [activeTab, setActiveTab] = useState(0);
  // --------to set again popular movies in its state when popular tab is pressed-------
  const [popular, setPopular] = useState([]);

  const [genreData, setGenreData] = useState([]);
  // ------Loader-------
  const [loading,setLoading]=useState(false)
  //  ------------------Api's -------------------------

  //  ----------Popular Movies Api----------------

  // *{this api renders when app is open so thats why it isin useEffect }
  // console.log(genreID,'Genere ID')

  useEffect(() => {
    const popularMovies = () => {
      setLoading(true)
      axiosConfig
        .get('/movie/popular', {
          params: {
            api_key: 'fb833fc3d7c0adf1c587ae2b5736fc6b',
            language: 'en-US',
            page: `${currentPage}`,
          },
        })
        .then(res => {
          let data = res?.data?.results;
          setPopular(data);
          setMovieData(prevMovie => [...prevMovie, ...data]);
          setLoading(false)
        })
        .catch(err => {
          console.log(err);
        });
    };
    popularMovies();
  }, [currentPage]);

  // Load More Pages function
  const loadMore = () => {
    
    setCurrentPage(currentPage + 1);
    handleTabPress(5);
    console.log(movieData, 'next page data');
    console.log(currentPage);
  };

  //  ----------top rated Movies Api----------------
  const topRatedMovies = () => {
    setLoading(true)
    axiosConfig
      .get('/movie/top_rated', {
        params: {
          api_key: 'fb833fc3d7c0adf1c587ae2b5736fc6b',
          language: 'en-US',
          page: `${currentPage}`,
        },
      })
      .then(res => {
        let data = res?.data?.results;
        setMovieData(data);
        handleTabPress(1);
        setLoading(false)
      })
      .catch(err => {
        console.log(err);
      });
  };
  //  ----------Now Playing Movies Api----------------
  const nowPlaying = () => {
    setLoading(true)
    axiosConfig
      .get('/movie/now_playing', {
        params: {
          api_key: 'fb833fc3d7c0adf1c587ae2b5736fc6b',
          language: 'en-US',
          page: `${currentPage}`,
        },
      })
      .then(res => {
        let data = res?.data?.results;
        setMovieData(data);
        handleTabPress(3);
        setLoading(false)
      })
      .catch(err => {
        console.log(err);
      });
  };
  //  ----------Upcoming Movies Api----------------
  const upcomingMovies = () => {
    setLoading(true)
    axiosConfig
      .get('/movie/upcoming', {
        params: {
          api_key: 'fb833fc3d7c0adf1c587ae2b5736fc6b',
          language: 'en-US',
        },
      })
      .then(res => {
        let data = res?.data?.results;
        // setUpcoming(data)
        // setMovieData(prevMovie=>[...prevMovie, ...data]);
        setMovieData(data);
        handleTabPress(2);
        setLoading(false)
      })
      .catch(err => {
        console.log(err);
      });
  };
  //  -------------------------------SEARCH BAR -----------------------------------
  const [placeholderColor, setPlaceholderColor] = useState('#FFF');
  // -----Set text in a searchbar--------
  const handleSearch = text => {
    context.setSearchQuery(text);

    // handle search logic here
  };
  //  -----------Searh Movie Api---------------
  const searchMovie = () => {
    setLoading(true)
    axiosConfig
      .get(`/search/movie`, {
        params: {
          api_key: 'fb833fc3d7c0adf1c587ae2b5736fc6b',
          query: context.searchQuery,
        },
      })
      .then(res => {
        let data = res?.data?.results;
        console.log(data, 'search api data');
        setMovieData(data);
        setLoading(false)
        context.setSearchQuery(null);
        Keyboard.dismiss();
        handleTabPress(4);
        if (context.searchQuery == null) {
          // setLoading(false)
          ToastAndroid.show('Enter Movie Name for Search', ToastAndroid.LONG);
          setMovieData(popular);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  //  ------Movie Genre Api-----------------------

  useEffect(() => {
    setLoading(true)
    axiosConfig
      .get('/genre/movie/list', {
        params: {
          api_key: 'fb833fc3d7c0adf1c587ae2b5736fc6b',
          language: 'en-US',
        },
      })
      .then(res => {
        let data = res?.data?.genres;
        setGenreData(data);
        setLoading(false)
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // console.log(genreData,'gnere data')

  //  --------here render Item of Flatlist----------
  const renderItem = ({index, item}) => {
    return (
      <View
      style={{
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
          {item.poster_path !== null ? (
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}`,
              }}
              resizeMode="cover"
              style={styles.ImageV}></Image>
          ) : (
            <Image
              source={require('../assets/images/no_poster.png')}
              resizeMode="cover"
              style={styles.ImageV}></Image>
          )}
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
              IMDB {item?.vote_average}
            </Text>
          </View>
          <LinearGradient
            colors={['#FFFFFF00', '#000000c9', '#000000c9']}
            // start={{x: 0, y: 0}} end={{x: 1, y: 0}}
            style={styles.VText}>
            <Text style={{...styles.text, marginTop: 20}}>{item?.title} </Text>
            <Text
              style={{
                ...styles.text,
                fontSize: 13,
                marginTop: 5,
                fontWeight: '500',
              }}>
              {item?.genre_ids
                .map(genreId => {
                  const genre = genreData?.find(item => item.id === genreId);
                  return genre ? genre?.name : '';
                  // return genreId;
                })
                .join(', ')}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };
  // console.log(genreData)
  // -----------Top Navbar-------------------
  const handleTabPress = tabIndex => {
    setActiveTab(tabIndex);
  };
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
              width: '100%',
              // borderRadius: 30,
              justifyContent: 'space-around',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
              padding: 0,
              // borderWidth: 1,
              // borderColor: '#FFF',
            }}>
            <TouchableOpacity
              onPress={() => {
                setMovieData(popular);
                handleScrollToTop();
                handleTabPress(0);
              }}>
              <Text
                style={[styles.navTab, activeTab === 0 && styles.activeTab]}>
                Popular
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                topRatedMovies();
                handleScrollToTop();
              }}>
              <Text
                style={[styles.navTab, activeTab === 1 && styles.activeTab]}>
                Top Rated
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                upcomingMovies();
                handleScrollToTop();
              }}>
              <Text
                style={[styles.navTab, activeTab === 2 && styles.activeTab]}>
                Upcoming
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                nowPlaying();
                handleScrollToTop();
              }}>
              <Text
                style={[styles.navTab, activeTab === 3 && styles.activeTab]}>
                Now Playing
              </Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </View>
    );
  };
  // ---------------Bottom More Movies bar-------------------
  const NavbarBottom = ({onPress}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          borderRadius: 50,
          overflow: 'hidden',
          // flex: 1,
          width: '45%',
          backgroundColor: 'transparent',
          position: 'absolute',
          zIndex: 1,
          bottom: 40,
          alignItems: 'center',
          justifyContent: 'center',
          left: 120,
        }}>
        <BlurView
          blurType="light"
          blurAmount={1}
          blurRadius={5}
          style={[
            {
              width: '100%',
              height: 50,
              backgroundColor: 'rgba(37,42,54,0.25)',
            },
          ]}>
          <View
            style={{
              // bottom: 30,
              height: 50,
              // zIndex: 1,
              width: '100%',
              // borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'row',
              padding: 0,
              // marginHorizontal:20,
              // borderWidth: 1,
              // borderColor: '#FFF',
            }}>
            <Ionicons
              size={25}
              name={'sync'}
              color={'#FFF'}
              style={[{marginRight: 10}, activeTab === 5 && styles.activeTab]}
            />
            <Text style={[styles.navTab, activeTab === 5 && styles.activeTab]}>
              More Movies
            </Text>
          </View>
        </BlurView>
      </TouchableOpacity>
    );
  };
  
  //   ----------------------returning Main View---------------
  return (
    
    <View style={{backgroundColor: '#151618', flex: 1}}>
      {loading? <Loader/> : null}
      {/* --------------------Search Movies here----------------- */}
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
              style={[
                {
                  height: 20,
                  borderColor: 'rgba(37,42,54,0.25)',
                  borderWidth: 1,
                  width: 300,
                  color: '#FFF',
                  paddingLeft: 20,
                },
              ]}
              onChangeText={handleSearch}
              value={context.searchQuery}
              placeholder="Search Movie Here"
              placeholderTextColor={placeholderColor}
              onSubmitEditing={searchMovie}
            />
          </BlurView>
        </View>
        <TouchableOpacity onPress={searchMovie}>
          <Ionicons
            size={30}
            name={'search'}
            color={'#FFF'}
            style={[{bottom: 10}]}
          />
        </TouchableOpacity>
      </View>
      {/* --------------------Top NavBar------------------ */}

      <NavbarTop />

      {/* --------------------Bottom NavBar------------------ */}

      <NavbarBottom onPress={loadMore} />
      {movieData == null ? (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            marginHorizontal: 20,
          }}>
          <Text style={{fontSize: 20, color: 'gray'}}>
            Sorry , We Can't Load Movies. Kindly , Check Your Internet
            Connection.
          </Text>
        </View>
      ) : (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}>
          <FlatList
            ref={flatListRef}
            scrollEnabled={true}
            horizontal={false}
            numColumns={3}
            data={movieData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginLeft: 25,
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
  navTab: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFF',
    // marginLeft: 25,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    borderRadius: 40,
  },
  activeTab: {
    color: '#FFD645',
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
