import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Search from 'react-native-vector-icons/FontAwesome5';

const Header = () => {
  return (
    <View className="flex-row justify-between items-center mx-4 mt-4 ">
      <View>
        <Text
          className="text-2xl text-black dark:text-white uppercase"
          style={{fontFamily: 'Poppins-SemiBold'}}>
          Discover
        </Text>
      </View>
      <View className="flex-row space-x-3 rounded-full justify-center items-center">
        <TouchableOpacity
          className=" dark:text-white rounded-full p-2 "
          onPress={() => navigation.navigate('Search')}>
          <Search size={20} color={'black'} name="search" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
