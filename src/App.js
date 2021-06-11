import './App.css';

import img1 from "./Foda.jpg";

function App() {
  function submete(){
    let Nome=document.getElementById("nome").value;
    let Senha=document.getElementById("senha").value;
    if(Senha=="master"){
      alert("Você achou seu Pai");
    }
    else {
      alert("Seu pai foi comprar cigarro");
    }
  }

  return (
    <div className="App">
    
     
     <h1>
       Aprendizado
     </h1>
     <img src= { img1} className="GG" />  
     <h2>
       profecho do sexo
     </h2>
     <input placeholder="Nome:"
            maxLength="6"
            id="nome"
     />  
     <br/>
    <input placeholder="Senha"
           type="password"
           id="senha"
    />
    <br/>
    <button onClick={()=>{submete()}} > 
      "Pai"
    </button>

    </div>
  );
}

export default App;
