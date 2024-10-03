import {View, Text} from 'react-native';
import React from 'react';

const MiniHeader = ({label}) => {
  return (
    <View className="px-4 my-4 justify-between flex-row items-center">
      <Text
        className="text-black text-lg"
        style={{
          fontFamily: 'Poppins-SemiBold',
        }}>
        {label}
      </Text>
      <Text className="text-black " style={{fontFamily: 'Poppins-Regular'}}>
        View All
      </Text>
    </View>
  );
};

export default MiniHeader;
