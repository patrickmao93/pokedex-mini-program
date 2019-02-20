import Taro, { Component } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import { View } from "@tarojs/components";

import { capitalizeFirst } from "./../../utils/formatters";
import Card from "./../../components/card/Card";

const mapStateToProps = state => {
  return {
    pokemons: state.pokemons.list
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
        {pokemons.map(pokemon => {
          const { entry_number, pokemon_species } = pokemon;
          const name = capitalizeFirst(pokemon_species.name);
          return (
            <View key={name} className='card'>
              <Card entryNumber={entry_number} name={name} />
            </View>
          );
        })}
      </View>
    );
  }
}

export default Index;
