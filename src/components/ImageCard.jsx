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
              width: 110,
              height: 140,
              borderRadius: 10,
              padding: 8,
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            }}>
            <View>
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
