import "./Formulario.css";
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao";

const Formulario = () => {

  const times =[
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'    
  ]

  const aoSalvar =  (evento) =>{
    evento.preventDefault()
    console.log('Form foi submetido')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto label="Nome" obrigatorio={true} placeholder="Digite seu Nome" />
        <CampoTexto label="Cargo" obrigatorio={true} placeholder="Digite seu Cargo" />
        <CampoTexto label="Imagem" obrigatorio={true} placeholder="Digite o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
        <Botao>
            Criar Card
        </Botao>
      </form>
    </section>
  );
};

export default Formulario;
