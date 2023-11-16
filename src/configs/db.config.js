import 'dotenv/config'
const env = process.env;
const config = {
    mongodb: {
        host: env.MONGO_HOST || "localhost",
        port: env.MONGO_PORT || 27017,
        db: env.MONGO_DB,
        user: env.MONGO_USER,
        pass: env.MONGO_PASS,
        authSource: env.MONGO_AUTH_SOURCE || "admin",
    }
}
export default config;