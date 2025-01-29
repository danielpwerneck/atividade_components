import Image from "next/image";
import Menu from "./components/Menu";
import Produto from "./components/Produto";

export default function Home() {
  return (  
    <div>

       <Menu/>


      <h1>Enviando para o Github</h1> 
      <p>Atividade em andamento...</p>
      <p>Testando uma nova versão</p>

      <hr/>

      <h2>Produtinhux</h2>

      <div className="flex justify-around">

      <Produto nome="Cappuccino com canela" preco="R$ 5,60" botao="Comprar"/>
      <Produto nome="Café coado" preco="R$3,60" botao="Encomendar"/>
      <Produto nome="Café Expresso" preco="R$4,99" botao="Comprar"/>
      

    </div>

    </div>

  );
}
