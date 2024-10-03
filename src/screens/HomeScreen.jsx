import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import MiniHeader from '../components/MiniHeader';
import ImageCard from '../components/ImageCard';
import AllProducts from '../components/AllProducts';
import {useQuery} from '@tanstack/react-query';
import {getAllProducts} from '../api/AllProductApi';

function HomeScreen() {
  const categories = [
    {id: 1, title: 'Clothes'},
    {id: 2, title: 'Men'},
    {id: 3, title: 'Women'},
    {id: 4, title: 'Kids'},
    {id: 5, title: 'Shouses'},
    {id: 6, title: 'Bags'},
    {id: 7, title: 'Fashions'},
  ];

  const flashSale = [
    {
      id: 1,
      title: 'Shoes',
      price: 100.0,
      image: require('../assets/images/nike.jpg'),
    },
    {
      id: 2,
      title: 'T-Shirt',
      price: 200.0,
      image: require('../assets/images/tshirt.jpg'),
    },
    {
      id: 3,
      title: 'Back Pack',
      price: 300.0,
      image: require('../assets/images/bag.jpg'),
    },
  ];
  // const allProducts = [
  //   {
  //     id: 1,
  //     title: 'Nike Air Relentless 4 Mens Running Shoes ',
  //     price: 100.0,
  //     image: require('../assets/images/main_banner.jpg'),
  //     sizes: ['8', '9', '10', '11'],
  //     stockStatus: 'In Stock',
  //     description: 'lorem ipsum dolor sit amet consectetur adipisicing elit',
  //     color: 'black',
  //   },
  //   {
  //     id: 2,
  //     title: 'PUMA Future Disc Lite Op V2',
  //     price: 200.0,
  //     image: require('../assets/images/main_banner.jpg'),
  //     sizes: ['8', '9', '10', '11'],
  //     stockStatus: 'In Stock',
  //     description: 'lorem ipsum dolor sit amet consectetur adipisicing elit',
  //     color: 'blue',
  //   },
  //   {
  //     id: 3,
  //     title: 'UMA Soleil v2',
  //     price: 300.0,
  //     image: require('../assets/images/main_banner.jpg'),
  //     sizes: ['8', '9', '10', '11'],
  //     stockStatus: 'In Stock',
  //     description: 'lorem ipsum dolor sit amet consectetur adipisicing elit',
  //     color: 'Green',
  //   },
  //   {
  //     id: 4,
  //     title: 'UMA Soleil v2',
  //     price: 300.0,
  //     image: require('../assets/images/main_banner.jpg'),
  //     sizes: ['8', '9', '10', '11'],
  //     stockStatus: 'In Stock',
  //     description: 'lorem ipsum dolor sit amet consectetur adipisicing elit',
  //     color: 'Green',
  //   },
  //   {
  //     id: 5,
  //     title: 'UMA Soleil v2',
  //     price: 300.0,
  //     image: require('../assets/images/main_banner.jpg'),
  //     sizes: ['8', '9', '10', '11'],
  //     stockStatus: 'In Stock',
  //     description: 'lorem ipsum dolor sit amet consectetur adipisicing elit',
  //     color: 'Green',
  //   },
  // ];

  // const [activeCategory, setActiveCategory] = useState('Clothes');

  //get all products
  const {isLoading: isAllProductLoading, data: allProducts} = useQuery({
    queryKey: ['getAllProducts'],
    queryFn: getAllProducts,
  });

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="light-content" />
      <Header />
      <View className="w-[100%] h-[250px] p-4 mt-2 relative">
        <Image
          source={require('../assets/images/main_banner.jpg')}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            borderRadius: 10,
          }}
        />

        <View className="absolute top-10 left-10">
          <Text
            className="text-2xl text-white"
            style={{fontFamily: 'Poppins-SemiBold'}}>
            Discounts
          </Text>
          <TouchableOpacity className="flex w-[100px] h-[40px] bg-black items-center justify-center rounded-lg top-[100]">
            <Text
              className="text-lg text-white "
              style={{fontFamily: 'Poppins-Bold', fontSize: 13}}>
              See more
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <View className="mx-4 my-4 flex-row">
        <CategoriesCard
          categories={categories}
          activeCategory={activeCategory}
        />
      </View> */}

      <View>
        <MiniHeader label="Flash Sale" />
        <View className="mx-4">
          <ImageCard flashSale={flashSale} />
        </View>
      </View>
      <View>
        <MiniHeader label="All Products" />
        <ScrollView style={{height: 300}}>
          <AllProducts products={allProducts} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
