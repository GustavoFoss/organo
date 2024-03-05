import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import { useState } from 'react'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Adc',
        'Tank',
        'Mid',
        'Jungle',
        'Support'
    ]

    const [nome,setNome] = useState('')
    const [cargo,setCargo] = useState('')
    const [imagem,setImagem] = useState('')
    const [time,setTime] = useState(times[0])

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log("Form submetido! =>",nome,cargo,imagem,time)
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto valor={nome} aoAlterado={valor => setNome(valor)} obrigatorio= {true} label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto valor={cargo} aoAlterado={valor => setCargo(valor)} tipo="text" obrigatorio= {true} label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto valor={imagem} aoAlterado={valor => setImagem(valor)} obrigatorio= {true} label="Imagem" placeholder="Digite o endereço de imagem"/>
                <ListaSuspensa valor={time} aoAlterado={valor => setTime(valor)} obrigatorio= {true} label="Selecione o time" itens= {times} />
                <Botao>Criar Card</Botao>
            </form>
        </section>
    );
}

export default Formulario