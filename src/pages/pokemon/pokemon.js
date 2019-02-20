import Taro from "@tarojs/taro";

import { View } from "@tarojs/components";

class Pokemon extends Taro.Component {
  config = {
    navigationBarTitleText: "pokemon",
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark"
  };
  componentDidMount() {}

  render() {
    return <View>{this.$router.params.id}</View>;
  }
}

export default Pokemon;
