const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crudauth', 'postgres', '986152', {
    host: 'localhost',
    dialect: 'postgres',
    logging: console.log,
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados foi estabelecida com sucesso.');
    } catch (error) {
        console.error('Não foi possível conectar ao banco de dados:', error);
    }
})();

module.exports = sequelize;
