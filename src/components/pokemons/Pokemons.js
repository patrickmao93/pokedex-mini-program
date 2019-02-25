import Taro from "@tarojs/taro";
import { View } from "@tarojs/components";

import Card from "./../card/Card";
import { capitalizeFirst } from "../../utils/formatters";

import "./Pokemons.scss";

class Pokemons extends Taro.Component {
  render() {
    const { pokemons } = this.props;
    return (
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
    );
  }
}
export default Pokemons;
