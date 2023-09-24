import { Sequelize } from "sequelize";

export const sequelize = new Sequelize('projectsdb', 'jodev', 'mysecretpassword', {
    host: 'localhost',
    dialect: 'postgres'
})