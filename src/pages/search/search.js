import Taro from "@tarojs/taro";
import { View, Block } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import SearchBar from "../../components/searchBar/SearchBar";
import Recommendation from "./recommendation/recommendation";
import SearchHistory from "./searchHistory/searchHistory";
import SearchResult from "./searchResult/searchResult";
import { searchByName } from "./../../utils/search";

import "./search.scss";

class Search extends Taro.Component {
  config = {
    navigationBarTitleText: "Search",
    enablePullDownRefresh: false,
    backgroundTextStyle: "dark"
  };

  state = {
    keyword: "",
    showResult: false,
    searchResult: [],
    history: { items: [] }
  };

  handleInput = e => {
    if (!e.target.value) {
      this.setState({ showResult: false });
    }
    this.setState({ keyword: e.target.value });
  };

  handleFocus = () => {
    this.setState({ showResult: false });
  };

  handleSearch = () => {
    const keyword = this.state.keyword.trim().toLowerCase();
    const historyItems = this.state.history.items.slice(0);

    if (!keyword) {
      return;
    }

    const index = historyItems.indexOf(keyword);
    if (index !== -1) {
      historyItems.splice(index, 1);
    } else if (historyItems.length >= 10) {
      historyItems.pop();
    }
    historyItems.unshift(keyword);

    const newHistory = {
      items: historyItems
    };
    this.setState({ history: newHistory });
    Taro.setStorage({ key: "searchHistory", data: this.state.history });
    //execute search
    const searchByNameResult = searchByName(this.props.pokemons, keyword);
    console.log(searchByNameResult);
    this.setState({ searchResult: searchByNameResult, showResult: true });
  };

  handleItemTap = item => {
    this.setState({ keyword: item }, this.handleSearch);
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
    const renderResult = <SearchResult list={this.state.searchResult} />;

    const renderHelpers = (
      <Block>
        <View className='recommendation'>
          <Recommendation onTapItem={this.handleItemTap} />
        </View>

        <View className='history'>
          <SearchHistory
            items={this.state.history.items}
            onTapItem={this.handleItemTap}
          />
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
            onConfirm={this.handleSearch}
            onFocus={this.handleFocus}
          />
        </View>
        {this.state.showResult ? renderResult : renderHelpers}
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
