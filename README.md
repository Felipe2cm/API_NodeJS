# API_NodeJS
Um simples exemplo de API construida utilizando o NodeJS

<h2>Rotas</h2>
A api possui 4 rotas, sendo 2 para cadastro e 2 consulta de dados
<h5>__________________________________________________________________</h5>
<ol>
<li> Post /users - Cadastro de novos usuários</li>
<li> Get /users - Listagem de todos os usuários</li>
<li> Post /users/:user_id/addresses - Cadastro de endereços para cada usuário</li>
<li> Get /users/:user_id/addresses - Listagem dos endereços de cada usuário</li>
</ol>

<h2>Migrations</h2>
Esta aplicação também conta com um sistema de migrations, que possibilita a criação do banco de dados pela própria API, além de ser uma otima forma de ter o controle de versionamento do banco, podendo-se realizar alterações na estrutra, como a exclusão ou alteração de colunas ou tabelas
