import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const InnerHeader = ({label, iconName}) => {
  const navigation = useNavigation();
  console.log('Icon name', iconName);

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View className="flex-row justify-between items-center mx-4 mt-4">
      <View>
        <TouchableOpacity
          className="rounded-md border border-gray-300 flex items-center justify-center"
          onPress={goBack}>
          <Icon size={25} color={'black'} name="chevron-back-outline" />
        </TouchableOpacity>
      </View>
      <View>
        <Text
          className="text-xl text-black dark:text-white"
          style={{fontFamily: 'Poppins-SemiBold'}}>
          {label}
        </Text>
      </View>
      <View className="flex-row space-x-3 rounded-full justify-center items-center">
        <TouchableOpacity className=" p-1 rounded-md">
          <Icon size={25} color={'black'} name={iconName} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InnerHeader;
