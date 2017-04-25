import {
  // fetchPost,
  fetchPosts,
} from '../services/posts';
import axios from '../utils/axios';

export default {
  state: {
    loading: false,
    posts: ['1', '2'],
    postsByKey: {
      1: {
        title: 'Learn dva',
        category: 'dva',
      },

      2: {
        title: 'Learn antd',
        category: 'antd',
      },
    },

  },
  namespace: 'posts',
  reducers: {
    showLoading(state) {
      return {
        ...state,
        loading: true,
      };
    },
    hideLoading(state) {
      return {
        ...state,
        loading: false,
      };
    },
    save(state, { payload: postsByKey }) {
      return {
        ...state,
        postsByKey,
        posts: Object.keys(postsByKey),
      };
    },
  },
  effects: {
    *fetchPosts(action, { call, put }) {
      yield put({ type: 'showLoading' });
      const result = yield call(fetchPosts);
      yield put({
        type: 'save',
        payload: result,
      });
      yield put({ type: 'hideLoading' });

      yield call(axios, 'http://rapapi.org/mockjsdata/17007/getBaiduLink', { method: 'post' });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        if (pathname === '/post') {
          dispatch({ type: 'fetchPosts' });
        }
      });
    },
  },
};
