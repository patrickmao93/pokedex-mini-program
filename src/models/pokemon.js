import Taro from "@tarojs/taro";

import request from "../utils/request";

export default {
  namespace: "pokemon",
  state: {
    id: 0,
    name: "",
    types: [],
    sprites: {},
    stats: []
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
      return { ...state, ...pokemon };
    }
  },
  effects: {
    *load({ payload }, { call, put }) {
      const data = yield call(request, {
        url: `https://pokeapi.co/api/v2/pokemon/${payload.id}`
      });
      yield put({ type: "save", payload: data });
    }
  }
};
