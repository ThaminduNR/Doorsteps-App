import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect} from 'react';
import InnerHeader from '../components/InnerHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

const CartScreen = () => {
  const cartItems = useSelector(state => state.cart.items);
  const renderItem = ({item}) => {
    return (
      <View className="flex-row h-[130] gap-x-3 mb-4 pb-1 border-gray-300 border-b-2">
        <Image
          source={{uri: item.item.mainImage}}
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
              {item.item.name}
            </Text>
            <Text
              className="text-lg text-black"
              style={{fontFamily: 'Poppins-SemiBold'}}>
              {item.item.price.currency} {item.item.price.amount}
            </Text>
          </View>
          <View className="flex-1 flex-row justify-between items-center">
            <Text style={{fontFamily: 'Poppins-Regular', color: 'black'}}>
              Quantity : 1
            </Text>
            <TouchableOpacity className="p-1 bg-slate-300 rounded-full">
              <Icon size={22} color={'black'} name="trash-outline" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1">
      <InnerHeader label="My Cart" iconName="ellipsis-horizontal-sharp" />
      <View style={{flex: 4, marginHorizontal: 16, marginTop: 16}}>
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      {/* Button area */}
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}
        className="mx-4">
        <View className="flex-row justify-between items-center">
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: 'black',
              fontSize: 20,
            }}>
            Total Payment
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: 'black',
              fontSize: 20,
            }}>
            $ 24.00
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
            marginBottom: 20,
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
