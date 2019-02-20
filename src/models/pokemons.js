import Taro from "@tarojs/taro";

import request from "../utils/request";

export default {
  namespace: "pokemons",
  state: { list: [] },
  reducers: {
    save(state, action) {
      const list = action.payload;
      return { ...state, list };
    }
  },
  effects: {
    *load(action, { call, put }) {
      const data = yield call(request, {
        url: "https://pokeapi.co/api/v2/pokedex/2"
      });
      yield put({ type: "save", payload: data.pokemon_entries });
    }
  }
};
