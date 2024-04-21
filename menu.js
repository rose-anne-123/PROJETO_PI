const readline = require("readline-sync");

var op;
var op2;
var op3;
var op4;
var op5;
var op6;
var nome = "";
var sobrenome = "";
var CPF = "";
var email = "";
var login = "";
var senha = "";
var telefone = "";
var cod_produto = "";
var quantidade = "";
var preço = ""; 
var produtoRemovido = "";
var cod_serviço = "";
var serviçoRemovido = "";
var agendamento = "";
var data_venda = ""; 
var valor_venda = "";

do {
  console.clear();
  console.log("=========================================");
  console.log("|  Bem vindo ao Auto Peças e Serviços!  |");
  console.log("=========================================");
  console.log("=========================================") 
  console.log("|\t1. Menu de Login\t\t\t|")
  console.log("|\t2. Menu de Cliente\t\t|")
  console.log("|\t3. Menu de Produto\t\t|");
  console.log("|\t4. Menu de Serviço\t\t|");
  console.log("|\t4. Menu de Pedido\t\t|");
  console.log("|\t0. Sair do sistema\t\t|");
  console.log("=========================================")

  op = parseInt(readline.question("Escolha uma opcao: "));

  switch (op) {
    case 1:
        do {
            console.clear();
            console.log("=========================================");
            console.log("|    FAÇA SEU LOGIN OU CADASTRE-SE      |");
            console.log("=========================================");
            console.log("=========================================") 
            console.log("|\t1. Cadastre-se\t\t\t|")
            console.log("|\t2. Faça seu Login\t\t|")
            console.log("|\t0. Voltar ao Menu Principal\t|");
            console.log("=========================================")
          
            op2 = parseInt(readline.question("Escolha uma opcao: "));
          
            switch (op2) {
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
              case 0:
                console.log("Voltando ao menu principal...");
                readline.question("Pressione ENTER para continuar...");
                break;
              default:
                console.log("Opção inválida.");
                readline.question("Pressione ENTER para continuar...");
            }
          } while (op2 !== 0);
      break;
    case 2:
        do {
            console.clear();
            console.log("=========================================");
            console.log("|            MENU DE CLIENTE            |");
            console.log("=========================================");
            console.log("|\t\t\t\t\t|");
            console.log("|\t1. Cadastrar novo cliente\t|");
            console.log("|\t2. Listar todos os clientes\t|");
            console.log("|\t3. Alterar um cliente\t\t|");
            console.log("|\t4. Remover um cliente\t\t|");
            console.log("|\t0. Voltar ao Menu Principal\t|");
            console.log("|\t\t\t\t\t|");
            console.log("|=======================================|");
          
            op3 = parseInt(readline.question("Escolha uma opcao: "));
          
            switch (op3) {
              case 1:
                console.log("Cadastrando novo cliente...");
                nome = readline.question("Nome: ");
                sobrenome = readline.question("Sobrenome: ");
                CPF = readline.question("CPF: ");
                email = readline.question("E-mail: ");
                telefone = readline.question("Telefone: ");
                console.log(`Cliente ${nome} ${sobrenome} cadastrado com sucesso!`);
                readline.question("Pressione ENTER para continuar...");
                break;
              case 2:
                console.log("Listando todos os clientes...");
                console.log(`${nome} ${sobrenome}`);
                readline.question("Pressione ENTER para continuar...");
                break;
              case 3:
                console.log("Alterando um cliente...");
                nome = readline.question("Nome: ");
                sobrenome = readline.question("Sobrenome: ");
                CPF = readline.question("CPF: ");
                email = readline.question("E-mail: ");
                telefone = readline.question("Telefone: ");
                console.log(`Cliente atualizado com sucesso!`);
                readline.question("Pressione ENTER para continuar...");
                break;
              case 4:
                console.log("Digite o nome do cliente que deseja remover:");
                clienteRemovido = readline.question("Nome: ");
                nome = "";
                sobrenome = "";
                console.log(`Cliente ${nome} ${sobrenome} removido com sucesso!`);
                readline.question("Pressione ENTER para continuar...");
                break;
              case 0:
                console.log("Voltar para o Menu Principal..");
                readline.question("Pressione ENTER para continuar...");
                break;
              default:
                console.log("Opção inválida.");
                readline.question("Pressione ENTER para continuar...");
            }
          } while (op3 !== 0);
        
      break;
    case 3:
        do {
            console.clear();
            console.log("=========================================");
            console.log("|            MENU DE PRODUTO            |");
            console.log("=========================================");
            console.log("|\t\t\t\t\t|");
            console.log("|\t1. Cadastrar novo Produto\t|");
            console.log("|\t2. Listar todos os Produtos\t|");
            console.log("|\t3. Alterar Produto\t\t|");
            console.log("|\t4. Remover Produto\t\t|");
            console.log("|\t0. Voltar ao Menu Pincipal\t|");
            console.log("|\t\t\t\t\t|");
            console.log("|=======================================|");
          
            op4 = parseInt(readline.question("Escolha uma opcao: "));
          
            switch (op4) {
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
                console.log("Voltar para o Menu Principal...");
                readline.question("Pressione ENTER para continuar...");
                break;
              default:
                console.log("Opção inválida.");
                readline.question("Pressione ENTER para continuar...");
            }
          } while (op4 !== 0);
      break;
    case 4:
        do {
            console.clear();
            console.log("=========================================");
            console.log("|            MENU DE SERVIÇO            |");
            console.log("=========================================");
            console.log("|\t\t\t\t\t|");
            console.log("|\t1. Cadastrar novo Serviço\t|");
            console.log("|\t2. Listar todos os Serviços\t|");
            console.log("|\t3. Alterar um Serviço\t\t|");
            console.log("|\t4. Remover um Serviço\t\t|");
            console.log("|\t0. Voltar ao Menu Principal\t|");
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
      break;
    case 5:
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
    case 0:
      console.log("Saindo do sistema...");
      readline.question("Pressione ENTER para continuar...");
      break;
    default:
      console.log("Opção inválida.");
      readline.question("Pressione ENTER para continuar...");
  }
} while (op !== 0);