import Taro from "@tarojs/taro";

import { View } from "@tarojs/components";

class Pokemon extends Taro.Component {
  config = {
    navigationBarTitleText: "pokemon",
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark"
  };
  render() {
    return <View>Pokemon</View>;
  }
}

export default Pokemon;
