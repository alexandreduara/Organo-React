import "./CampoTexto.css"

const CampoTexto = (props) => {
    
    const placeHolderModificada = `${props.placeholder}.`
    
    let valor = ''

    const aoDigitado = (evento) =>{
        valor = evento.target.value
        console.log(evento.target.value)

    }

    return(
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={placeHolderModificada}/>
        </div>
    )

}

export default CampoTexto