import Taro from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";

import { pokemonSpriteUrl } from "./../../../utils/urls";
import { capitalizeFirst } from "./../../../utils/formatters";

import "./searchResult.scss";

class SearchResult extends Taro.Component {
  render() {
    if (!this.props.list.length) {
      return (
        <View className='no-result'>
          <Text>No matching results</Text>
        </View>
      );
    }
    return (
      <View className='search-result'>
        {this.props.list.map(pokemon => (
          <View
            key={pokemon.entry_number}
            className='list-item'
            onClick={() =>
              Taro.navigateTo({
                url: `/pages/pokemon/pokemon?id=${pokemon.entry_number}`
              })
            }
          >
            <Image
              className='sprite'
              src={pokemonSpriteUrl(pokemon.entry_number)}
            />
            <View>
              <View className='info'>
                {capitalizeFirst(pokemon.pokemon_species.name)}
              </View>
            </View>
          </View>
        ))}
      </View>
    );
  }
}
export default SearchResult;
