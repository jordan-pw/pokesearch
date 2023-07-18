import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

import RootLayout from './layouts/RootLayout'
import PokemonList, { pokemonLoader } from './pages/Pokemon'
import About from './pages/About'
import Pokemon from './pages/Pokemon'
import PokemonDetails, { pokemonDetailsLoader } from './pages/PokemonDetails'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index />
      <Route path="about" element={<About />} />
      <Route path="pokemon/:page?" element={<Pokemon />} loader={pokemonLoader} />
      <Route path="pokemon/details/:id" element={<PokemonDetails />} loader={pokemonDetailsLoader} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
