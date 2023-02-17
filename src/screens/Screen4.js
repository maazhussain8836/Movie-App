import {View, Text, TouchableOpacity, Button,TextInput } from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const options = {
  url: 'https://mdblist.p.rapidapi.com/',
  params: {tm: '107'},
  headers: {
    'X-RapidAPI-Key': '8d7861b8camsh51c074cb93ae080p1ae89fjsn1569078f9ef1',
    'X-RapidAPI-Host': 'mdblist.p.rapidapi.com',
  },
};
const Screen4 = () => {
  const [data, setData] = useState('Movie Name');
  const [searchQuery, setSearchQuery] = useState(searchQuery);

  const handleSearch = text => {
    setSearchQuery(text);
    // handle search logic here
  };

  const searchMovie = () => {
    axios
      .get('https://mdblist.p.rapidapi.com/', {
        // params: {tm: searchQuery},
        params: {
            s: searchQuery,         // s search by title
            // tm: searchQuery      // tm search by movie id    
        },
        headers: {
          'X-RapidAPI-Key':
            '8d7861b8camsh51c074cb93ae080p1ae89fjsn1569078f9ef1',
          'X-RapidAPI-Host': 'mdblist.p.rapidapi.com',
        },
      })
      .then(res => {
        // let arr=[];
        let data=res?.data?.search;
        data.map((item)=>{
          console.log(item?.title)
        })
        setData(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{marginBottom:20}}>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1,width:300}}
          onChangeText={handleSearch}
          value={searchQuery}
          placeholder="Search Movie Here"
        />
      </View>
      <Button title="Search" color={'#000'} onPress={searchMovie} />
      {/* <Text style={{fontWeight: 'bold', color: '#000', fontSize: 20}}>
        {data?.data?.title}
      </Text> */}
    </View>
  );
};

export default Screen4;
