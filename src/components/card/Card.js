import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";

class Card extends Component {
 
  render() {
    const { name, entryNumber } = this.props;
    return (
      <View className='card'>
        <Image
          className='sprite'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${entryNumber}.png`}
          alt={name}
        />
        <View className='name'>
          <Text>#{entryNumber + " " + name}</Text>
        </View>
      </View>
    );
  }
}

export default Card;
