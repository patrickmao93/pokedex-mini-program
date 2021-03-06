import { removeSpaces } from "./formatters";

export const searchByName = (pokemonList, keyword) => {
  const formattedKeyword = removeSpaces(keyword);
  return pokemonList.filter(pokemon => {
    const formattedName = pokemon.pokemon_species.name.toLowerCase();
    return formattedName.includes(formattedKeyword);
  });
};

export const searchByType = (pokemonList, keyword) => {
  const formattedKeyword = removeSpaces(keyword);
  return pokemonList.filter(pokemon => {
    return pokemon.types.some(type => type.includes(formattedKeyword));
  });
};
