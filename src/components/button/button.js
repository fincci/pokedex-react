import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme-context'
import './button.css'

const Button = (props) => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className='btn-border'>
            <button style={{ background: theme.pokeList.btn.background }} className={'btn'} onClick={() => props.addPokemons()}>Show more</button>
        </div>
    )
}

export { Button }