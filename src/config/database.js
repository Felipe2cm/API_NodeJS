//Informa as credenciais para o acesso ao banco de dados mysql
module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '1234',
    database: 'sqlnode',
    define: {
        timestamps: true,
        underscored: true,
    },
};