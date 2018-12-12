import apisauce from 'apisauce';

const api = apisauce.create({
    baseURL: 'http://localhost:3000/api/v1'
});

export default api;