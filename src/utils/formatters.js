export const capitalizeFirst = str => {
  if (!str) {
    return "";
  }
  return str[0].toUpperCase() + str.slice(1);
};

export const typeToHexColor = str => {
  const map = {
    normal: "#AFB0A0",
    poison: "#9E5896",
    psychic: "#ED5BA4",
    grass: "#83C54A",
    ground: "#DBBA47",
    ice: "#84DDFF",
    fire: "#E54C3C",
    rock: "#BBAC67",
    dragon: "#7A67F4",
    water: "#4A9EFE",
    bug: "#B2C022",
    dark: "#866252",
    fighting: "#B45C4E",
    ghost: "#6E6BC2",
    steel: "#B0B1C3",
    flying: "#6B96F4",
    electric: "#FBCE33",
    fairy: "#E69CEB"
  };
  return map[str];
};
