require('dotenv').config({ path: '../../.env' });

const MONGO_HOST = process.env.REACT_APP_MONGO_HOST

module.exports = {
    db: `mongodb://${MONGO_HOST}:27017/reactaxios`
};
