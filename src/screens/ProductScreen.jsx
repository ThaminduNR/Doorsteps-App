import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import InnerHeader from '../components/InnerHeader';
import {useRoute} from '@react-navigation/native';

const ProductScreen = () => {
  const {params: item} = useRoute();
  console.log('Product Screens item', item);
  return (
    <SafeAreaView className="flex-1 justify-between bg-white">
      <InnerHeader label="Product Details" />
      <View className=" mx-4">
        <View className="w-[100%] h-[320] bg-slate-200 rounded-md mb-3">
          <Image
            source={{uri: item?.item?.mainImage}}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              borderRadius: 6,
            }}
          />
        </View>
        <View className="w-[100%] h-[250] rounded-md">
          <Text
            className="text-2xl text-black"
            style={{fontFamily: 'Poppins-SemiBold'}}>
            {item?.item?.name}
          </Text>
          <Text
            className="text-2xl text-black mt-2"
            style={{fontFamily: 'Poppins-Bold'}}>
            {item?.item?.price.currency} {item?.item?.price.amount}
          </Text>
          <View className="flex-row justify-between mt-3">
            <Text
              className="text-md text-black "
              style={{fontFamily: 'Poppins-Regular'}}>
              SKU : {item?.item?.SKU}
            </Text>
            <Text
              className="text-md text-black"
              style={{fontFamily: 'Poppins-Regular'}}>
              Stock : {item?.item?.stockStatus}
            </Text>
          </View>
          <View className="mt-2">
            <Text className="text-black">Available Size</Text>
            <View className="flex-row mt-1 ">
              {item?.item?.sizes.map((size, index) => (
                <View className="w-[30] h-[30] rounded-full bg-slate-400 items-center justify-center mx-1">
                  <Text>{size}</Text>
                </View>
              ))}
            </View>
          </View>
          <View className="mt-4">
            <Text className="text-black">Colors</Text>
            <View className="flex-row mt-1">
              <View
                className="w-[20] h-[20] rounded-full items-center justify-center mx-1"
                style={{backgroundColor: item?.item?.colour}}></View>
            </View>
          </View>
        </View>
      </View>
      <View className=" mx-4   mb-4">
        <View className="w-[100%] h-[100] overflow-hidden">
          <Text
            className="  text-black"
            style={{fontFamily: 'Poppins-Italic', fontSize: 12}}>
            {item?.item?.description}
          </Text>
        </View>
        <TouchableOpacity className="w-[85%] h-[55] bg-black rounded-3xl mt-4  items-center justify-center">
          <Text
            className="text-white text-lg"
            style={{fontFamily: 'Poppins-Bold'}}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
