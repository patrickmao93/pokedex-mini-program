import Taro from "@tarojs/taro";

import request from "../utils/request";

export default {
  namespace: "pokemon",
  state: {
    id: 0,
    name: "",
    types: [],
    sprites: {}
  },
  reducers: {
    save(state, { payload }) {
      const types = payload.types.map(type => type.type.name);
      const pokemon = {
        id: payload.id,
        name: payload.name,
        types
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
