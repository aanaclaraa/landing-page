import ExibeNota from "./components/ExibeNota.jsx";
import Contador from "./components/contador.jsx";
import BoasVindas from "./components/BoasVindas.jsx";


function App( props ) {

  let nota = props.nota;
  let aprovado = false;
  let reprovado = false;
  if( nota > 5 ) {
    aprovado = true;
  } else {
    reprovado = true;
  }

  return (
   <>
    { aprovado &&
      <ExibeNota mensagem="Aprovado" nota={props.nota} />
    }
    { reprovado &&
      <ExibeNota mensagem="Reprovado" nota={props.nota} />
    }
    <Contador />
    <BoasVindas />
   </>
  );
}

export default App;
