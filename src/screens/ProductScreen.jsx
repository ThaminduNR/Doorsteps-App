import {View, Text, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import InnerHeader from '../components/InnerHeader';
import {useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/cartSlice';

const ProductScreen = () => {
  const {params: item} = useRoute();
  console.log('Product Screens item', item);

  const dispatch = useDispatch();

  const addtoCartItems = () => {
    dispatch(addToCart(item));
    console.log('Add to Cart Items', item);
  };
  return (
    <SafeAreaView className="flex-1 justify-between bg-white">
      <InnerHeader label="Product Details" iconName="heart-sharp" />
      <View className=" mx-4 flex-2">
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
          <View className="flex-row justify-between mt-2">
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
          <View>
            <Text
              className="text-black"
              style={{fontFamily: 'Poppins-Regular'}}>
              Available Size
            </Text>
            <View className="flex-row mt-1 ">
              {item?.item?.sizes.map((size, index) => (
                <View className="w-[30] h-[30] rounded-full bg-slate-400 items-center justify-center mx-1">
                  <Text>{size}</Text>
                </View>
              ))}
            </View>
          </View>
          <View className="mt-1">
            <Text
              className="text-black"
              style={{fontFamily: 'Poppins-Regular'}}>
              Colors
            </Text>
            <View className="flex-row mt-1">
              <View
                className="w-[20] h-[20] rounded-full items-center justify-center mx-1"
                style={{backgroundColor: item?.item?.colour}}></View>
            </View>
          </View>
        </View>
      </View>
      <View className=" mx-4 flex-1 justify-between ">
        <View className="w-[100%] h-auto flex-1 ">
          <Text
            className="  text-black"
            style={{fontFamily: 'Poppins-Italic', fontSize: 12}}>
            {item?.item?.description}
          </Text>
        </View>
        <View className="flex-row  flex-1 justify-between top-4">
          <TouchableOpacity className="w-[85%] h-[55] bg-black rounded-3xl items-center justify-center">
            <Text
              className="text-white text-lg"
              style={{fontFamily: 'Poppins-Bold'}}>
              Buy Now
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="rounded-lg bg-white h-[55] w-[13%] items-center justify-center shadow-xl"
            onPress={addtoCartItems}>
            <Icon size={35} color={'black'} name="cart-outline" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
