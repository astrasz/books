import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: 'books_api',
  storage: "./database.sqlite",
  dialect: "sqlite",
  models: [__dirname + '/*.model.ts'],
  modelMatch: (filename, member) => {
    return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
  },
  logging: false,
})


export default sequelize;