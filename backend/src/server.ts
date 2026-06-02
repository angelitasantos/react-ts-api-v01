import app from './app';
import { env } from './config/env';
import './database/connection';
import { SERVER_RUNNING } from './constants/index';

const PORT = env.PORT;

app.listen(PORT, () => {
    console.log(SERVER_RUNNING);
    console.log(`Ambiente ... ${env.NODE_ENV}`);
});