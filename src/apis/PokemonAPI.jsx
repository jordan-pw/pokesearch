export const PokemonAPI = {
    get: async function(id) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + id)
        
        if (response.ok) {
            return response.json();
        }
    },

    getList: async function(limit, offset) {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=" + limit + "&offset=" + offset)
        

        if (response.ok) {
            return response.json();
        }
    }
}