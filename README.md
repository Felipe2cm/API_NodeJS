# API_NodeJS
Um simples exemplo de API construida utilizando o NodeJS e algumas ferramentas que auxiliam o desenvolvimento.

<h2>Rotas</h2>
A api possui 4 rotas, sendo 2 para cadastro e 2 consulta de dados.
<h5>__________________________________________________________________</h5>
<ol>
<li> Post /users - Cadastro de novos usuários</li>
<li> Get /users - Listagem de todos os usuários</li>
<li> Post /users/:user_id/addresses - Cadastro de endereços para cada usuário</li>
<li> Get /users/:user_id/addresses - Listagem dos endereços de cada usuário</li>
</ol>

<h2>Migrations</h2>
Esta aplicação também conta com um sistema de migrations, que possibilita a criação do banco de dados pela própria API, além de ser uma ótima forma de ter o controle de versionamento do banco, podendo-se realizar alterações na estrutra, como a exclusão ou alteração de colunas e tabelas.

<h2>Banco de Dados</h2>
Na esrtuturação do banco, foi utilizada uma simples relação de um para muitos, com o único intuito de exemplificar como ficaria a codificação da API neste caso.

<h2>Express</h2>
Outra importante ferramenta utilzada foi o Framework Express, que auxilia muito quando o assunto é criar um API utlizando o NodeJS.


