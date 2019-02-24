import Taro from "@tarojs/taro";
import { View, Image, Progress, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";

import { typeToHexColor, capitalizeFirst } from "../../utils/formatters";
import Pill from "../../components/pill/Pill";

import "./pokemon.scss";

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
    if (pokemon.loading) {
      return <View className='pokemon' />;
    }
    const typeColor = typeToHexColor(pokemon.types[0]);

    const mainInfo = (
      <View className='screen'>
        <View className='name'>
          <View className='name-background' style={{ background: typeColor }} />
          <Text className='name-text'>
            #{pokemon.id + " " + capitalizeFirst(pokemon.name)}
          </Text>
        </View>
        <View className='image-container'>
          <View className='types'>
            {pokemon.types.map(type => (
              <Pill key={type} color={typeToHexColor(type)}>
                {capitalizeFirst(type)}
              </Pill>
            ))}
          </View>
          <Image
            className='sprite'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
              pokemon.id
            }.png`}
          />
        </View>
        <View className='stats'>
          {pokemon.stats.map(stat => (
            <View className='stat-container' key={stat.name}>
              <Text className='stat-name'>{capitalizeFirst(stat.name)}</Text>
              <View className='stat-bar'>
                <Progress
                  percent={stat.value}
                  strokeWidth={2}
                  color={typeColor}
                />
              </View>
            </View>
          ))}
        </View>
      </View>
    );

    return <View className='pokemon'>{mainInfo}</View>;
  }
}

export default Pokemon;
