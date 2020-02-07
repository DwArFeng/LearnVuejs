import Vue from 'vue'
import App from './App.vue'

import axios from 'axios'

Vue.config.productionTip = false;

new Vue({
  render: function (h) {
    return h(App)
  },
}).$mount('#app');

//1. axios的基本使用。
{
  axios({
    url: 'http://123.207.32.32:8000/home/multidata',
    method: 'get'
  }).then(res => {
    console.log(res);

    //1.1 axios顺序调用的方式，由于axios实现Promise，所以可以使用Promise的编码方式。
    return axios({
      url: 'http://123.207.32.32:8000/home/data',
      // 专门针对get请求的参数拼接。
      params: {
        type: 'sell',
        page: 1
      },
      method: 'get'
    })
  }).then(res => {
    console.log(res);
  });

  axios({
    url: 'http://123.207.32.32:8000/home/data',
    // 专门针对get请求的参数拼接。
    params: {
      type: 'sell',
      page: 1
    },
    method: 'get'
  }).then(res => {
    console.log(res);
  });
}

//2. axios的并发请求。
axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  // 专门针对get请求的参数拼接。
  params: {
    type: 'sell',
    page: 1
  },
  method: 'get'
})]).then(result => {
  console.log(result);
});

//3. axios的默认设置。
axios.defaults.baseURL = 'http://123.207.32.32:8000/';
axios.defaults.timeout = 5000;

axios({
  url: 'home/multidata',
  method: 'get'
}).then(res => {
  console.log(res);
});

//4. 多个axios实例访问不同的baseURL。
// noinspection JSUnusedLocalSymbols
const instance1 = new axios.create({
  baseURL: 'url1',
  timeout: 5000
});
// noinspection JSUnusedLocalSymbols
const instance2 = new axios.create({
  baseURL: 'url2',
  timeout: 5000
});

