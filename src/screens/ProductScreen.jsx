import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import InnerHeader from '../components/InnerHeader';

const ProductScreen = () => {
  return (
    <SafeAreaView>
      <InnerHeader label="Product Details" />
      <View className="mx-4 mt-4">
        <View className="w-[100%] h-[400] bg-slate-300 rounded-md"></View>
      </View>
    </SafeAreaView>
  );
};

export default ProductScreen;
