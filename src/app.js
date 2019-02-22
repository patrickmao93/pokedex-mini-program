import "@tarojs/async-await";
import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";

import Index from "./pages/index";
import "./app.scss";
import dva from "./dva";
import models from "./models";

const dvaApp = dva.createApp({
  initialState: {},
  models: models
});
const store = dvaApp.getStore();

class App extends Component {
  config = {
    pages: [
      "pages/index/index",
      "pages/pokemon/pokemon",
      "pages/search/search"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#E61D23",
      navigationBarTitleText: "Pokedex",
      navigationBarTextStyle: "white",
      enablePullDownRefresh: true
    }
    // tabBar: {
    //   color: "#626567",
    //   selectedColor: "#2A8CE5",
    //   backgroundColor: "#FBFBFB",
    //   borderStyle: "white",
    //   list: [
    //     {
    //       pagePath: "pages/index/index",
    //       text: "首页",
    //       iconPath: "./asset/images/index.png",
    //       selectedIconPath: "./asset/images/index_focus.png"
    //     }
    //   ]
    // }
  };

  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentCatchError() {}

  componentDidCatchError() {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App />, document.getElementById("app"));
