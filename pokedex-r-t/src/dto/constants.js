export const POKEMON_TYPES = [
    "Steel",
    "Water",
    "Bug",
    "Dragon",
    "Electric",
    "Ghost",
    "Fire",
    "Fairy",
    "Ice",
    "Fighting",
    "Normal",
    "Grass",
    "Psychic",
    "Rock",
    "Dark",
    "Ground",
    "Poison",
    "Flying",
    "Stellar"
]

export const SRC_TYPE = (pokemonType) => `src/assets/types/t_${pokemonType}.svg`

export const COLOR_TYPE = {
    "bug": "bg-bug",
    "dark": "bg-dark",
    "dragon": "bg-dragon",
    "electric": "bg-electric",
    "fairy": "bg-fairy",
    "fighting": "bg-fighting",
    "fire": "bg-fire",
    "flying": "bg-flying",
    "ghost": "bg-ghost",
    "grass": "bg-grass",
    "ground": "bg-ground",
    "ice": "bg-ice",
    "normal": "bg-normal",
    "poison": "bg-poison",
    "psychic": "bg-psychic",
    "rock": "bg-rock",
    "steel": "bg-steel",
    "water": "bg-water",
}

export const LIMIT_MOVES_FETCH_SAME_TIME = 10
export const LIMIT_POKEMON_LIST_FETCH_SAME_TIME = 10
export const MAX_NUMBER_OF_POKEMON = 1350