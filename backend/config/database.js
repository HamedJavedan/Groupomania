
import dotenv from 'dotenv'
dotenv.config()


import { Sequelize } from "sequelize";



const db = new Sequelize(process.env.DBNAME, process.env.USER, process.env.PASS, {
    host: process.env.HOST,
    dialect: process.env.DBMS
});


export default db;