function Evento({numero}) {
    function meuEvento() {
        console.log(`Ativou o evento ${numero}`)
    }

    return (
        <div>
            <p>Clique para dispara um evento</p>
            <button onClick={meuEvento}>Ativar</button>
        </div>
    )
}

export default Evento;