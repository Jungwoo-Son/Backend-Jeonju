const { Sequelize } = require('sequelize');
const { DB_PASSWORD, DB_DATABASE, DB_USERNAME } = require('../conigs');


const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
    define: {
        freezeTableName: true,
        timestamps: false,

    },
    host: 'localhost',
    dialect: 'mysql'
});


async function loadDatabase() {
    try {
        await sequelize.authenticate();    
    } catch (error) {
        throw error;
    }
}

module.exports = { 
    loadDatabase, 
    sequelize
}
