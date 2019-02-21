import Taro from "@tarojs/taro";

import { View, Text } from "@tarojs/components";

class Pill extends Taro.Component {
  render() {
    return (
      <View className='pill' style={{ background: this.props.color }}>
        <Text className='pill-text'>{this.props.children}</Text>
      </View>
    );
  }
}

export default Pill;
