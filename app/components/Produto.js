function Produto(attr) {
    return ( 
        <div className="border-solid bord w-1/5 bg-zinc-50 p-5 ">
            <div>
             <img className="text-center" src="https://placehold.co/200"/>
            </div>
            
            <h2 className="text-lime-800">{attr.nome}</h2>
            <p>⭐⭐⭐⭐⭐</p>
            <p> R$ {attr.preco} </p>
            <button className="bg-blue-700 text-white">{attr.botao}</button>
        </div>

     );
}

export default Produto;