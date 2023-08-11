import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';
import { hostname } from "os";

dotenv.config();

const sequelize = new Sequelize(process.env.PG_URL, {
    dialect:'postgres',
    host:'localhost',
    define: {
    underscored: true,
    logging: false,
    }
});

export default sequelize;