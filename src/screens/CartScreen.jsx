import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import InnerHeader from '../components/InnerHeader';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromCart} from '../redux/cartSlice';

const CartScreen = () => {
  const cartItems = useSelector(state => state.cart.items);
  const [cart, setCart] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setCart(cartItems);
    console.log('Cart Items', cart);
  }, [cartItems, cart]);

  const removeItem = itemId => {
    dispatch(removeFromCart(itemId));
  };

  const totalPrice = cart.reduce((total, item) => {
    return total + (item.price?.amount || 0);
  }, 0);

  const renderItem = ({item}, index) => {
    return (
      <View
        className="flex-row h-[130] gap-x-3 mb-4 pb-1 border-gray-300 border-b-2"
        key={index}>
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
            <TouchableOpacity
              className="p-1 bg-slate-300 rounded-full"
              onPress={() => removeItem(item.item.SKU)}>
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
          data={cart}
          keyExtractor={(item, index) => item.id}
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
            {cart.length > 0
              ? `${cart[0].item.price?.currency} ${totalPrice.toFixed(2)}`
              : 'N/A'}
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
