
const produtoRepository = require('./repository/produto_repository');

function main() {
    console.log("Listar 1:", produtoRepository.listar());

    produtoRepository.inserir({ 
        nome: "Feijao", 
        categoria: "alimento", 
        preco: 8.00 
    });

    produtoRepository.inserir({ 
        nome: "Suco de laranja", 
        categoria: "bebida", 
        preco: 9.20 
    });

    produtoRepository.atualizar(2,{
        id: 2,
        nome: "leite",
        categoria: "bebida",
        preco: 4.00
    });

    console.log("Listar 2:",produtoRepository.listar());

    console.log("Pesquisar pela categoria 'alimento'", 
        produtoRepository.pesquisarPorCategoria('alimento'));

    console.log("Pesquisar pelo nome like 'E", 
        produtoRepository.pesquisarPorLikeNome('E'));


    produtoRepository.deletar(2);
    console.log("BuscarPorId4: ",produtoRepository.buscarPorId(4));
    console.log("BuscarPorId2: ",produtoRepository.buscarPorId(2));

}

main();