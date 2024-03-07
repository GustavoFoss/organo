import Colaborador from '../Colaborador'
import './Time.css'

const Time = (props) => {

    const estiloPrimario = {backgroundColor: props.corSecundaria}
    const estiloSecundario = {borderColor: props.corPrimaria}

    return (
        <section className='time' style={estiloPrimario}>
            <h3 style={estiloSecundario}>{props.nome}</h3>
            <Colaborador />
        </section>
    )
}


export default Time