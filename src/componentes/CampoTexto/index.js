import "./CampoTexto.css"

const CampoTexto = (props) => {
    
    const placeHolderModificada = `${props.placeholder}.`
    

    const aoDigitado = (evento) =>{
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeHolderModificada}/>
        </div>
    )

}

export default CampoTexto