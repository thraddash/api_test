require('dotenv').config({ path: './.env' });

const MONGO_DB = process.env.REACT_APP_MONGO_DB

module.exports = {
    db: `mongodb://${MONGO_DB}:27017/reactaxios`
};
