import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import Bookmark from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const AllProducts = ({products}) => {
  console.log('products', products);

  const navigation = useNavigation();

  const navigateProductPage = item => {
    navigation.navigate('Product', {item});
  };

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        className="mb-4 mx-4 space-y-1"
        key={index}
        onPress={() => navigateProductPage(item)}>
        <View className="flex-row justify-start w-[100%] shadow-sm">
          <Image
            source={{uri: item.mainImage}}
            style={{
              width: 85,
              height: 85,
              resizeMode: 'cover',
              borderRadius: 6,
            }}
          />
          {/* content */}
          <View className="w-[70%] justify-center space-y-1 pl-4">
            {/* Title */}
            <Text
              className="text-neutral-800 capitalize max-w-[90%]"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              {item?.name}
            </Text>
            {/* price */}
            <Text
              className="text-sm font-mono text-gray-800 "
              style={{fontFamily: 'Poppins-Bold'}}>
              {item.price.currency} {item.price.amount}
            </Text>
          </View>
          <View className="w-[10%] justify-center">
            <TouchableOpacity>
              <Bookmark name="heart-sharp" color={'black'} size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View className="space-y-2 bg-white">
      <FlatList
        nestedScrollEnabled={true}
        scrollEnabled={false}
        data={products?.data}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default AllProducts;
