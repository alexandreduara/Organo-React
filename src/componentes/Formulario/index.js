import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = (props) => {

  const [colaborador, setColaborador] = useState({
    nome: '',
    cargo: '',
    imagem: '',
    time: '',
  })

  const aoSalvar = (evento) => {
      evento.preventDefault()
      props.aoColaboradorCadastrado(colaborador)
      setColaborador({
          nome: '',
          cargo: '',
          imagem: '',
          time: '',
      })
  }
  

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          label="Nome"
          obrigatorio={true}
          placeholder="Digite seu Nome"
          valor={colaborador.nome}
          aoAlterado={valor => setColaborador(colaboradorAtual => ({ ...colaboradorAtual, nome: valor }))}
        />
        <CampoTexto
          label="Cargo"
          obrigatorio={true}
          placeholder="Digite seu Cargo"
          valor={colaborador.cargo}
          aoAlterado={valor => setColaborador(colaboradorAtual => ({ ...colaboradorAtual, cargo: valor }))}
        />
        <CampoTexto
          label="Imagem"
          obrigatorio={true}
          placeholder="Digite o endereço da imagem"
          valor={colaborador.imagem}
          aoAlterado={valor => setColaborador(colaboradorAtual => ({ ...colaboradorAtual, imagem: valor }))}
        />
        <ListaSuspensa 
          obrigatorio={true} 
          label="Time" 
          itens={props.times}
          valor={colaborador.time}
          aoAlterado={valor => setColaborador(colaboradorAtual => ({ ...colaboradorAtual, time: valor }))}

        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
