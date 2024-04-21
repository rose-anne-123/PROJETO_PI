// Sistema de login de acesso. 
const readline = require("readline-sync");

var op;
var nome = "";
var sobrenome = "";
var CPF = "";
var email = "";
var login = "";
var senha = "";

do {
  console.clear();
  console.log("=========================================");
  console.log("|  Bem vindo ao Auto Peças e Serviços!  |");
  console.log("=========================================");
  console.log("=========================================") 
  console.log("|\t1. Cadastre-se\t\t\t|")
  console.log("|\t2. Faça seu Login\t\t|")
  console.log("|\t0. Voltar ao Menu Principal\t\t|");
  console.log("=========================================")

  op = parseInt(readline.question("Escolha uma opcao: "));

  switch (op) {
    case 1:
      console.log("CADASTRANDO NOVO CLIENTE...");
      nome = readline.question("Nome: ");
      sobrenome = readline.question("Sobrenome: ");
      login = readline.question("login: ");
      senha = readline.question("Senha: ");
      console.log(`Cliente ${nome} ${sobrenome} cadastrado com sucesso!`);
      readline.question("Pressione ENTER para continuar...");
      break;
    case 2:
        console.log("INFORME SEUS DADOS PARA CONTINUAR.");
        login = readline.question("Digite seu login: ");
        senha = readline.question("Digite sua Senha: ");
      console.log(`Bem Vindo! ${login}`);
      readline.question("Pressione ENTER para continuar...");
      break;
    case 3:
      console.log("Alterando um cliente...");
      nome = readline.question("Nome: ");
      sobrenome = readline.question("Sobrenome: ");
      console.log(`Cliente atualizado com sucesso!`);
      readline.question("Pressione ENTER para continuar...");
      break;
    case 4:
      console.log("Digite o nome do cliente que deseja remover:");
      var clienteRemovido = readline.question("Nome: ");
      nome = "";
      sobrenome = "";
      console.log(`Cliente ${nome} ${sobrenome} removido com sucesso!`);
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