import Taro, { Component } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { View } from "@tarojs/components";

import { capitalizeFirst } from "./../../utils/formatters";
import Card from "./../../components/card/Card";
import SearchBar from "./../../components/searchBar/SearchBar";

import "./index.scss";

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons.list
  };
};

@connect(mapStateToProps)
class Index extends Component {
  config = {
    navigationBarTitleText: "Pokedex!",
    enablePullDownRefresh: false,
    backgroundTextStyle: "dark"
  };

  onTapCard = entry_number => {
    Taro.navigateTo({
      url: `/pages/pokemon/pokemon?id=${entry_number}`
    });
  };

  onTapSearch = () => {
    Taro.navigateTo({
      url: `/pages/search/search`
    });
  };

  componentDidMount() {
    this.props.dispatch({ type: "pokemons/load" });
  }

  render() {
    const { pokemons } = this.props;
    return (
      <View className='app'>
        <View className='search' onClick={this.onTapSearch}>
          <SearchBar
            className='search-bar'
            placeholder='Enter a pokemon name...'
            disabled
          />
        </View>
        <View className='pokemons'>
          {pokemons.map(pokemon => {
            const { entry_number, pokemon_species } = pokemon;
            const name = capitalizeFirst(pokemon_species.name);
            return (
              <View
                key={name}
                className='card'
                onClick={() => this.onTapCard(entry_number)}
              >
                <Card entryNumber={entry_number} name={name} />
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}

export default Index;
