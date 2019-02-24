import Taro from "@tarojs/taro";
import { View, Icon } from "@tarojs/components";

import "./searchHistory.scss";

class SearchHistory extends Taro.Component {
  render() {
    const { items } = this.props;
    return (
      <View className='search-history'>
        <View className='header'>HISTORY</View>
        <View className='content'>
          {items.map((item, index) => {
            return (
              <View key={index} className='item'>
                <View className='keyword'>{item}</View>
                <View className='delete'>
                  <Icon type='clear' />
                </View>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
export default SearchHistory;
