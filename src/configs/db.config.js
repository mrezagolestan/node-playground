const env = process.env;

const config = {
    mongodb: {
        host: process.env.MONGO_HOST || "localhost",
        port: process.env.MONGO_PORT || 27017,
        db: process.env.MONGO_DB,
        user: process.env.MONGO_USER,
        pass: process.env.MONGO_PASS,
        authSource: process.env.MONGO_AUTH_SOURCE || "admin",
    }
}
export default config;