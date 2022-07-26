require('dotenv').config();

const {env} = process;
const config = {
  env: env.NODE_ENV || 'dev',
  port: env.PORT || 3000,
  dbUser: env.DB_USER,
  dbPassword: env.DB_PASSWORD,
	dbHost: env.DB_HOST,
	dbPort: env.DB_PORT,
	dbName: env.DB_NAME,
}

module.exports = { config }
