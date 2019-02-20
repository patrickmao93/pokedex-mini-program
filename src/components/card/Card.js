import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";

class Card extends Component {
  onTap = () => {
    Taro.navigateTo({
      url: `/pages/pokemon/pokemon?id=${this.props.entryNumber}`
    });
  };
  render() {
    const { name, entryNumber } = this.props;
    return (
      <View className='card' onClick={this.onTap}>
        <Image
          className='sprite'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${entryNumber}.png`}
          alt={name}
        />
        <View className='name'>
          <Text>{name}</Text>
        </View>
      </View>
    );
  }
}

export default Card;
