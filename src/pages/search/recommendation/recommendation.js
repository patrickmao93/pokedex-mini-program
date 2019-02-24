import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import Pill from "../../../components/pill/Pill";

import "./recommendation.scss";

const recommendations = ["Mewtwo", "Dragonite", "Fire"];

class Recommendation extends Taro.Component {
  render() {
    const { onTapItem } = this.props;
    return (
      <View className='recommendation'>
        <View className='header'>
          <Text>POPULAR</Text>
        </View>
        <View className='content'>
          {recommendations.map(item => (
            <Pill key={item} color='black' onTap={() => onTapItem(item)}>
              {item}
            </Pill>
          ))}
        </View>
      </View>
    );
  }
}
export default Recommendation;
