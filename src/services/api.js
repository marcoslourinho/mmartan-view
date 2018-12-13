import apisauce from 'apisauce';

const api = apisauce.create({
    baseURL: 'http://mmartan-api.herokuapp.com/api/v1'
});

export default api;
