---
presentation:
  width: 1500
  height: 900
  theme: night.css
---

<!-- slide -->

# Node JS, sua primeira API

<!-- slide -->

## < O que é Back e Front end ?>

![back & front](./assets/img/relogio.png)

<!-- slide -->

## < Front end />

- O front end é a parte visível e interativa de um aplicativo ou website com a qual os usuários interagem diretamente.

  - HTML: Estrutura do conteúdo
  - CSS: Estilização e layout
  - JavaScript: Interatividade e dinamicidade

<!-- slide -->

## < Back end />

- O back end é a parte do aplicativo ou website que gerencia a lógica de negócios, interações com banco de dados, autenticação, e processamento de dados.

  - Servidor: Máquina ou ambiente que executa o software de back end.
  - Banco de Dados: Armazena dados necessários para o aplicativo.
  - APIs: Pontos de interação entre front end e back end.

<!-- slide -->

## < NodeJS ?>

- Node.js é um ambiente de execução JavaScript do lado do servidor, baseado no motor V8 do Google Chrome. Ele permite que você execute código JavaScript no servidor, fora do navegador.

<!-- slide -->

## < APIs />

- Definição: API é uma interface que permite a comunicação entre diferentes softwares.

- Tipos: Incluem APIs Web, de bibliotecas e de sistemas operacionais.

- Exemplos: Usadas em serviços de mapas, redes sociais e pagamentos online.

- Benefícios: Promovem reutilização de funcionalidades, interoperabilidade e escalabilidade.

<!-- slide -->

## < HTTP />

- Definição: HTTP é o protocolo de comunicação para a web.

- Métodos: Inclui métodos como GET, POST, PUT e DELETE.

- Formato de Dados: Usa texto para transmitir dados entre cliente e servidor.

- Benefícios: Simplicidade, extensibilidade e compatibilidade com a web.

<!-- slide -->

## < Comunicação Client & Servidor />

- ![client & servidor](./assets/img/cliente-servidor.png)

<!-- slide -->

## < Métodos HTTP />

- GET: Recupera dados do servidor.

- POST: Envia dados ao servidor para processamento.

- PUT: Atualiza dados existentes no servidor.

- DELETE: Remove dados do servidor.

<!-- slide -->

## < Requisição HTTP />

- Método HTTP: Indica a ação desejada pelo cliente, como GET, POST, PUT, DELETE, entre outros.
  
- URL: Uniform Resource Locator, especifica o recurso alvo da requisição.
  
- Headers da Requisição: Campos chave-valor que passam informações adicionais sobre a requisição, como Content-Type e Authorization.
  
- Corpo da Requisição: (Opcional) Contém os dados enviados pelo cliente ao servidor, geralmente usado em métodos POST e PUT.
  
- Status da Resposta: Código numérico que indica o resultado da requisição, como 200 (OK), 404 (Not Found), 500 (Internal Server Error).
  
- Headers da Resposta: Campos chave-valor que fornecem informações sobre a resposta, como Content-Length e Set-Cookie.
  
<!-- slide -->

## < JSON />

- JSON (Javascript Object Notation) é um formato leve de troca de dados.

- Usa chave-valor em notação de objeto.

- Amplamente suportado em várias linguagens.

- Comum em APIs para transmitir dados.

<!-- slide -->

## < Instalação e configuração do NVM />

- Nvm é é um gerenciador de versões para o NODEJS
  
- É possível ser instalado em Windows, Linux e MacOS

<!-- slide -->

## < Bibliotecas e frameworks />

- Bibliotecas:

  - Conjunto de funções e rotinas reutilizáveis.
  - Oferecem funcionalidades específicas para facilitar o desenvolvimento.
  - São integradas ao código conforme a necessidade.

- Frameworks:

  - Estrutura de suporte para desenvolvimento de software.
  - Define a arquitetura e fluxo de trabalho do projeto.
  - Fornece uma base sólida com convenções, ferramentas e componentes pré-definidos.

<!-- slide -->

## < Express />

- Express é um framework minimalista e flexível para criar aplicativos web com Node.js. Ele oferece um conjunto robusto de funcionalidades tanto para aplicativos web quanto móveis.

- Com diversos métodos utilitários HTTP e middleware disponíveis, você pode criar uma API robusta de forma rápida e fácil.

<!-- slide -->

## < Express Routes />

- O roteamento no Express é a forma como um aplicativo responde a solicitações dos clientes para determinados endereços (URIs) usando métodos HTTP específicos (como GET, POST, etc.).

- Cada rota no Express pode ter uma ou mais funções que são executadas quando essa rota é acessada.

<!-- slide -->

## < Estrutura Básica de uma Função de Middleware />

- O método HTTP ao qual a função de middleware é aplicada.
  
- O caminho (rota) ao qual a função de middleware é aplicada.
  
- A função de middleware.
  
- Argumento de callback para a função de middleware, geralmente chamado de next.
  
- Argumento de resposta HTTP, chamado de res.
  
- Argumento de solicitação HTTP, chamado de req.
