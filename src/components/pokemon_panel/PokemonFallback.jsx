import PokemonCardFallback from "../PokemonCardFallback";


export default function PokemonFallback() {
    const cards = Array.from({length:20}).map((e, index) => (
        <PokemonCardFallback key={index}/>
    ))

    return cards
}
