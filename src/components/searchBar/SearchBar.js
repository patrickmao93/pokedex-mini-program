import Taro from "@tarojs/taro";
import { View, Input, Icon } from "@tarojs/components";

import "./SearchBar.scss";

class SearchBar extends Taro.Component {
  render() {
    let {
      placeholder,
      color,
      focus,
      disabled,
      onInput,
      value,
      onConfirm
    } = this.props;
    if (!color) {
      color = "white";
    }
    return (
      <View className='search-bar'>
        <Icon className='icon' size='20' type='search' color={color} />
        <Input
          className='search-box'
          placeholder={placeholder}
          focus={focus}
          disabled={disabled}
          onInput={onInput}
          value={value}
          onConfirm={onConfirm}
        />
      </View>
    );
  }
}

export default SearchBar;
