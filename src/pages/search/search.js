import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import SearchBar from "../../components/searchBar/SearchBar";

class Search extends Taro.Component {
  config = {
    navigationBarTitleText: "Search",
    enablePullDownRefresh: false,
    backgroundTextStyle: "dark"
  };

  state = { keyword: "" };

  handleChange = e => {
    this.setState({ keyword: e.target.value });
  };

  handleConfirm = () => {
    const keyword = this.state.keyword.trim().toLowerCase();
    if (!keyword) {
      return;
    }
    //execute search
  };

  render() {
    // const searchResult = (
    //   <View className='search-result'>

    //   </View>
    // )
    return (
      <View className='search'>
        <View className='search-bar'>
          <SearchBar
            placeholder='Enter a pokemon name...'
            focus
            value={this.state.keyword}
            onChange={this.handleChange}
            onConfirm={this.handleConfirm}
          />
        </View>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    pokemons: state.pokemons.list
  };
};

export default connect(mapStateToProps)(Search);
