import Button from "./evento/Button";

function Evento() {
    function meuEvento() {
        console.log(`Ativou o primeiro evento`)
    }

    function segundoEvento() {
        console.log('Ativou o segundo evento')
    }

    return (
        <div>
            <p>Clique para dispara um evento</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </div>
    )
}

export default Evento;