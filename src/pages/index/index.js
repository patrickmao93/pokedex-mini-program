import Taro, { Component } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { View, Image } from "@tarojs/components";

import { capitalizeFirst } from "./../../utils/formatters";
import Card from "./../../components/card/Card";

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons
  };
};

@connect(mapStateToProps)
class Index extends Component {
  config = {
    navigationBarTitleText: "Pokedex!",
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark"
  };

  componentDidMount() {
    this.props.dispatch({ type: "pokemons/load" });
  }

  render() {
    const { pokemons } = this.props;
    return (
      <View className='app'>
        {pokemons.map(pokemon => (
          <Card
            key={pokemon.name}
            entryNumber={pokemon.entry_number}
            name={pokemon.pokemon_species.name}
          />
        ))}
      </View>
    );
  }
}

export default Index;
