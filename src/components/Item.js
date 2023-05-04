import PropTypes from 'prop-types'

function Item({marca, anoLancamento}) {
    return(
        <>
            <li>{marca} -- {anoLancamento}</li>
        </>
    )
}

// Demonstrando q string é string e numeros são numbers, tem q fazer o import acima
// isRequired é para torna-la obrigatória
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Faltou a marca',
    anoLancamento: 0
}

export default Item;