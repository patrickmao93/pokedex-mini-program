import Taro from "@tarojs/taro";
import { View, Image } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import { typeToHexColor } from "../../utils/formatters";

@connect(state => ({
  pokemon: state.pokemon
}))
class Pokemon extends Taro.Component {
  config = {
    navigationBarTitleText: "Detail",
    enablePullDownRefresh: true,
    backgroundTextStyle: "dark"
  };

  componentDidMount() {
    this.props.dispatch({
      type: "pokemon/load",
      payload: { id: this.$router.params.id }
    });
  }

  render() {
    const { pokemon } = this.props;
    const background = typeToHexColor(pokemon.types[0]);
    return (
      <View className='pokemon' style={{ background }}>
        <Image
          className='sprite'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.id
          }.png`}
        />
      </View>
    );
  }
}

export default Pokemon;
