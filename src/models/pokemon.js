import Taro from "@tarojs/taro";

import request from "../utils/request";

export default {
  namespace: "pokemon",
  state: {
    id: 0,
    name: "",
    types: [],
    sprites: {},
    stats: [],
    loading: true
  },
  reducers: {
    save(state, { payload }) {
      const types = payload.types.map(type => type.type.name).reverse();
      const stats = payload.stats.map(stat => ({
        name: stat.stat.name,
        value: stat.base_stat
      }));
      const pokemon = {
        id: payload.id,
        name: payload.name,
        types,
        stats
      };
      Taro.hideLoading();
      return { ...state, ...pokemon, loading: false };
    },
    loading(state, { payload }) {
      return { ...state, loading: payload.loading };
    }
  },
  effects: {
    *load({ payload }, { call, put }) {
      Taro.showLoading({
        title: "loading"
      });
      yield put({ type: "loading", payload: { loading: true } });
      const data = yield call(request, {
        url: `https://pokeapi.co/api/v2/pokemon/${payload.id}`
      });
      yield put({ type: "save", payload: data });
    }
  }
};
