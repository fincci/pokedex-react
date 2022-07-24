import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Pokemon } from "./pokemon-info"
import { PokemonList } from './pokemon-list'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PokemonList />} />
                <Route exact path='/pokemon/:name' element={<Pokemon />}/>
            </Routes>
        </BrowserRouter>
    )
}

export { AppRoutes }