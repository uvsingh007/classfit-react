import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://v2server.fastplayapp.net/yii2/public/index.php/c'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// instance.interceptors.request...

export default instance; 

