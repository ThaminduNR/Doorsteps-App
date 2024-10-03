import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

const CategoriesCard = ({categories, activeCategory}) => {
  console.log('categories', categories);

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="space-x-2"
        contentContainerStyle={{paddingHorizontal: 16}}>
        {categories?.map((category, index) => {
          let isActive = category.title === activeCategory;
          let activeButtonClass = isActive ? 'bg-[#485460]' : 'bg-gray-200 ';
          let activeTextClass = isActive ? 'text-white' : 'text-white';

          return (
            <TouchableOpacity
              key={index}
              className="flex items-center space-y-1">
              <View className={'rounded-full py-2 px-4 ' + activeButtonClass}>
                <Text className={'capitalize' + activeTextClass}>
                  {category.title}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoriesCard;
