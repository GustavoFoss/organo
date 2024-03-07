import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const estiloPrimario = {backgroundColor: props.corSecundaria}
    const estiloSecundario = {borderColor: props.corPrimaria}

    return (
        <section className='time' style={estiloPrimario}>
            <h3 style={estiloSecundario}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador 
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                />)}
            </div>
        </section>
    )
}


export default Time