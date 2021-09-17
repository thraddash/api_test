require('dotenv').config({path: '../.env'});

const dbhost = process.env.DB_HOST

module.exports = {
    db: 'mongodb://${dbhost}:27017/reactaxios'
};