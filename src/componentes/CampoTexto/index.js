import "./CampoTexto.css"

const CampoTexto = (props) => {
    
    const placeHolderModificada = `${props.placeholder}.`

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeHolderModificada}/>
        </div>
    )

}

export default CampoTexto