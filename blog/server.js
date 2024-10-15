const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const routes = require('./routes/index'); 
const errorHandler = require('./middlewares/errorHandler'); 

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api', routes);


app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    try {
       
        await sequelize.sync();
        console.log('Banco de dados sincronizado com sucesso.');
        
       
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1);
    }
};


startServer();
