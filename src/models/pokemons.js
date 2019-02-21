import Taro from "@tarojs/taro";

import request from "../utils/request";

export default {
  namespace: "pokemons",
  state: { list: [], loading: true },
  reducers: {
    save(state, action) {
      const list = action.payload;
      Taro.hideLoading();
      return { ...state, list, loading: false };
    }
  },
  effects: {
    *load(action, { call, put }) {
      Taro.showLoading({
        title: "loading"
      });
      const data = yield call(request, {
        url: "https://pokeapi.co/api/v2/pokedex/2"
      });
      yield put({ type: "save", payload: data.pokemon_entries });
    }
  }
};
