
# Criação de uma API REST-FULL

Neste projeto, criei uma API RESTful utilizando Node.js com o framework Express para implementar o backend. A API é responsável por gerenciar seleções, permitindo operações de CRUD (Create, Read, Update, Delete). Para o armazenamento de dados, utilizei o banco de dados MySQL, garantindo a persistência das informações.

Adotei a arquitetura MVC (Model-View-Controller) para separar a lógica de negócio, as regras de apresentação e a manipulação de dados, o que melhora a organização e a legibilidade do código.

Detalhes da API:

Node.js e Express: A estrutura principal do backend, onde as rotas são definidas para acessar os métodos do controlador.

MySQL: Utilizado como banco de dados relacional para armazenar as seleções.

Express Router: Utilizado para organizar e modularizar as rotas, facilitando a manutenção.

SelectionController: Controlador responsável por intermediar as requisições HTTP e os dados manipulados pelo repositório.

SelectionRepository: Classe responsável por executar as operações no banco de dados, como busca, inserção, atualização e remoção de dados.

MySQL Connection: Configurado via a biblioteca mysql do Node.js, com métodos personalizados para realizar consultas de forma assíncrona utilizando Promises.

Operações disponíveis:

GET /selections: Retorna todas as seleções cadastradas.

GET /selection/:id: Retorna uma seleção específica pelo seu ID.

POST /selection: Cria uma nova seleção.

PUT /selection/:id: Atualiza uma seleção existente com base no ID.

DELETE /selection/:id: Exclui uma seleção existente.

Ferramentas Utilizadas:

Insomnia: Para testar as requisições e as rotas da API.

Nodemon: Automatiza o processo de reinicialização do servidor durante o desenvolvimento.

MySQL Workbench: Usado para gerenciar visualmente o banco de dados e as tabelas.

Benefícios da Arquitetura MVC:

Separação de responsabilidades: A camada de controle lida com as requisições HTTP e delega a lógica de dados para o repositório.

Manutenção facilitada: Alterações no modelo ou nas regras de negócio não afetam diretamente as rotas ou a lógica de controle.

Reusabilidade: A lógica de acesso a dados pode ser reutilizada em outros contextos, enquanto o controlador gerencia as regras específicas de cada endpoint.

Com essa estrutura, a aplicação é modular e de fácil manutenção, garantindo uma base sólida para futuras expansões e adições de novas funcionalidades.
