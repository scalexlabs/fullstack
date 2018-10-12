const Sequelize = require("sequelize");
const AppInit = () => {
  const sequelize = new Sequelize(process.env.PG_CONNECTION_STRING, {
    dialect: "postgres",
    protocol: "postgres",
    logging: false,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });
  const EmployeeModel = sequelize.define(
    "employee",{
      id: {
          type: Sequelize.INTEGER,
          notNull: true,
          primaryKey: true,
      },
      name: {
          type: Sequelize.STRING,
          notNull: true,
      },
      email: {
          type: Sequelize.STRING,
          notNull: true,
          isEmail: true,
          isLowercase: true
      },
      age: {
          type: Sequelize.STRING,
          notNull: true,
          min: 18,
          max: 60
      },
      salary: {
          type: Sequelize.INTEGER,
          notNull: true
      }
    }
);
  return {
    sequelize,
    EmployeeModel
  };
};
export default AppInit;
