/* Sistema de Cadastro de Produtos */
const readline = require("readline-sync");

var op;
var nome = "";
var cod_produto = "";
var quantidade = "";
var preço = ""; 
var produtoRemovido = "";

do {
  console.clear();
  console.log("=========================================");
  console.log("|    Sistema de Cadastro de Produtos    |");
  console.log("=========================================");
  console.log("|\t\t\t\t\t|");
  console.log("|\t1. Cadastrar novo Produto\t|");
  console.log("|\t2. Listar todos os Produtos\t|");
  console.log("|\t3. Alterar Produto\t\t|");
  console.log("|\t4. Remover Produto\t\t|");
  console.log("|\t0. Sair do sistema\t\t|");
  console.log("|\t\t\t\t\t|");
  console.log("|=======================================|");

  op = parseInt(readline.question("Escolha uma opcao: "));

  switch (op) {
    case 1:
      console.log("Cadastrando novo Produto...");
      cod_produto = readline.question("Código:")
      nome = readline.question("Produto: ");
      quantidade = readline.question("Quantidade: ");
      preço = readline.question("Preço: ");  
      console.log(`Produto ${cod_produto} - ${nome} - ${quantidade} Und - R$ ${preço} cadastrado com sucesso!`);
      readline.question("Pressione ENTER para continuar...");
      break;
    case 2:
      console.log("Listando todos os Produtos...");
      console.log(`${nome}`);
      readline.question("Pressione ENTER para continuar...");
      break;
    case 3:
      console.log("Alterando um Produto...");
      cod_produto = readline.question("Código:")
      nome = readline.question("Produto: ");
      quantidade = readline.question("Quantidade: ");
      preço = readline.question("Preço: "); 
      console.log(`Produto atualizado com sucesso!`);
      readline.question("Pressione ENTER para continuar...");
      break;
    case 4:
      console.log("Digite o nome do Produto que deseja remover:");
      produtoRemovido = readline.question("Nome: ");
      nome = "";
      console.log(`Produto ${nome} removido com sucesso!`);
      readline.question("Pressione ENTER para continuar...");
      break;
    case 0:
      console.log("Saindo do sistema...");
      readline.question("Pressione ENTER para continuar...");
      break;
    default:
      console.log("Opção inválida.");
      readline.question("Pressione ENTER para continuar...");
  }
} while (op !== 0);