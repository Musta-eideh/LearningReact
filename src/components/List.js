import Item from "./Item";

function List() {
    return(
        // fragment <></>
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Subaru" anoLancamento={1989}/>
                <Item marca="BMW" anoLancamento={1916}/>
                <Item marca="Mercedes Benz" anoLancamento={1924}/>
            </ul>
        </>
    )
}

export default List;