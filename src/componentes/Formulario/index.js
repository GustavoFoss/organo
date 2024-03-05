import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Adc',
        'Tank',
        'Mid',
        'Jungle',
        'Support'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log("Form submetido!")
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto obrigatorio= {true} label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto obrigatorio= {true} label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto obrigatorio= {true} label="Imagem" placeholder="Digite o endereço de imagem"/>
                <ListaSuspensa obrigatorio= {true} label="Selecione o time" itens= {times} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    );
}

export default Formulario