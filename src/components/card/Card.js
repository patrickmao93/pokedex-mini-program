import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";

class Card extends Component {
  render() {
    const { entryNumber, name } = this.props;
    return (
      <View>
        <Text>{entryNumber}</Text>
        <Text>{name}</Text>
      </View>
    );
  }
}

export default Card;
