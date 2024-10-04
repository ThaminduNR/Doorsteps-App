import {Image, Text, View} from 'react-native';

const ImageCard = ({flashSale}) => {
  console.log('flashSale', flashSale); // Debugging purpose

  return (
    <View className="flex-row justify-between">
      {flashSale.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              width: 115,
              height: 160,
              borderRadius: 8,
              backgroundColor: '#E5E5E5',
            }}
            className="shadow-md shadow-gray-500/60">
            <View className="mt-5">
              <Image
                source={item.image}
                style={{
                  width: '100%',
                  height: '85%',
                  resizeMode: 'cover',
                  borderRadius: 10,
                }}
              />
            </View>
            <View style={{marginTop: -5, alignItems: 'center'}}>
              <Text
                style={{fontFamily: 'Poppins-Regular'}}
                className="text-black">
                {item.title}
              </Text>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ImageCard;
