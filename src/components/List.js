import Item from "./Item";

function List() {
    return(
        // fragment <></>
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Subaru"/>
                <Item marca="BMW"/>
                <Item marca="Mercedes Benz"/>
            </ul>
        </>
    )
}

export default List;