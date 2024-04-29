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
var op6;
var op_produto;
var op_serviço;
var op_pagamento
var data_agendamento
var hora_agendamento
var num_cartao
var data_cartao
var cvv
var nome_cartao
var parcelamento

do {
  console.clear();
  console.log("=========================================");
  console.log("|  Bem vindo ao Auto Peças e Serviços!  |");
  console.log("=========================================");
  console.log("=========================================") 
  console.log("|\t1. Acesso Administrador\t\t|")
  console.log("|\t2. Cadastrar Cliente\t\t|")
  console.log("|\t3. Cadastrar Produto\t\t|");
  console.log("|\t4. Cadastrar Serviço\t\t|");
  console.log("|\t5. Cadastrar Venda\t\t|");
  console.log("|\t0. Sair do sistema\t\t|");
  console.log("=========================================")

  op = parseInt(readline.question("Escolha uma opcao: "));

  switch (op) {
    case 1:
        do {
            console.clear();
            console.log("=========================================");
            console.log("|   ACESSE O SISTEMA OU CADASTRE-SE     |");
            console.log("=========================================");
            console.log("=========================================") 
            console.log("|\t1. Cadastrar Novo Administrador\t|")
            console.log("|\t2. Acesse o Sistema\t\t|")
            console.log("|\t0. Voltar ao Menu Principal\t|");
            console.log("=========================================")
          
            op2 = parseInt(readline.question("Escolha uma opcao: "));
          
            switch (op2) {
              case 1:
                console.log("CADASTRANDO NOVO ADMINISTRADOR...");
                nome = readline.question("Nome: ");
                sobrenome = readline.question("Sobrenome: ");
                login = readline.question("login: ");
                senha = readline.question("Senha: ");
                console.log(`Administrador ${nome} ${sobrenome} cadastrado com sucesso!`);
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
            console.log("|            CADASTRAR CLIENTE            |");
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
            console.log("|            CADASTRAR PRODUTO            |");
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
            console.log("|            CADASTRAR SERVIÇO            |");
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
        console.log("|             CADASTRAR VENDA           |");
        console.log("=========================================");
        console.log("|\t\t\t\t\t|");
        console.log("|\t1. Escolher Produto\t\t|");
        console.log("|\t2. Escolher Serviço\t\t|");
        console.log("|\t3. Agendar Serviço\t\t|");
        console.log("|\t4. Finaliza Pedido\t\t|");
        console.log("|\t0. Voltar ao Menu Principal\t|");
        console.log("|\t\t\t\t\t|");
        console.log("|=======================================|");
      
        op6 = parseInt(readline.question("Escolha uma opcao: "));
      
        switch (op6) {
            case 1:
                do {
                    console.clear();
                    console.log("=========================================");
                    console.log("|               PRODUTOS                |");
                    console.log("=========================================");
                    console.log("|\t\t\t\t\t|");
                    console.log("|\t1. Óleo\t\t\t\t|");
                    console.log("|\t2. Faróis e Lanternas\t\t|");
                    console.log("|\t3. Suspenção\t\t\t|");
                    console.log("|\t4. Pastilhas de Freio\t\t|");
                    console.log("|\t5. Filtro de Ar\t\t\t|");
                    console.log("|\t0. Voltar ao Menu Pedido\t|");
                    console.log("|\t\t\t\t\t|");
                    console.log("|=======================================|");
      
                    op_produto = parseInt(readline.question("Escolha uma opcao: "));
      
                    switch (op_produto) {
                      case 1:
                        console.log("Óleo - Produto escolhido com sucesso!");
                        readline.question("Pressione ENTER para continuar...");
                        break;
                      case 2:
                        console.log("Faróis e Lanternas - Produto escolhido com sucesso!");
                        readline.question("Pressione ENTER para continuar...");
                        break;
                      case 3:
                        console.log("Suspensão - Produto escolhido com sucesso!");
                        readline.question("Pressione ENTER para continuar...");
                        break;
                      case 4:
                        console.log("Pastilhas de Freio - Produto escolhido com sucesso!");
                        readline.question("Pressione ENTER para continuar...");
                        break;
                      case 5:
                        console.log("Filtro de Ar - Produto escolhido com sucesso!");
                        readline.question("Pressione ENTER para continuar...");
                      case 0:
                        console.log("Voltando para o Menu Pedido...");
                        readline.question("Pressione ENTER para continuar...");
                        break;
                      default:
                        console.log("Opção inválida.");
                        readline.question("Pressione ENTER para continuar...");
                    }
                  } while (op_produto !== 0);
              break;
            case 2:
                do {
                    console.clear();
                    console.log("=========================================");
                    console.log("|               SERVIÇOS                |");
                    console.log("=========================================");
                    console.log("|\t\t\t\t\t|");
                    console.log("|\t1. Troca de Óleo\t\t|");
                    console.log("|\t2. Troca de Faróis/Lanternas\t|");
                    console.log("|\t3. Manutenção na Suspenção\t|");
                    console.log("|\t4. Troca de Pastilhas de Freio\t|");
                    console.log("|\t5. Troca do Filtro de Ar\t|");
                    console.log("|\t0. Voltar ao Menu Pedido\t|");
                    console.log("|\t\t\t\t\t|");
                    console.log("|=======================================|");
      
                    op_serviço = parseInt(readline.question("Escolha uma opcao: "));
      
                    switch (op_serviço) {
                      case 1:
                        console.log("Troca de Óleo - Serviço escolhido com sucesso!");
                        readline.question("Pressione ENTER para continuar...");
                        break;
                      case 2:
                        console.log("Troca de Faróis/Lanternas - Serviço escolhido com sucesso!");
                        readline.question("Pressione ENTER para continuar...");
                        break;
                      case 3:
                        console.log("Manutenção na Suspensão - Serviço escolhido com sucesso!");
                        readline.question("Pressione ENTER para continuar...");
                        break;
                      case 4:
                        console.log("Troca de Pastilhas de Freio - Serviço escolhido com sucesso!");
                        readline.question("Pressione ENTER para continuar...");
                        break;
                      case 5:
                        console.log("Troca de Filtro de Ar - Serviço escolhido com sucesso!");
                        readline.question("Pressione ENTER para continuar...");
                      case 0:
                        console.log("Voltando para o Menu Pedido...");
                        readline.question("Pressione ENTER para continuar...");
                        break;
                      default:
                        console.log("Opção inválida.");
                        readline.question("Pressione ENTER para continuar...");
                    }
                  } while (op_produto !== 0);
              break;
            case 3:  
            console.log("AGENDE O SERVIÇO...");
            data_agendamento = readline.question("DATAS DISPONÍVEIS: 20/05  21/05  22/05: ");
            hora_agendamento = readline.question("HORAS DISPONÍVEIS: 9:00  10:20  14:30  16:00: ");
            console.log(`Serviço agendado na data ${data_agendamento } ás ${hora_agendamento}, informar sobre tolerância de 10 min!`);
            readline.question("Pressione ENTER para continuar...");
            break;
            case 4: 
                do {
                console.clear();
                console.log("=========================================");
                console.log("|             PAGAMENTO                  |");
                console.log("=========================================");
                console.log("|\t\t\t\t\t|");
                console.log("|\t1. PIX\t\t\t\t|");
                console.log("|\t2. Cartão de Credito ou Debito\t|");
                console.log("|\t3. Boleto Bancario\t\t|");
                console.log("|\t0. Voltar ao Menu Pedido\t|");
                console.log("|\t\t\t\t\t|");
                console.log("|=======================================|");
                op_pagamento = parseInt(readline.question("Escolha uma opcao: "));
                switch (op_pagamento) {
                    case 1:
                        console.log ("Codigo PIX: 00020101021226850014br.gov.bcb.pix2563pix.santander.com.br/qr")
                        console.log ("Por favor, siga as instruções:")
                        console.log ("1 Acesse o app do seu banco ou internet banking de preferência.")
                        console.log ("2 Escolha pagar via Pix.")
                        console.log ("3 Escaneie o QR Code ou copie e cole o código Pix acima.")
                        console.log ("4 Seu pagamento será aprovado em alguns segundos.")
                        readline.question("Pressione ENTER para continuar...");
                        break;
                    case 2:
                        console.log("CADASTRE SEU CARTÃO...");
                        num_cartao = readline.question("Numero do Cartão: ");
                        data_cartao = readline.question("Data de Validade: ");
                        cvv = readline.question("CVV: ");
                        nome_cartao = readline.question("Nome no Cartão: ");
                        parcelamento = readline.question("digite o parcelamento:")
                        console.log(`Pedido finalizado com sucesso!`);
                        readline.question("Pressione ENTER para continuar...");
                        break;
                    case 3:
                        console.log ("Codigo Boleto: 03399.54349 20380.678845 14896.801017 5 96980000020531")
                        console.log ("Por favor, siga as instruções:")
                        console.log ("1 Use a linha digitável ou código de barras acima para pagar usando seu internet banking ou dirija-se a um banco, caixa eletrônico ou lotérica com seu boleto impresso.")
                        console.log ("2 Importante: se o seu boleto tem a data de vencimento em um fim de semana ou feriado, você poderá pagá-lo normalmente no próximo dia útil.")
                        console.log ("3 A confirmação do seu pagamento pode levar até 3 dias úteis.")
                        readline.question("Pressione ENTER para continuar...");
                        break;
                    case 0:
                    console.log("Voltando para o Menu Pedido...");
                    readline.question("Pressione ENTER para continuar...");
                    break;
                    default:
                    console.log("Opção inválida.");
                    readline.question("Pressione ENTER para continuar...");
                }
                } while (op_pagamento !== 0);
                break;
            case 0:
            console.log("Voltando para o Menu Pedido...");
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
