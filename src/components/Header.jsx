import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Search from 'react-native-vector-icons/Ionicons';
import Cart from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-row justify-between items-center mx-4 mt-4">
      <View>
        <Text
          className="text-2xl text-black dark:text-white"
          style={{fontFamily: 'Poppins-SemiBold'}}>
          Discover
        </Text>
        <Text
          className="mt-[-3] text-black"
          style={{fontFamily: 'Poppins-Regular', fontSize: 13}}>
          Search for anything you desire
        </Text>
      </View>
      <View className="flex-row space-x-3 rounded-full justify-center items-center">
        <TouchableOpacity
          onPress={() => navigation.navigate('Search')}
          className=" p-1 rounded-md">
          <Search size={25} color={'black'} name="search-outline" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Cart')}
          className=" p-1 rounded-md">
          <Cart size={25} color={'black'} name="notifications-outline" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
