import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer Xgn2CRaYfm7jjWfdHFbH4yBrqdfsyBlg9dEF2udwh3LSJK1eJFml4MUUoCj6HxYGgx7FNdsg0iJofCTGznFZj9bhKSgfh0Zz7QWfk421Hzj3OmEEb6iGqyf4wSIKXnYx'
    }
});