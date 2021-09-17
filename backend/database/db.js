require('dotenv').config({path: '../.env'});

const host = process.env.HOST

module.exports = {
    db: 'mongodb://${host}:27017/reactaxios'
};