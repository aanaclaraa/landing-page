function ExibeNota(props)
{
    function ExibeNota()
    {
        alert( "Sua média geral foi: " +  props.nota );
    }
    return(
        <div>
            <h1>{props.menasagem}</h1>
            <button onClick={ExibeNota}>Veja sua nota</button>
        </div>
    )
}
export default ExibeNota;