import Taro from "@tarojs/taro";
import { View, Icon, Text } from "@tarojs/components";

import "./searchHistory.scss";

class SearchHistory extends Taro.Component {
  render() {
    const { items, onTapItem, onDeleteItem, onClear } = this.props;
    return (
      <View className='search-history'>
        <View className='header'>
          <Text>HISTORY</Text>
          <View className='clear' onClick={onClear}>
            Clear
          </View>
        </View>
        <View className='content'>
          {items.map((item, index) => {
            return (
              <View
                key={index}
                className='item'
                onClick={() => onTapItem(item)}
              >
                <View className='keyword'>{item}</View>
                <View className='delete'>
                  <Icon
                    type='clear'
                    onClick={e => {
                      e.stopPropagation();
                      onDeleteItem(index);
                    }}
                  />
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
