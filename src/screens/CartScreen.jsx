import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import InnerHeader from '../components/InnerHeader';
import Icon from 'react-native-vector-icons/Ionicons';

const CartScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <InnerHeader label="My Cart" iconName="ellipsis-horizontal-sharp" />
      <View style={{flex: 4, marginHorizontal: 16, marginTop: 16}}>
        <View className="flex-row h-[130] gap-x-3">
          <Image
            source={require('../assets/images/main_banner.jpg')}
            style={{
              width: '30%',
              height: '100%',
              resizeMode: 'cover',
              borderRadius: 10,
            }}
          />

          <View className="flex-1">
            <View className=" flex-3">
              <Text
                className="text-lg text-black"
                style={{fontFamily: 'Poppins-SemiBold'}}>
                PUMA Soleil v2
              </Text>
              <Text
                className="text-lg text-black"
                style={{fontFamily: 'Poppins-SemiBold'}}>
                $ 24.00
              </Text>
            </View>
            <View className="flex-1 flex-row justify-between items-center">
              <Text style={{fontFamily: 'Poppins-Regular', color: 'black'}}>
                Quantity : 2
              </Text>
              <TouchableOpacity className="p-1 bg-slate-300 rounded-full">
                <Icon size={22} color={'black'} name="trash-outline" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* Button area */}
      <View style={{flex: 1}} className="mx-4">
        <View className="flex-row justify-between items-center">
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: 'black',
              fontSize: 20,
            }}>
            Total
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: 'black',
              fontSize: 20,
            }}>
            $ 48.00
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: 'black',
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15,
            marginTop: 10,
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: 'white',
              fontSize: 20,
            }}>
            Checkout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartScreen;
