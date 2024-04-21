/* Sistema de Vendas de Produtos e Serviços para Cliente Final */
const readline = require("readline-sync");

var op;
cod_venda = "";
var cod_produto = "";
var cod_serviço = "";
var agendamento = "";
var data_venda = ""; 
var valor_venda = "";

do {
  console.clear();
  console.log("=========================================");
  console.log("|             Menu de Pedido            |");
  console.log("=========================================");
  console.log("|\t\t\t\t\t|");
  console.log("|\t1. Escolher Produto\t|");
  console.log("|\t2. Escolher Serviço\t|");
  console.log("|\t3. Agendar Serviço\t\t|");
  console.log("|\t3. Finaliza Pedido\t\t|");
  console.log("|\t0. Voltar ao Menu Principal\t|");
  console.log("|\t\t\t\t\t|");
  console.log("|=======================================|");

  op6 = parseInt(readline.question("Escolha uma opcao: "));

  switch (op6) {
    case 1:
      console.log("Escolha um Produto...");
      console.log("...");
      cod_produto = readline.question("Código:")
      nome = readline.question("Produto: ");
      preço = readline.question("Preço: ");  
      console.log(`Serviço ${cod_serviço} - ${nome} - R$ ${preço} cadastrado com sucesso!`);
      readline.question("Pressione ENTER para continuar...");
      break;
    case 2:
      console.log("Listando todos os Serviços...");
      console.log(`${nome}`);
      readline.question("Pressione ENTER para continuar...");
      break;
    case 3:
      console.log("Alterando um Serviço...");
      cod_serviço = readline.question("Código:")
      nome = readline.question("Serviço: ");
      preço = readline.question("Preço: ");  
      console.log(`Serviço atualizado com sucesso!`);
      readline.question("Pressione ENTER para continuar...");
      break;
    case 4:
      console.log("Digite o Serviço que deseja remover:");
      clienteRemovido = readline.question("Nome: ");
      nome = "";
      console.log(`Serviço ${nome} removido com sucesso!`);
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
} while (op6 !== 0);