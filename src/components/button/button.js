import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import './button.css'

const Button = (props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <button style={{ background: theme.pokeList.btn.background }} className={'btn'} onClick={ () => props.addPokemons() }>Show more</button>
    )
}

export { Button }