import Axios from 'axios';

export const getProductList = async () => {
    return await
        Axios.get('https://5ddf62394a658b0014c4890f.mockapi.io/api/products')
        .then(response => {
            console.log(response.data);
            return response;
        })
        .catch(error => {
            console.log(error);
            return Promise.reject(error);
        })
    ;
}