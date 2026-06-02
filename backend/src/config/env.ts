import dotenv from 'dotenv';

dotenv.config();

type NodeEnv = 'development' | 'production' | 'test'

function getNodeEnv(): NodeEnv {
  const env = process.env.NODE_ENV;

  if (
    env === 'development' ||
    env === 'production' ||
    env === 'test'
  ) {
    return env;
  }

  return 'development';
}

export const env = {
  NODE_ENV: getNodeEnv(),
  HOST: process.env.HOST || 'http://localhost:',
  PORT: Number(process.env.PORT) || 3001,
  DB_PATH: process.env.DB_PATH || './src/database/database.sqlite',
  JWT_SECRET: process.env.JWT_SECRET || 'default_secret',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '1d',
};