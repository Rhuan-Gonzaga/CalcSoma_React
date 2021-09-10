import logo from './logo.svg';
import './App.css';

function AppCalculo() {

  function somar(){
    var numero1 = document.getElementById("n1");
    var numero2 = document.getElementById("n2");
    var resultado = document.getElementsByTagName("h1")[0];
    var soma  = Number(numero1.value) + Number(numero2.value);
    resultado.innerText = "A soma de " + numero1.value + " + " + numero2.value + " = " + soma
  }
  return (

      //Isto é um JSX
      <div className="App">

        <input id="n1" type="number"></input>
        <input id="n2" type="number"></input>
        <button id="soma" onClick={somar}>SOMAR</button>
        <h1></h1>
        <img className="logo" src={logo} alt="React Logo" />
      </div>      

  );

}

export default AppCalculo;


