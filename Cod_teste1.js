const readline = require("readline-sync");

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

            console.clear();
            console.log("=========================================");
            console.log("|             Menu de Pedido            |");
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
                console.log("AGENDE SEU SERVIÇO...");
                data_agendamento = readline.question("DATAS DISPONÍVEIS: 20/05  21/05  22/05: ");
                hora_agendamento = readline.question("HORAS DISPONÍVEIS: 9:00  10:20  14:30  16:00: ");
                console.log(`Serviço agendado na data ${data_agendamento } ás ${hora_agendamento}, tolerância de 10 min!`);
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
                        case 0:console.log("Voltando para o Menu Pedido...");
                        readline.question("Pressione ENTER para continuar...");
                        default:
                        console.log("Opção inválida.");
                        readline.question("Pressione ENTER para continuar...");
                    }
                    }while (op_pagamento !== 0);
                case 0:
                console.log("Voltando para o Menu Pedido...");
                  readline.question("Pressione ENTER para continuar...");
                  break;
                default:
                  console.log("Opção inválida.");
                  readline.question("Pressione ENTER para continuar...");
              }
             while (op6 !== 0); 
