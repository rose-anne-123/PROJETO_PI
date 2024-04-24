/* Sistema de PEDIDO */
const readline = require("readline-sync");

var op6;
var op_produto;
var op_serviço;

            console.clear();
            console.log("=========================================");
            console.log("|             Menu de Pedido            |");
            console.log("=========================================");
            console.log("|\t\t\t\t\t|");
            console.log("|\t1. Escolher Produto\t\t|");
            console.log("|\t2. Escolher Serviço\t\t|");
            console.log("|\t3. Agendar Serviço\t\t|");
            console.log("|\t3. Finaliza Pedido\t\t|");
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

                  break;
                case 4:

                  break;
                case 0:
                  console.log("Saindo do sistema...");
                  readline.question("Pressione ENTER para continuar...");
                  break;
                default:
                  console.log("Opção inválida.");
                  readline.question("Pressione ENTER para continuar...");
              }
             while (op6 !== 0); 
