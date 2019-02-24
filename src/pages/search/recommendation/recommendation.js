import Taro from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import Pill from "../../../components/pill/Pill";

import "./recommendation.scss";

class Recommendation extends Taro.Component {
  render() {
    return (
      <View className='recommendation'>
        <View className='header'>
          <Text>POPULAR</Text>
        </View>
        <View className='content'>
          <Pill color='black'>Mewtwo</Pill>
          <Pill color='black'>Mewtwo</Pill>
          <Pill color='black'>Mewtwo</Pill>
        </View>
      </View>
    );
  }
}
export default Recommendation;
