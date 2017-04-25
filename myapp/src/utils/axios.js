/**
 * Created by baolicheng on 2017/4/12.
 */
import axios from 'axios';
import qs from 'qs';

const request = ( url, options ) => {
  if (options.method === 'post') {
    return axios({
      method: 'post',
      url: url,
      headers:options.headers || {},
      data:qs.stringify(options.data),
    }).then( function (response) {
      console.log(response);
    }).catch( function (error) {
      return error;
    });
  }
};

export default request;
