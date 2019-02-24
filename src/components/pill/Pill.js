import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import "./Pill.scss";

class Pill extends Taro.Component {
  render() {
    const { onTap } = this.props;
    return (
      <View
        className='pill'
        style={{ background: this.props.color }}
        onClick={onTap}
      >
        <Text className='pill-text'>{this.props.children}</Text>
      </View>
    );
  }
}

export default Pill;
