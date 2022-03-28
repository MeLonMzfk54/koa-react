import config from 'config';
import envs from "../app/constants/envs";
import env from '../app/utils/env';

if (!envs[env]) {
    throw Error(`unknown env ${env}`)
}

const PORT = process.env.PORT || config.get('port')
const MONGO_URI = process.env.MONGO_URI || config.get('mongo.uri')

export {
    PORT,
    MONGO_URI,
}