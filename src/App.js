import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const [colaboradores,setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaboradores)
    setColaboradores([...colaboradores,colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      <Time nome={"ADC"}/>
      <Time nome={"TANK"}/>
      <Time nome={"MID"}/>
      <Time nome={"JUNGLE"}/>
      <Time nome={"SUPPORT"}/>
    </div>
  );
}

export default App;
