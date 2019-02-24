import Taro from "@tarojs/taro";
import { View, Block } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import SearchBar from "../../components/searchBar/SearchBar";
import Recommendation from "./recommendation/recommendation";
import SearchHistory from "./searchHistory/searchHistory";
import { searchByName, searchByType } from "./../../utils/search";

import "./search.scss";

class Search extends Taro.Component {
  config = {
    navigationBarTitleText: "Search",
    enablePullDownRefresh: false,
    backgroundTextStyle: "dark"
  };

  state = { keyword: "", showResult: false, history: { items: [] } };

  handleInput = e => {
    this.setState({ keyword: e.target.value });
  };

  handleConfirm = () => {
    const keyword = this.state.keyword.trim().toLowerCase();
    const historyItems = this.state.history.items.slice(0);

    if (!keyword) {
      return;
    }

    const index = historyItems.indexOf(keyword);
    if (index !== -1) {
      historyItems.splice(index, 1);
    }
    historyItems.unshift(keyword);

    const newHistory = {
      items: historyItems
    };
    this.setState({ history: newHistory });

    Taro.setStorage({ key: "searchHistory", data: this.state.history });
    //execute search
  };

  componentDidMount() {
    Taro.getStorageInfo()
      .then(res => res.keys.includes("searchHistory"))
      .then(keyExists => {
        if (!keyExists) {
          return;
        }
        Taro.getStorage({ key: "searchHistory" }).then(res =>
          this.setState({ history: res.data })
        );
      });
  }

  render() {
    const searchResult = <View className='search-result' />;

    const searchHelpers = (
      <Block>
        <View className='recommendation'>
          <Recommendation />
        </View>

        <View className='history'>
          <SearchHistory items={this.state.history.items} />
        </View>
      </Block>
    );

    return (
      <View className='search'>
        <View className='search-bar'>
          <SearchBar
            placeholder='Enter a pokemon name...'
            focus
            value={this.state.keyword}
            onInput={this.handleInput}
            onConfirm={this.handleConfirm}
          />
        </View>
        {this.state.showResult ? searchResult : searchHelpers}
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
