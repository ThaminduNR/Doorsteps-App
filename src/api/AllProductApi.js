import axios from 'axios';

const ProductApi =
  'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json';

const productApiCall = async (endpoints, params) => {
  const options = {
    method: 'GET',
    url: endpoints,
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('Error fetching data', error);
    return {};
  }
};

export const getAllProducts = async () => {
  const result = await productApiCall(ProductApi);
  return result;
};
