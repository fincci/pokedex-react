import './button.css'

const Button = (props) => {
    return (
        <button className={'btn'} onClick={ () => props.addPokemons() }>Show more</button>
    )
}

export { Button }