/* Sistema de Cadastro de Serviços */
const readline = require("readline-sync");

var op;
var nome = "";
var cod_serviço = "";
var preço = ""; 
var serviçoRemovido 

do {
  console.clear();
  console.log("=========================================");
  console.log("|    Sistema de Cadastro de Serviços     |");
  console.log("=========================================");
  console.log("|\t\t\t\t\t|");
  console.log("|\t1. Cadastrar novo Serviço\t|");
  console.log("|\t2. Listar todos os Serviços\t|");
  console.log("|\t3. Alterar um Serviço\t\t|");
  console.log("|\t4. Remover um Serviço\t\t|");
  console.log("|\t0. Sair do sistema\t\t|");
  console.log("|\t\t\t\t\t|");
  console.log("|=======================================|");

  op5 = parseInt(readline.question("Escolha uma opcao: "));

  switch (op5) {
    case 1:
      console.log("Cadastrando novo Serviço...");
      cod_serviço = readline.question("Código:")
      nome = readline.question("Serviço: ");
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
      serviçoRemovido = readline.question("Nome: ");
      nome = "";
      console.log(`Serviço ${nome} removido com sucesso!`);
      readline.question("Pressione ENTER para continuar...");
      break;
    case 0:
      console.log("Voltar para o Menu Principal...");
      readline.question("Pressione ENTER para continuar...");
      break;
    default:
      console.log("Opção inválida.");
      readline.question("Pressione ENTER para continuar...");
  }
} while (op5 !== 0);